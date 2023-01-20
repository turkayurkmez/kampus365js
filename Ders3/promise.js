let promise = new Promise(function (tamam, olmaz) {
  let x = 5;
  if (x > 10) {
    //başarılıysa
    tamam(x);
  } else {
    olmaz("X değeri küçük"); //başarısız.
  }
});

promise.then(
  (value) => console.log("Başarılı", value),
  (err) => console.log("Olmaz", err)
);

function getDataFromApi() {
    fetch('https://swapi.dev/api/people/1/')
    .then(data=> data.json()
                     .then(sw=>console.log(sw)));
    
    
}

function getMovieFromApi(){
    fetch('https://swapi.dev/api/films/1/')
    .then(data=> data.json()
                .then(sw=>console.log(sw)));
}

async function getDataFromApiAsync(){
    console.log('await kullanıldı.....');
    let result = await fetch('https://swapi.dev/api/people/1/')
    let jSonData = await result.json();
    console.log(jSonData);
}