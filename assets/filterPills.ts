import { FilterPills } from "@pagefind/modular-ui/components/filterPills";
import El from "@pagefind/modular-ui/helpers/element-builder";

interface CustomFilterPillsOptions {
    customTemplate?: string;
    filter?: string;
    containerElement?: string;
    ordering?: string[];
    alwaysShow?: boolean;
    selectMultiple?: boolean;
    pillInner?: (val: string, count: number) => string;
    makeFilterElement?: () => El;
}

export class customFilterPills extends FilterPills {
    customTemplate: string | null;

    constructor(opts: CustomFilterPillsOptions = {}) {
        super(opts);
        this.customTemplate = opts.customTemplate || null;
        console.log("CCC", this.customTemplate)
        if (this.customTemplate) {
            console.log("running 1")
            this.processTemplate(this.customTemplate);
            console.log("running 2")
            this.initContainer(opts.containerElement)
            console.log("running 3")
        }
    }

    processTemplate(template: string) {
        console.log("PT", template)
        if (!template) {
            return;
        }
        console.log("pt 1")
        const tempContainer = document.createElement("div")
        tempContainer.innerHTML = template
        console.log("pt 2")
        const pillContainer = tempContainer.querySelector('[data-pagefind-filters="pill-container"]');
        let pillInnerTemplate = null
        const wrapper = tempContainer.querySelector('[data-pagefind-filters="wrapper"]');
        console.log("pt 3")
        if (wrapper) {
            console.log("pt 45")
            wrapper.innerHTML = "";
            console.log("pt 46")
            this.wrapper = wrapper;
        }
        console.log("pt 4")
        if (pillContainer) {
            this.pillContainer = pillContainer;
            pillInnerTemplate = pillContainer.innerHTML;
        }
        console.log("pt 5")
        if (pillInnerTemplate) {
            // Convert the template element into a function that generates HTML
            const templateHTML = pillInnerTemplate;
            console.log("pillinner", templateHTML)
            this.pillInner = (val: string, count: number) => {
                const template = templateHTML
                    .replace(/\{\{value\}\}/g, val)
                    .replace(/\{\{count\}\}/g, count.toString());

                console.log("TTTT", template)
                return template
            };
        }
        console.log("pt 6")
    }

    initContainer(selector) {
        console.log("I'm using extended")
        if (!this.customTemplate) {
            console.log("returned first run")
            return
        }
        const container = document.querySelector(selector);
        if (!container) {
            console.error(`[Pagefind FilterPills component]: No container found for ${selector} selector`);
            return;
        }

        container.innerHTML = "";

        const id = `pagefind_modular_filter_pills_${this.filter}`;
        console.log("check", this.customTemplate)
        if (this.customTemplate) {
            this.wrapper.setAttribute("role", "group")
            this.wrapper.setAttribute("aria-labelledby", id)

            if (!this.alwaysShow) {
                this.wrapper.setAttribute("data-pfmod-hidden", true);
            }

            // Add accessibility label if not present
            if (!this.wrapper.querySelector(`#${id}`)) {
                new El("div")
                    .id(id)
                    .class("pagefind-modular-filter-pills-label")
                    .attrs({
                        "data-pfmod-sr-hidden": true
                    })
                    .text(`Filter results by ${this.filter}`)
                    .addTo(this.wrapper);
            }

            container.appendChild(this.wrapper);
        } else {
            // Use default template
            const wrapper = new El("div")
                .class("pagefind-modular-filter-pills-wrapper")
                .attrs({
                    "role": "group",
                    "aria-labelledby": id,
                });
            if (!this.alwaysShow) {
                wrapper.attrs({"data-pfmod-hidden": true});
            }
            
            new El("div")
                .id(id)
                .class("pagefind-modular-filter-pills-label")
                .attrs({
                    "data-pfmod-sr-hidden": true
                })
                .text(`Filter results by ${this.filter}`)
                .addTo(wrapper);

            this.pillContainer = new El("div")
                .class("pagefind-modular-filter-pills")
                .addTo(wrapper);

            this.wrapper = wrapper.addTo(container);
        }
    }

    renderNew() {
        this.available.forEach(([val, count]) => {
            // Clone the pillContainer template for each pill
            const newPillContainer = this.pillContainer.cloneNode(true) as HTMLElement;

            // Update the input element
            const input = newPillContainer.querySelector("input");
            if (input) {
                input.value = val;
                input.id = `radio_${val}_${this.filter}`;
                input.checked = this.selected.includes(val);
            }

            // Update the label element
            const label = newPillContainer.querySelector("label");
            if (label) {
                label.setAttribute("for", `radio_${val}_${this.filter}`);
                label.textContent = `${val} (${count})`;
            }

            // Add event listener to the input
            if (input) {
                input.addEventListener("click", () => {
                    if (val === "All") {
                        this.selected = ["All"];
                    } else if (this.selected.includes(val)) {
                        this.selected = this.selected.filter(v => v !== val);
                    } else if (this.selectMultiple) {
                        this.selected.push(val);
                    } else {
                        this.selected = [val];
                    }
                    if (!this.selected?.length) {
                        this.selected = ["All"];
                    } else if (this.selected?.length > 1) {
                        this.selected = this.selected.filter(v => v !== "All");
                    }
                    this.update();
                    this.pushFilters();
                });
            }

            // Append the new pillContainer to the wrapper
            this.wrapper.appendChild(newPillContainer);
        });
    }
}