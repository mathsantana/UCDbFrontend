class NavBar extends HTMLElement{

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
        if(this.login) this.renderLogged();
        else this.renderGuest();
    }

    renderLogged() {
        this.$shadow.innerHTML = 
            `<nav>
            <a href="/home.html">UCDB</a>
            <a id="sair" href="index.html">Sair</a>
            </nav>`;

        let $sair = this.$shadow.getElementById("sair");
        $sair.addEventListener("click",() => {
            sessionStorage.setItem("token", "");
            sessionStorage.setItem("email", "");
        });
    }

    renderGuest() {
        this.$shadow.innerHTML = 
            `<nav>
            <a href="index.html">UCDb</a>
            <a href="login.html">Login</a>
            <a href="cadastro.html">Cadastro</a>
            </nav>`;
    }
}

window.customElements.define('nav-bar', NavBar)