
const things =
    [
        {'id':1,'type':'editor','title':'aaaaa','content':'merhaba','col':12},
        {'id':2,'type':'editor','title':'bbbbb','content':'merhaba','col':12},
        {'id':3,'type':'editor','title':'ccccc','content':'merhaba','col':12},
    ]
const thing = (value) => {
  return `<div id="thing-${value.id}" class="${value.type} col-${value.col}">${value.content}</div>`
}

let root = document.querySelector('#page-builder')
things.forEach((value)=>{
    $(root).append(thing(value))
})