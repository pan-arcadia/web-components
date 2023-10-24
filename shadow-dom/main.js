console.log('main.js loaded')

class FilledCircle extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // Create a shadow root
        // The custom element itself is the shadow host
        const shadow = this.attachShadow({ mode: "open" });

        // create the internal implementation
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle",
        );
        circle.setAttribute("cx", "50");
        circle.setAttribute("cy", "50");
        circle.setAttribute("r", "50");
        circle.setAttribute("fill", this.getAttribute("color"));
        svg.appendChild(circle);

        shadow.appendChild(svg);
    }
}

customElements.define("filled-circle", FilledCircle);

