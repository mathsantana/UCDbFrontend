import {removeReply} from "../model/modelPerfilDisciplinas.js";
import {renderComments} from "../controllers/perfilDisciplinas.js";

class Reply extends HTMLElement{
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.text = this.getAttribute('text');
        this.user = this.getAttribute('user');
        this.email = this.getAttribute('email');
        this.date = this.getAttribute('date');
        this.idPerfil = this.getAttribute('idperfil');
        this.idComment = this.getAttribute('idcomment');
        this.idReply = this.getAttribute('idreply');
        this.render();
    }

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/reply.css">
            <div id="reply">
            <section id="info"> 
            <p class="user">${this.user}</p>
            <p class="text">${this.text}</p>
            </section>
            <section id="options">
            <p class="date">${this.date}</p>
            <button id="remove">Remover</button>
            </section>
            </div>`;
        let $remove = this.$shadow.getElementById("remove");
        $remove.addEventListener("click", () => {
            console.log("flag");
            console.log(this.user);
            console.log(this.email);

            if (sessionStorage.getItem("email") == this.email) {
                removeReply(this.idComment, this.idReply, this.idPerfil, this.email)
                .then(() => { renderComments(); });
            } else {
                alert("Você não pode deletar essa resposta. Ela não te pertence!")
            }
        })

    }
}


window.customElements.define('reply-ps', Reply)