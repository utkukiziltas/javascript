let btn = document.getElementById("buton");

btn.addEventListener("click",function (){
    import('./utils.js')
        .then(module =>{
            btn.innerText=module.default();
            console.log(module)
        })
})

//asyncrone fonksiyon
btn.addEventListener("dblclick",async function (){
    const module = await import('./utils.js');
    console.log(module.API)
})