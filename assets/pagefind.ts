import * as PagefindModularUI from "@pagefind/modular-ui";
import { marked } from 'marked';
import { customFilterPills } from "filterPills";
import Handlebars from 'handlebars';

import { makeSearchQuery } from "./searchContext";
import { getConfig } from './managers';

/**
 * Get a precompiled Handlebars template
 * @param templateName - The name of the precompiled template
 * @returns Precompiled Handlebars template function
 */
function getPrecompiledTemplate(templateName: string): HandlebarsTemplateDelegate {
    const precompiled = (window as any).__PRECOMPILED_TEMPLATES?.[templateName];
    if (!precompiled?.template) {
        throw new Error(`Precompiled template not found: ${templateName}`);
    }
    return precompiled.template;
}

/**
 * Get template text (for non-compiled use like filter templates)
 * @param templatePath - The path to fetch the template from
 * @returns Template text as string
 */
async function loadTemplateText(templatePath: string): Promise<string> {
    const response = await fetch(templatePath);
    if (!response.ok) {
        throw new Error(`Failed to load template: ${response.statusText}`)
    }
    return await response.text();
}

export async function buildPagefind(searchAction: (term: string, settings: object, pagefind: any) => Promise<any>) {
    const instance = new PagefindModularUI.Instance({
        showImages: false,
        debounceTimeoutMs: 800,
        bundlePath: "./pagefind/",
        allowEmptySearch: true,
        searchAction
    });
    const input = new PagefindModularUI.Input({
        inputElement: "#search",
    });
    // const designationFilters = new PagefindModularUI.FilterPills({
    //     containerElement: "#filter-designation",
    //     filter: "designations",
    //     alwaysShow: true
    // });

    const filterTemplate = await loadTemplateText('/templates/filter-list-template.html');

    const filterLists = [
        {
            "container": "filter-category", 
            "filter": "Category",
            "hardcodedFilters": [
                ["All", 77],
                ["Heritage Site", 15],
                ["Historic Building", 23],
                ["Archaeological Site", 8],
                ["Monument", 12],
                ["Conservation Area", 19]
            ]
        },
        {
            "container": "filter-record-type", 
            "filter": "RecordType",
            "hardcodedFilters": [
                ["All", 77],
                ["Option 1", 15],
                ["Option 2", 23],
                ["Option 3", 8],
                ["Option 4", 12],
                ["Option 5", 19]
            ]
        },
    ]

    for (let list of filterLists) {
        const filters = new customFilterPills({
            containerElement: `#${list.container}`,
            filter: list.filter,
            alwaysShow: true,
            customTemplate: filterTemplate as string
        });

        // REMOVE just used for testing before we preindex filters
        if (list.hardcodedFilters) {
            filters.available = list.hardcodedFilters
        }

        instance.add(filters);
        // Trigger initial render with hardcoded data
        filters.update();
    }
    
    instance.add(input);
    instance.on("loading", () => {
        let rc = document.getElementById("result-count");
        rc.innerHTML = "";
        let p = document.createElement("p");
        p.classList = 'fade';
        p.innerText = 'Searching...';
        rc.append(p);
    });
    const config = await getConfig();

    // Get the result card template (precompiled)
    const resultCardTemplate = getPrecompiledTemplate('result-card-template');
    
    const resultTemplate = async function (result) {
        let description = result.meta.rawContent;
        result.excerpt = await marked.parse(description.trim());

        const url = await makeSearchQuery(result.url);
        const location = result.meta.location ? JSON.parse(result.meta.location) : null;

        const templateData = {
            title: result.meta.title || 'Untitled',
            excerpt: result.excerpt,
            url: url,
            location: location
        };

        // Render the Handlebars template
        const rawHtml = resultCardTemplate(templateData);
        return rawHtml;
    };

    // build the results list with the supplied template
    const resultList = new PagefindModularUI.ResultList({
        containerElement: "#results",
        resultTemplate
    });
    await instance.__load__();
    // This routine from pagefind.
    // instance.__search__ = async function (term, filters) {
    //     this.__dispatch__("loading");
    //     await this.__load__();
    //     const thisSearch = ++this.__searchID__;

    //     const results = await this.__pagefind__.search(term, { filters });
    //     if (results && this.__searchID__ === thisSearch) {
    //       if (results.filters && Object.keys(results.filters)?.length) {
    //         this.availableFilters = results.filters;
    //         this.totalFilters = results.totalFilters;
    //         this.__dispatch__("filters", {
    //           available: this.availableFilters,
    //           total: this.totalFilters,
    //         });
    //       }
    //       this.searchResult = results;
    //       this.__dispatch__("results", this.searchResult);
    //     }
    //   }
    instance.add(resultList);

    // Event delegation for "View on map" buttons
    const resultsContainer = document.querySelector('#results');
    if (resultsContainer) {
        resultsContainer.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const viewButton = target.closest('a.view-button');
            if (viewButton) {
                event.preventDefault();
                const locationStr = viewButton.getAttribute('data-location');
                if (locationStr && window.map) {
                    const location = JSON.parse(locationStr);
                    window.map.flyTo({ center: location, zoom: 14 });
                }
            }
        });
    }

    return instance;
}

