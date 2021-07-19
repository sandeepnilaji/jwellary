var s = 0;

function show() {
  const data = JSON.parse(localStorage.getItem("carts"));
  let div = document.getElementById("container");
  div.innerHTML = null;
  data.forEach(function (el) {
    let div1 = document.createElement("div");
    let para_1 = document.createElement("p");
    let para_2 = document.createElement("p");
    para_1.innerHTML = el.name;
    para_2.innerHTML = "Price: " + el.price;
    let img = document.createElement("img");
    img.src = el.image;
    let bt = document.createElement("button");
    bt.innerHTML = "Add to cart";
    bt.addEventListener("click", function () {
      addCart(el);
    });
    let show_price = document.getElementById("priceShow");
    s = s + +el.price;
    show_price.innerHTML = s;
    div1.append(img, para_1, para_2);
    div.append(div1);
  });
}
show();

function promo() {
  let promo = document.getElementById("promo").value;
  if (promo == "masai30") {
    alert("promo applied");
    s = s - s * 0.3;
  } else {
    alert("invalid Promo");
  }
  let show_price = document.getElementById("priceShow");
  show_price.innerHTML = s;
}

function check() {
  window.location.href = "checkout.html";
}
