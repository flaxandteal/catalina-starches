// Active filter management
interface ActiveFilter {
    category: string;
    value: string;
    label: string;
}

const activeFilters: Map<string, ActiveFilter> = new Map();

function updateActiveFiltersList(): void {
    const filterList = document.querySelector('.tag-list.tag-dark.my-0');
    if (!filterList) return;

    const existingFilters = filterList.querySelectorAll('li');
    console.log("existing filters", existingFilters)
    existingFilters.forEach(filter => filter.remove());

    activeFilters.forEach((filter) => {
        const li = document.createElement('li');
        li.className = 'tag-item tag-large';
        li.innerHTML = `
            ${filter.label}
            <button class="tag-clear-filter-button" aria-label="Remove ${filter.label}" data-category="${filter.category}"></button>
        `;
        
        const clearBtn = li.querySelector('.tag-clear-filter-button');
        if (clearBtn) {
            clearBtn.addEventListener('click', (e: Event): void => {
                e.stopPropagation();
                removeFilter(filter.category);
            });
        }
        
        filterList.appendChild(li);
    });

    const firstItem = filterList.querySelector('li:first-child');
    if (firstItem) {
        if (activeFilters.size > 0) {
            firstItem.classList.remove('d-none');
        } else {
            firstItem.classList.add('d-none');
        }
    }
}

function removeFilter(category: string): void {
    activeFilters.delete(category);
    
    // Reset to "All" option for this category
    const allRadio = document.querySelector<HTMLInputElement>(
        `input[name="${category}Option"][value="All"]`
    );
    if (allRadio) {
        allRadio.checked = true;
    }
    
    updateActiveFiltersList();
}

function hasSearchResults(): boolean {
    const searchResults = document.getElementById('results');
    if (!searchResults) return false;
    const listItems = searchResults.querySelectorAll('li');
    return listItems.length > 0;
}

// Filter toggle functionality
document.addEventListener('DOMContentLoaded', (): void => {
    const filterToggle = document.getElementById('filterToggle');
    if (filterToggle) {
        filterToggle.addEventListener('click', (event: Event): void => {
            event.preventDefault();

            const filterContent = document.getElementById('filterContent');
            if (!filterContent) return;

            const isExpanded = filterToggle.getAttribute('aria-expanded') === 'true';

            filterToggle.setAttribute('aria-expanded', (!isExpanded).toString());

            if (filterContent.classList.contains('expanded')) {
                filterContent.classList.remove('expanded');
            } else {
                filterContent.classList.add('expanded');
            }
        });
    }

    // Tag switching functionality
    document.querySelectorAll<HTMLElement>('.tag').forEach((tag: HTMLElement): void => {
        tag.addEventListener('click', function(this: HTMLElement): void {
            document.querySelectorAll<HTMLElement>('.tag').forEach((t: HTMLElement): void => {
                t.classList.remove('selected');
            });

            // Add 'selected' class to the clicked tag
            this.classList.add('selected');

            // Hide all content items
            document.querySelectorAll<HTMLElement>('.content-item').forEach((content: HTMLElement): void => {
                content.classList.remove('active');
            });

            // Show the content linked to the clicked tag
            const contentId = this.getAttribute('data-content');
            if (contentId) {
                const contentToShow = document.getElementById(contentId);
                if (contentToShow) {
                    contentToShow.classList.add('active');
                }
            }
        });
    });

    // Help toggle functionality
    const helpToggle = document.getElementById('help-toggle');
    const helpContent = document.getElementById('help-content');
    
    if (helpToggle) {
        helpToggle.addEventListener('click', (event: Event): void => {
            event.preventDefault();

            if (!helpContent) return;

            const isExpanded = helpToggle.getAttribute('aria-expanded') === 'true';

            helpToggle.setAttribute('aria-expanded', (!isExpanded).toString());
            helpContent.classList.toggle('hidden');
        });
    }

    // Monitor search results container for changes and hide help content when search results are present
    const resultsContainer = document.getElementById('results');
    if (resultsContainer && helpContent) {
        const observer = new MutationObserver((): void => {
            if (hasSearchResults()) {
                helpContent.classList.add('hidden');
                if (helpToggle) {
                    helpToggle.setAttribute('aria-expanded', 'false');
                }
            } else {
                // Show help content again when results are cleared
                helpContent.classList.remove('hidden');
                if (helpToggle) {
                    helpToggle.setAttribute('aria-expanded', 'true');
                }
            }
        });

        // Observe changes to the results container
        observer.observe(resultsContainer, {
            childList: true,
            subtree: true
        });
    }

    // Initialize: hide the filter label if no filters are active
    const firstFilterItem = document.querySelector('.tag-list.tag-dark.my-0 li:first-child');
    if (firstFilterItem && activeFilters.size === 0) {
        firstFilterItem.classList.add('d-none');
    }
});
