console.log('main.js loaded')

const host = document.querySelector('#host')
const shadow = host.attachShadow({ mode: 'open' })
const span = document.createElement('span')

span.textContent = `I'm in the shadow DOM`
shadow.appendChild(span)
