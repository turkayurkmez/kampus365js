greetings();

//isimli fonksiyon

let sampleFunction = function () {
  console.log("bu bir anonim function");
};

function greetings() {
  //console.log("Merhaba");
  //let total = addTwoNumbers(8, 6);
  //console.log(total);
  //sampleFunction();

  //kelime = rastgeleKelimeGetir();
  //console.log(kelime);
  let ortalama = ortalamasiniAl(43,34,20,43,25,31,33,28,42);
  console.log('yaş ortalaması',ortalama);
}

function addTwoNumbers(x, y) {
  return x + y;
}

function rastgeleKelimeGetir() {
  kelimeler = [
    "bilgisayar",
    "çiçek",
    "böcek",
    "telefon",
    "akşam",
    "kar fırtınası",
  ];
  //   let min = 0;
  //   let max = kelimeler.length;
  //   let index = Math.floor(Math.random() * (max - min) + min);
  let index = getRandomNumber(0, kelimeler.length);
  //console.log(index);
  return kelimeler[index];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function ciftMi(num) {
  return num % 2 == 0;
}

(num) => num % 2 == 0;

//anonim bir fonksiyon; başka bir fonksiyonla rahatlıkla değiştirilebilir.
(x, y) => {
  console.log(x / y);
  console.log(x % y);
};

function ortalamasiniAl(...numberArray){
    let toplam = 0;
    numberArray.forEach((value,index)=>toplam += value);
    return toplam / numberArray.length;

}
