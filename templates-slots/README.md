# Using Templates and Slots

We can use  ```<templates>``` and ```<slots>``` to create a flexible template that can be used to populate the shadow DOM of our web component.

## The <template> element

The <template> element is not rendered in the DOM, but it can be referenced using JavaScript.

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

