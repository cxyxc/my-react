export class Component {
    constructor(type, attrs, ...childs) {
        this.node = new type(attrs);
        this.props = attrs;
        this.children = childs
        this.childrenNode = this.render()
    }
}

class ElementWrapper {
    constructor(type, attrs, ...childs) {
        this.node = document.createElement(type);
        this.props = attrs;
        this.children = childs
    }
}

function createElement(type, attrs, ...childs) {
    console.log(typeof type)
    if(typeof type === 'string')
        return new ElementWrapper(type, attrs, ...childs)
    else
        return new type(type, attrs, ...childs)
}

function reactDomTransform(node) {

}

function render(root, dom) {
    console.log(root)
    dom.appendChild(reactDomTransform(root.node))
}

export default {
    Component,
    createElement,
    render
}