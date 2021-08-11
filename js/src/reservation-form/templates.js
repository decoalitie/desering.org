import ExpandTransitionElement from '../animation/ExpandTransitionElement';

const renderedTemplates = {};

export function getTemplateElement(id) {
    return document.querySelector(`[data-template-id="${id}"]`);
}

export function getTemplateRender(id) {
    if (renderedTemplates[id]) {
        return renderedTemplates[id];
    }

    const template = getTemplateElement(id);
    const render = new ExpandTransitionElement();

    template.parentElement.insertBefore(render.element, template);
    render.element.appendChild(template.content.firstElementChild.cloneNode(true));

    renderedTemplates[id] = render;
    return render;
}

export function swapFormWithTemplate(id) {
    const render = getTemplateRender(id);

    document.querySelector("#reservation-form").style.display = 'none'; 
    render.visible = true;
}
