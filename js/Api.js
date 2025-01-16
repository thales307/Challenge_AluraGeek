function gnerateId() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

async function showProducts() {
  const response = await fetch("http://localhost:3000/products");
  const updatedResponse = await response.json();

  return updatedResponse;
}

async function newProduct(title, imgUrl, value) {
  const response = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: gnerateId(),
      title: title,
      imgUrl: imgUrl,
      value: value,
    }),
  });

  const updatedResponse = response.json();

  return updatedResponse;
}

async function addProduct() {
  const imgUrl = document.getElementById("image").value;
  const title = document.getElementById("name").value;
  const value = document.getElementById("price").value;

  await newProduct(title, imgUrl, value);
}

function deleteProduct(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
}

export const Api = {
  showProducts,
  newProduct,
  addProduct,
  deleteProduct,
};
