import { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";

function formatNodeLabel(keyString: string, nodes: Map<string, any>): string {
    const isNodeAlias = keyString.startsWith('@');
    const alias = isNodeAlias ? keyString.substring(1) : null;
    const nodeLabel = alias ? nodes.get(alias).name : keyString;

    return nodeLabel;
}

export function markdownToPdf(markdown: string, nodes: Map<string, any>, title: string): TDocumentDefinitions {
    const content: any[] = [];
    const lines = markdown.split('\n');
    let sectionContent: { title: string, content: any[] } | null = null;

    // Document title
    content.push({ text: title, style: 'documentTitle' });

    for (const line of lines) {
        // Accordion start
        if (line.match(/^::(.+)::$/) && !line.includes('end')) {
            // This checks for the title and icon (if any)
            const sectionTitle = line.match(/^::([^:{]+)(?:\{([^}]+)\})?::/)[1];
            sectionContent = { title: sectionTitle, content: [] };
            continue;
        }

        // Accordion end
        if (line.trim() === '::end::') {
            if (sectionContent && sectionContent.content.length > 0) {
                // Section header
                content.push({
                    table: {
                        widths: ['*'],
                        body: [[{ text: sectionContent.title, style: 'sectionHeader', fillColor: '#f5f5f5' }]]
                    },
                    layout: {
                        hLineWidth: (i: number, node: any) => (i === node.table.body.length) ? 1 : 0,
                        vLineWidth: () => 0,
                        hLineColor: () => '#dddddd',
                        paddingTop: () => 10,
                        paddingBottom: () => 10,
                        paddingLeft: () => 12,
                        paddingRight: () => 12
                    },
                    margin: [0, 15, 0, 0]
                });
                // Section content (fields)
                content.push(...sectionContent.content);
            }
            sectionContent = null;
            continue;
        }

        // Field with label
        const fieldMatch = line.match(/\[([^\]]+)\]\s+(.+)/);
        if (fieldMatch && fieldMatch[2]) {
            const node = {
                columns: [
                    { text: formatNodeLabel(fieldMatch[1], nodes) + ':', width: 140, style: 'fieldLabel' },
                    { text: fieldMatch[2] || '', style: 'fieldValue' }
                ],
                margin: [12, 8, 12, 0]
            };
            if (sectionContent) {
                sectionContent.content.push(node);
            } else {
                content.push(node);
            }
            continue;
        }
    }

    const styles: StyleDictionary = {
        documentTitle: {
            fontSize: 20,
            bold: true,
            color: '#1a1a1a',
            margin: [0, 0, 0, 10]
        },
        sectionHeader: {
            fontSize: 14,
            bold: true,
            color: '#1976d2'
        },
        fieldLabel: {
            bold: true,
            fontSize: 11,
            color: '#333333'
        },
        fieldValue: {
            fontSize: 11,
            color: '#666666'
        }
    };

    return { content, styles };
}

