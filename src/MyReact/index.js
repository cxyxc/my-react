export class Component {
    constructor(attrs, ...childs) {
        this.node = document.createDocumentFragment();
        this.childs = this.render()
        this.props = {
            attrs,
            children: childs
        };
    }

    mountTo(parent) {
        return parent.appendChild(this.node)
    }

    appendChild() {
        return this.node.appendChild(this.childs)
    }
}

class ElementWrapper {
    constructor(type, attrs, ...childs) {
        this.node = document.createElement(type);
        this.childs = childs;
        this.props = {
            attrs,
            children: childs
        };
    }

    mountTo(parent) {
        return parent.appendChild(this.node)
    }

    appendChild() {
        return this.node.appendChild(this.childs)
    }
}

function createElement(type, attrs, ...childs) {
    if(typeof type === 'string')
        return new ElementWrapper(type, attrs, ...childs)
    else
        return new type(attrs, ...childs)
}

let result = document.createDocumentFragment();
function renderReactDom(root) {
    if(root.node.childs)
}

function render(root, dom) {
    dom.appendChild(renderReactDom(root))
}

export default {
    Component,
    createElement,
    render
}