import {giveReply, removeComment} from "../model/modelPerfilDisciplinas.js";
import {renderComments} from "../controllers/perfilDisciplinas.js";

class Comment extends HTMLElement{

    static get observedAttributes() {
        return ['reply'];
      }

    get reply() {
        return this.hasAttribute('reply');
    }

    set reply(val) {
        if (val) {
            this.setAttribute('reply', '');
          } else {
            this.removeAttribute('reply');
          }
    }
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    connectedCallback() {
        this.idComment = this.getAttribute('idcomment');
        this.email = this.getAttribute('email');
        this.text = this.getAttribute('text');
        this.user = this.getAttribute('user');
        this.date = this.getAttribute('date');
        this.idPerfil = this.getAttribute('idperfil');
        this.reply = false;
        this.render();
    }

    attributeChangedCallback(observedAttributes, oldValue, newValue) {
       if (this.reply) {
            this.toggleReply();
            let $bttnReply = this.$shadow.getElementById("replySubmit");
            let $input = this.$shadow.getElementById("replyText");
            $bttnReply.addEventListener('click', () => {
                giveReply(this.idComment, sessionStorage.getItem("email"),
                $input.value, sessionStorage.getItem("token"))
                .then(() => renderComments());
           });
       } else {
            let $div = this.$shadow.getElementById('replyField');
            this.$shadow.removeChild($div);
       }
    }
    

    render() {
        this.$shadow.innerHTML = 
            `<link rel="stylesheet" href="./styles/comment.css">
            <div>
            <section id="info"> 
            <p class="user">${this.user}</p>
            <p class="text">${this.text}</p>
            <p class="date">${this.date}</p>
            </section>
            <section id="options">
            <button id="reply">Responder</button>
            <button id="remove">Remover</button>
            </section>
            </div>`;
        let $reply = this.$shadow.getElementById("reply");
        let $remove = this.$shadow.getElementById("remove");
        $reply.addEventListener("click", () => {
            this.reply = !this.reply;
        });
        $remove.addEventListener("click", () => {
            if (sessionStorage.getItem("email") == this.email) {
                removeComment(this.idComment, this.idPerfil, this.email)
                .then(() => renderComments());
            } else {
                alert("Você não pode deletar esse comentário. Ele não é seu!")
            }
        });
    }

    
    

    toggleReply() {
        if (this.reply) {
            let $div = document.createElement("div");
            $div.setAttribute('id', 'replyField');
            let $input = document.createElement("input");
            $input.setAttribute('id', 'replyText');
            let $submit = document.createElement('button');
            $submit.setAttribute('id', 'replySubmit');
            $submit.innerText = "Responder";
            //$submit.setAttribute('onclick', 'bttnSubmit');
            $div.appendChild($input);
            $div.appendChild($submit);
            this.$shadow.appendChild($div);
        }
    }


}

window.customElements.define('comment-ps', Comment)