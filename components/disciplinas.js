class Disciplina extends HTMLElement{

    get login() {
        return this.hasAttribute('login');
      }
    
    set login(val) {
        if (val) {
            this.setAttribute('login', '');
        } else {
            this.removeAttribute('login');
        }
    }
    
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.id = this.getAttribute("id");
        this.name = this.getAttribute("name");
        this.likes = this.getAttribute("likes");
        if(this.login) this.renderLogged();
        else this.renderGuest();
    }

    renderLogged() {
        this.$shadow.innerHTML = 
            `<a href="/perfildisciplina.html?id=${this.id}">
                <div>
                    <span>${this.id} - ${this.name}</span>
                    <p>Likes:${this.likes}</p>
                </div>
            </a>`;
    }

    renderGuest() {
        this.$shadow.innerHTML = 
            `<div>
                <span>${this.id} - ${this.name}</span>
            </div>`;
    }
}

window.customElements.define('disciplina-ps', Disciplina)