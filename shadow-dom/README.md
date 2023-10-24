# Using shadow DOM

We can use a shadow DOM to attach a DOM tree to our custom element. This allows us to hide the internals of this tree from JavaScript and CSS running in the page.

## High-level view

Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree. The shadow DOM starts with a shadow root, underneath which we can attach any element, just like the normal DOM.

![Alt text](image.png)

Here is some shadow DOM terminology:

- Shadoww host: The regular DOM node that the shadow DOM is attached to.
- Shadow tree: The DOM tree inside the shadow DOM.
- Shadow boundary: The place where the shadow DOM ends, and the regular DOM begins.
- Shadow root: The root node of the shadow tree.

We can treat nodes in the shadow DOM as we would non-shadow nodes. The difference is that none of the code inside the shadow DOM can affect anything outside it.

The shadow DOM specification enables us to manipulate the shadow DOM or our custom elements.

## Creating a shadow DOM

```html
<div id="host"></div>
<span>I'm not in the shadow DOM</span>
```

We are using the "host" element as the shadow host. We can call ```attachShadow``` on the host to create the shadow DOM, and can then add nodes to the shadow DOM.

```js
const host = document.querySelector('host')
const shadow = host.attachShadow({ mode: 'open' })
const span = document.createElement('span')
span.textContent = `I'm in the shadow DOM`
shadow.appendChild(span)
```