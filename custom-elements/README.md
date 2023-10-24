# Custom Elements

Custom elements are defined using a set of JavaScript APIs. These are also used to define their behavior.

Web components give us the ablility to create *custom elements*. We define the behavior of the custom element.

## Types of Custom Elements

1. **Customized built-in elements** inherit from standard HTML elements. We can customize the standard element.
2. **Autonomous custom elements** inherit from the HTML element base class *HTMLElement*. We implement their behavior from scratch.

## Implementing a custom element

We implement a custom element as a *class* which extends *HTMLElement*.

Here is an example of a custom element that customizes the ```<p>``` element:

```js
class MyParagraph extends HTMLParagraphElement {
    constructor() {
        super()
    }
    // Element functionality goes here...
}
```

Here is an example of an autonomous custom element:

```js
class PopupInfo extends HTMLElement {
    constructor() {
        super()
    }

    // Element functionalilty goes here...
}
```

In the class *constructor*, we can set up the initial state and default values, register event listeners and create a shadow root.

## Custom element lifecycle callbacks

Once our custom element is registered, the browser will call certain methods of our class when our custom element experiences interactions from the page. The specification provides *lifecycle callbacks* that can run code in response to event interactions.

The following are lifecycle callbacks:

- connectedCallback(): called each time the element is added to the document. It's recommended that we should custom element setup in this callback rather than the constructor.
- disconnectedCallback(): called each time the element is removed from the document.
- adoptedCallback(): called each time the element is moved to a new document.
- attributeChangedCallback(): called when attributes are changed, added, removed, or replaced.

```js
// Create a class for the element.
class MyCustomElement extends HTMLElement {
    static observedAttributes = ['color', 'size']

    constuctor() {
        // Always call super first in the constructor.
        super()
    }

    connectedCallback() {
        console.log('MyCustomElement added to the page.')
    }

    disconnectedCallback() {
        console.log('MyCustomElement removed from the page.')
    }

    adoptedCallback() {
        console.log('MyCustomElement moved to a new page.')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Attribute ${name} has changed.')
    }
}

customElements.define('my-custom-element', MyCustomElement)
```

## Registering a custom element

We call the ```define()``` method of ```Window.customElements``` to make our custom element available on our page.

The ```define()``` method takes the following arguments:

- ```name```: The name of the element. Use lowecase and include a hyphen.
- ```constructor```: The custom elements constructor function.
- ```options```: Only included for customized built-in elements, this is an object containing a single property ```extends```, which is a string naming the element to extend.

The following code registers the ```MyParagraph``` customized built-in element: 

```js
customElements.define('my-paragraph', MyParagraph, { extends: 'p' })
```

The following code registers the ```PopupInfo``` autonomous custom element:

```js
customElements.define('popup-info', PopupInfo)
```

## Using a custom element

Once we have defined and registered our custom element, we can use it in our code.

If we are using a *customized built-in* element, we add the ```is``` attribute in code to specify that we are using our custom element:

```html
<p is="my-element"></p>
```

When using an autonomouw custom element, we simply use the custom name of our element:

```html
<my-element>
    <!-- content of our element -->
</my-element>
```

## Responding to attribute changes

We will want our custom element respond to attribute value changes. We can accomplish this by adding the following members to our custom element class:

- A static property named ```observedAttributes```. This is an array containing the names of the attributes that we will be observing for changes.
- The ```attributeChangedCallback()``` lifecycle callback.

The ```attributeChangedCallback()``` callback is called whenever an attrubute whose name is listed in the element's ```observedAttributes``` property is added, modified, removed, or replaced.

The callback is passed three arguments:

- The name of the attribute which changed.
- The attribute's old value.
- The attribute's new value.

Here's an example:

```js
class MyElement extends HTMLElement {
    static observedAttributes = ['size']

    constructor() {
        super()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
        )
    }
}

customElements.define('my-element, MyElement)
```

```html
<my-element size="100"></my-element>
```

Note that if the custom element includes an observed attribute, the ```attributeChangedCallback()``` is called when the when the attribute is initialized. So, it will be called when the DOM is parsed.

