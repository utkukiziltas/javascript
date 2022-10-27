
const things =
    [
        {'id':1,'type':'editor','title':'aaaaa','content':'merhaba','col':12},
        {'id':2,'type':'editor','title':'bbbbb','content':'merhaba','col':12},
        {'id':3,'type':'editor','title':'ccccc','content':'merhaba','col':12},
    ]

const thing = (value) => {
  return `<div id="thing-${value.id}" class="${value.type}  col-${value.col} thing" draggable="true">${value.title}</div>`
}

let root = document.querySelector('#page-builder'),
    row = root.querySelector('.row')



things.forEach((value)=>{
    $(row).append(thing(value))
})




setTimeout(function (){root.querySelectorAll("div").forEach((thing) => {



    thing.addEventListener('dragstart', (e) => {
        e.target.setAttribute('dragging',true)
        e.target.classList.add('bg-danger')

    });

    thing.addEventListener('drop', (e) => {
        e.target.classList.remove('bg-danger')
        let dragingthing = row.querySelector('[dragging]')

        e.target.before(dragingthing)
        console.log(things)
    });

    thing.addEventListener('dragenter', (e) => {
        e.target.classList.add('bg-danger')
        e.preventDefault();
    });

    thing.addEventListener('dragover', (e) => { e.preventDefault()});

    thing.addEventListener('dragleave', (e) => {

        e.target.classList.remove('bg-danger')

    });



    thing.addEventListener('dragend', (e) => {
        e.target.removeAttribute('dragging')
    });






})},10)