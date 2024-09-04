import { productsBurguer } from "./products.js";

export function mostrarCard(idproducts) {
  const $main = document.getElementById(idproducts),
    $fragment = document.createDocumentFragment();
  
  productsBurguer.forEach((el) => {
    const article = document.createElement("article");
    article.classList.add("card-main");
    article.innerHTML = `
    <picture class="card-main__img">
      <img src="${el.img}" alt="${el.name}">
    </picture>
    <div class="card-main__info">
      <h2>${el.name}</h2>
      <p class="description">${el.description}</p>
      <strong class="price">$/${el.price}</strong>
      <button class="btn-cart">Añadir al carrito</button>
    </div>
    `;
    $fragment.appendChild(article);
  })
  $main.appendChild($fragment);
}
