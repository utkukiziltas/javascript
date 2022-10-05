document.querySelector("#btn1").addEventListener("click",getext);
document.querySelector("#btn2").addEventListener("click",getjson);
document.querySelector("#btn3").addEventListener("click",getApi);




let autocomplate = document.querySelector("#autocomplate")
autocomplate.addEventListener("keyup",autocomplatef);

let output = document.querySelector("#output");

function getext(){
    fetch("text.txt")
        .then(data =>{
            return data.text();
        })
        .then(promise => {
            output.innerHTML = promise
        })
}

function getjson(){
    fetch("article.json")
        .then(data =>{
            return data.json();
        })
        .then(promise => {
            let out ="<ul>"
            promise.forEach(e =>{
              out += `<li>başlık: ${e.title} </li>`;
            })
            output.innerHTML= out;
        })
}

function autocomplatef(){
    fetch("article.json")
        .then(data =>{
            return data.json();
        })
        .then(promise => {
            let out ="<ul>"
            promise.forEach(e =>{
                if (e.title.includes(autocomplate.value) && autocomplate.value != 0){
                    out += `<li>başlık: ${e.title} </li>`;
                }
            })
               output.innerHTML= out;
        })
}


function getApi(){
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(data =>{
            return data.json();
        }).then(promise => {
            console.log(promise)
    })

}
