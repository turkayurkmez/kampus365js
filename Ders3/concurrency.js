function getProducts() {
  //.... api'den ürünleri getiriyor. Bu uzun süren bir iş...
}

function showProductOnCard() {
  let products = getProducts();
  createTable(products);

  //yukarıda createTable metodunun çalışabilmesi için, getProducts()'un bitmesi gerekiyor.
}

/*
1. Callback:

*/
function yap(callback, faillCallback, bilmemne, o,bu,su) {
  switch (key) {
    case value:
      callback();
      break;

    default:
      faillCallback();
      break;
  }
}

function success() {
  console.log("Başarılı");
}
function hata() {
  console.log("Hatalı");
}
yap(success, hata);
var counter = 0;
//callback:
function show() {
  counter++;
  console.log("İki saniyede bir...", counter);
}

function showMessageWithTime() {
  setInterval(show, 2000);
}
