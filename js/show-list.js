import { Api } from "./Api.js";

const productsList = document.getElementById("list");
const guardarBtn = document.getElementById("guardar");
const limparBtn = document.getElementById("limpar");

function teste(id) {
  console.log(id);
}

function buildCard(imgUrl, title, value, id) {
  const card = `<li class="card">
            <img
            src="${imgUrl}"
            />
          <div class="card-container-info">
              <p>${title}</p>
              <div class="card-container-value">
                  <p>R$ ${value}</p>
                  <button class="thrash-button" onclick="deleteProduct('${id}')""><img src="./img/icon _trash.png"
            alt="Excluir produto"
        /></button>       
              </div>
          </div>
      </li>`;
  return card;
}

async function renderProducts() {
  const list = await Api.showProducts();

  let products = "";
  list.forEach((product) => {
    products += buildCard(
      product.imgUrl,
      product.title,
      product.value,
      product.id
    );
  });

  productsList.innerHTML = products;
}

function clearFields() {
  document.getElementById("image").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}

guardarBtn.addEventListener("click", Api.addProduct);

limparBtn.addEventListener("click", clearFields);
renderProducts();

window.deleteProduct = Api.deleteProduct;
