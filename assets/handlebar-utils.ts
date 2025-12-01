import Handlebars from 'handlebars';

export async function loadTemplate(templatePath: string, compile: boolean = true): Promise<HandlebarsTemplateDelegate | string> {
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