import * as PagefindModularUI from "@pagefind/modular-ui";
import { marked } from 'marked';
import { customFilterPills } from "filterPills";
import Handlebars from 'handlebars';

import { makeSearchQuery } from "./searchContext";
import { getConfig } from './managers';

/**
 * Get and compile a Handlebars template from a script tag
 * @param templateId - The ID of the script tag containing the template
 * @returns Compiled Handlebars template function
 */
async function loadTemplate(templatePath: string, compile: boolean = true): Promise<HandlebarsTemplateDelegate | string> {
    const response = await fetch(templatePath);
    if (!response.ok) {
        throw new Error(`Failed to load template: ${response.statusText}`)
    } 
    const templateText = await response.text();

    if (compile){
        return Handlebars.compile(templateText);
    } else {
        return templateText
    }
    
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

    const filterTemplate = await loadTemplate('/templates/filter-list-template.html', false);

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
    
    // Get the result card template and populate it with data from the results
    const resultCardTemplate = await loadTemplate('/templates/result-card-template.html');

    if (typeof resultCardTemplate !== 'function') {
        throw new Error('The loaded resultCardTemplate is not a valid Handlebars template function.');
    }
    
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
    return instance;
}

