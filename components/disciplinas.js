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
            `<link rel="stylesheet" href="./styles/disciplina.css">
            <a href="/perfildisciplina.html?id=${this.id}">
                <div class="box">
                    <span>${this.id} - ${this.name}</span>
                </div>
            </a>`;
    }

    renderGuest() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/disciplina.css">
            <div class="box">
                <span>${this.id} - ${this.name}</span>
            </div>`;
    }
}

window.customElements.define('disciplina-ps', Disciplina)