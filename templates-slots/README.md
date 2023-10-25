# Using Templates and Slots

We can use  ```<templates>``` and ```<slots>``` to create a flexible template that can be used to populate the shadow DOM of our web component.

## The ```<template>``` element

The ```<template>``` element is not rendered in the DOM, but it can be referenced using JavaScript.

```html
<template id="my-paragraph">
    <p>My Paragraph</p>
</template>
```

The above code will not be rendered until we reference it in JavaScript and then append it to the DOM.

```js
const template = document.getElementById("my-paragraph")
const templateContent = template.content
document.body.appendChild(templateContent)
```

## Using templates with web components

Here is our template:

```html
<template id="my-paragraph">
    <p>My paragraph</p>
</template>
```

Define our web component:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

Now we add our web component to our page:

```html
<my-paragraph></my-paragraph>
```

## Adding flexibility with slots

Slots are identified by their name attribute, and allow us to define placeholders in our template that can be filled with markup.

Here's an example:

```html
<template id="my-paragraph">
    <p>
        <slot name="my-text">Default text.</slot>
    </p>
</template>
```