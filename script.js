function showHome() {
  $(".content").load("home.html");
  changeAdmToLogin();
}

function showLogin() {
  $(".content").load("login.html");
}

function showAddProduct() {
  $(".content").load("addProduct.html");
  changeLoginToAdm();
}

function showViewProducts() {
  $(".content").load("viewProducts.html");
}

function changeLoginToAdm() {
  const loginBtn = document.querySelector(".login__btn");
  loginBtn.textContent = "Menu Administrador";
  loginBtn.onclick = showViewProducts;
}

function changeAdmToLogin() {
  const loginBtn = document.querySelector(".login__btn");
  loginBtn.textContent = "Menu Administrador";
  loginBtn.onclick = showViewProducts;
}
