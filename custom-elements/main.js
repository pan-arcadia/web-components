class MyElement extends HTMLElement {
    static observedAttributes = ['size', 'color', 'range']

    constructor() {
        super()
    }

    connectedCallback() {
        console.log('MyElement added to the page.')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`)
    }
}

customElements.define('my-element', MyElement)