let player = document.getElementById("player");
let box = document.getElementById("box");
let score = 0;


function clicked(){
    if (player.classList !== "playerjump"){
        player.classList.add("playerjump")
    }


    setTimeout(function () {
        player.classList.remove("playerjump")
    },700)

}

var checkDeath = setInterval(function (){
    var  playertop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    var boxleft = parseInt(window.getComputedStyle(box).getPropertyValue("left"))

    if (boxleft === 19){
        score++
    }

    if ((playertop<=380 && playertop>=330) && boxleft<50){
        alert("bu oyun biter puanınız:"+score)
        box.style.right = "-50"
    }
},10)

