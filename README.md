# [UCDbFrontend](http://ucdbfront.herokuapp.com/)
> Repositório referente ao frontend do projeto final da disciplina de Projeto de Software na UFCG.

Esse projeto tem como finalidade simular uma rede social de disciplinas onde cada disciplina tem um perfil associado, possuindo opções de likes e comentarios.

## O projeto utilizou das seguintes ferramentas:
    - jQuery
    - Vanilla JS
    - HTML 5
    - CSS
    - Heroku (Deploy)
    - Padrão Híbrido (MVC + CBA)

## Diretórios usados:
- No caminho atual (`.`), temos todas as páginas html de nossa aplicação, referentes a view:
    - `index.html` Página inicial da aplicação, que mostra as disciplinas do curso.
    - `cadastro.html` Página onde um novo usuário pode se cadastrar.
    - `login.html` Página cuja usuário pode realizar a autenticação.
    - `home.html` Página 'home' do usuário cadastrado. Lista os perfis de disciplina.
    - `perfildisciplina.html` Página que é usada para renderizar os dados dos perfis das disciplinas.

- `controllers/` Diretório que contém todos os controllers da aplicação.
    - `cadastro.js` Controller da view de cadastro.
    - `disciplinas.js` Controller da view principal (`index.html`).
    - `home.js` Controller da view de usuários autenticados.
    - `login.js` Controller da página de autenticação de usuários.
    - `perfilDisciplinas.js` Controller da página dos perfis das disciplinas.

- `model/` Diretório que contém todos os arquivos referentes a parte MODEL da aplicação.
    - `modelDisciplinas.js` Model que faz as requisições ao backend referentes às disciplinas.
    - `modelPerfilDisciplinas.js` Model que faz as requisições ao backend referentes a perfil de disciplina.
    - `modelUsers.js` Model que faz as requisições ao backend referentes aos usuários.

- `components/` Diretório que contém os códigos referentes aos web components da aplicação.
    - `comment.js` Referente ao web component de comentários.
    - `disciplinas.js` Referente ao web component de disciplinas.
    - `navbar.js` Arquivo referente ao web component da barra de navegação, utilizada em toda a aplicação.
    - `reply.js` Referente ao web component de respostas de comentários. 

- `styles/` Diretório que contém toda a estilização em CSS das páginas HTML da aplicação.

# Backend:
- [Repositório da aplicação do Backend](https://github.com/yuri-s-s/UCDbBackend-pSoft)

## Desenvolvedores
- [Matheus Santana](https://github.com/mathsantana)
- [Yuri Souza](https://github.com/yuri-s-s)

