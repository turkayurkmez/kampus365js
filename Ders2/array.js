"use strict";
//Modern JS kullanılacağını belirtmek için pure js yazdığınız durumlarda dosyanın en üstüne bu ifade yazılmalıdır.
let colors = ["red", "white", "blue", "green"];
console.log("ilk eleman:", colors[0]);
console.log("son eleman:", colors[colors.length - 1]);

let anotherColors = new Array("yellow", "darkred", "black");

let ageOfStudents = new Array(16);
ageOfStudents[0] = 43;
ageOfStudents[1] = 19;
ageOfStudents[2] = 24;
// ageOfStudents.push(25);
console.log(ageOfStudents[-2]);

//tavsiye: index değerlerinde (-) kullanmayın.
function yaziyaCevir(){
    let sayi = document.getElementById('textSayi').value;
    let onlar = ['','on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
    let birler = ['','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'];

    let onlarBasamagindakiSayi = Math.floor(sayi / 10);
    console.log(onlarBasamagindakiSayi);
    let birlerBasamagindakiSayi = sayi % 10;

    let okunus =  onlar[onlarBasamagindakiSayi]+' '+birler[birlerBasamagindakiSayi];
    document.getElementById('spOku').innerText = okunus;


}

var  katilimcilar = [];
function ekle() {
    let katilimci = document.getElementById('textKatilimci').value;
    katilimcilar.push(katilimci);
    document.getElementById('textKatilimci').value='';
    document.getElementById('toplam').innerText = katilimcilar.length;
}

function goster(){
    //['Türkay','Sercan','Ekim']
    for (let index = 0; index < katilimcilar.length; index++) {
        const element = katilimcilar[index];
        //let li = `<li>${element}</li>`;
        let li = document.createElement('li');
        li.innerText = element;
        document.getElementById('katilimcilar').append(li);
        
    }


}

