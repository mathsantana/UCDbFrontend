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
            `<link rel="stylesheet" href="./styles/navbar.css">
            <nav>
            <ul>
            <li><a class="main" href="/home.html">UCDB</a></li>
            <li><a class="second" id="sair" href="index.html">Sair</a></li>
            </ul>
            </nav>`;

        let $sair = this.$shadow.getElementById("sair");
        $sair.addEventListener("click",() => {
            sessionStorage.setItem("token", "");
            sessionStorage.setItem("email", "");
        });
    }

    renderGuest() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/navbar.css">
            <nav>
            <ul>
            <li><a class="main" href="index.html">UCDb</a></li>
            <li><a class="second" href="cadastro.html">Cadastro</a></li>
            <li><a class="second" href="login.html">Login</a></li>
            </ul>
            </nav>`;
    }
}

window.customElements.define('nav-bar', NavBar)