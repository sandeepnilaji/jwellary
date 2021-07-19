let store = [
  {
    name: "Jweller1",
    price: 10000,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91tpo1ic9vL._AC_UY625_.jpg",
  },
  {
    name: "Jweller2",
    price: 20000,
    image:
      "https://i.pinimg.com/originals/2a/75/7a/2a757ab93685d969744c24621d803c99.jpg",
  },
  {
    name: "Jweller3",
    price: 30000,
    image:
      "https://sc02.alicdn.com/kf/HTB1YroYPFXXXXaIXXXXq6xXFXXXV/230101071/HTB1YroYPFXXXXaIXXXXq6xXFXXXV.jpg",
  },
  {
    name: "Jweller4",
    price: 40000,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/917p%2ButAmLL._AC_UL1500_.jpg",
  },
  {
    name: "Jweller5",
    price: 50000,
    image:
      "https://i.pinimg.com/originals/49/f1/1a/49f11ae6020c369462add4daafdab4aa.jpg",
  },
  {
    name: "Jweller6",
    price: 60000,
    image:
      "https://i.pinimg.com/originals/de/55/e3/de55e3a7252fae84af1c97bad4b5e9bc.jpg",
  },
];

if (localStorage.getItem("store") == null) {
  localStorage.setItem("store", JSON.stringify(store));
}

function show(s) {
  const data = s;
  //   console.log(data);
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
    div1.append(img, para_1, para_2, bt);
    div.append(div1);
  });
}
show(JSON.parse(localStorage.getItem("store")));

function low() {
  let data1 = JSON.parse(localStorage.getItem("store"));
  data = data1.sort(function (a, b) {
    return a.price - b.price;
  });
  show(data);
}

function high() {
  let data1 = JSON.parse(localStorage.getItem("store"));
  data = data1.sort(function (a, b) {
    return b.price - a.price;
  });
  show(data);
}

function addCart(b) {
  let arr;
  arr = localStorage.getItem("carts");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("carts"));
  }
  arr.push(b);
  localStorage.setItem("carts", JSON.stringify(arr));
}

function showCart() {
  window.location.href = "cart.html";
}
