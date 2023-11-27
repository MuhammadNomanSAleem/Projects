function randomPic(){
const random1 = Math.ceil(Math.random() * 6) 
const random2 = Math.ceil(Math.random() * 6) 
document.querySelectorAll("img")[0].setAttribute("src",`images/dice${random1}.png`)
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${random2}.png`)

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if(random2 > random1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩!"
} else{
    document.querySelector("h1").innerHTML = "Draw!"
}
}