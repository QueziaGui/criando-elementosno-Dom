document.createElement("li");

let elementoJavaScript = document.createElement("li");

elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens");
listaLinguagens.appendChild(elementoJavaScript);

//Adiconando elementos mais complexos
const postagemJavaScript = document.createElement("div");

postagemJavaScript.innerHTML =

`<h2 class="post-titulo">JavaScript</h2>

<p class="post-texto">

  JavaScript é uma linguagem de programação

</p>`

//Nessa etapa, capturamos o elemento pai da nossa postagem e salvamos ele em uma variável:

const postagens = document.querySelector(".postagens");

//Nele, adicionamos o elemento postagemJavaScript através do método appendChild().

postagens.appendChild(postagemJavaScript);