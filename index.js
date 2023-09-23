var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice = "dice"+randomNumber1+".png";
// var randomimg = "images/"+randomDice;
var  img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDice);

var randomnum2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice"+randomnum2+".png"
// var randomImg2= "images/" +randomDice2;
var img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src", randomDice2);

if(randomNumber1>randomnum2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩"
}else if(randomNumber1<randomnum2) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
}else{document.querySelector("h1").innerHTML="🚩 Draw....!!! 🚩"}