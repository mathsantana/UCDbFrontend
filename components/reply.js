class Reply extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.text = this.getAttribute('text');
        this.user = this.getAttribute('user');
        this.date = this.getAttribute('date');
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="">
            <p class="user">${this.user}</p>
             <p class="text">${this.text}</p>
             <date class="date">${this.date}</time>`;

    }
}

window.customElements.define('reply-ps', Reply)