let carts = document.querySelectorAll(".add-cart button");


let products = [
    {
        id:0,
        name:"grey tshirt",
        tag:"greytshirt",
        price:"30",
        inCart:0
    },
    {
        id:1,
        name:"red tshirt",
        tag:"redtshirt",
        price:"30",
        inCart:0
    },
    {
        id:2,
        name:"black tshirt",
        tag:"blacktshirt",
        price:"30",
        inCart:0
    },
    {
        id:3,
        name:"yellow tshirt",
        tag:"yellowtshirt",
        price:"30",
        inCart:0
    },
    {
        id:4,
        name:"green tshirt",
        tag:"greentshirt",
        price:"30",
        inCart:0
    }
]




carts.forEach(function (value, key, parent) {
    value.addEventListener("click",function (){
        ProductCount(value);
        CartCount(value);
        SetCart(value.getAttribute("data-tag"));
        console.log(localStorage.getItem("CartItems"))
    })
})




function CartCount(value){
    let ProductNumber = localStorage.getItem("ProductCount");
    let  cart = document.querySelector(".cart span");
    ProductNumber = parseInt(ProductNumber);
    if (ProductNumber){
        cart.innerHTML = ProductNumber;
    }else{
        cart.innerHTML = "0";
    }
}
CartCount();

function ProductCount(value){
    let ProductNumber = localStorage.getItem("ProductCount")
    ProductNumber = parseInt(ProductNumber);
    if (ProductNumber){
        localStorage.setItem("ProductCount",ProductNumber + 1)
    }else{
        localStorage.setItem("ProductCount",1)
    }
}

function SetCart(value){

    let CartItems = localStorage.getItem("CartItems");


    if (CartItems == null){
        products.forEach(item=>{
            if(item.tag === value){
                item = JSON.stringify(item);
                localStorage.setItem("CartItems",item)
            }
        })
    }else{
        products.forEach(item=>{
            if(item.tag === value){
                item = JSON.stringify(item);
                CartItems =[CartItems,
                    item
                ]
                localStorage.setItem("CartItems",CartItems)
            }
        })
    }
}