let startBtn=document.getElementById("startBtn");
let blowBtn=document.getElementById("blowBtn");

let msg=document.getElementById("birthday-message");

let candle1=document.getElementById("candle1");
let candle2=document.getElementById("candle2");
let candle3=document.getElementById("candle3");
let candle4=document.getElementById("candle4");

let photo=document.getElementById("photo");

let msg1=document.getElementById("msg1");
let msg2=document.getElementById("msg2");
let msg3=document.getElementById("msg3");
let msg4=document.getElementById("msg4");
let msg5=document.getElementById("msg5");
let msg6=document.getElementById("msg6");
let msg7=document.getElementById("msg7");

let audio=document.getElementById("myAudio");

blowBtn.style.display="none";


startBtn.onclick=startBirthday;

function startBirthday(){

startBtn.style.display="none";

blowBtn.style.display="inline-block";

msg.innerText="Click Blow Candle 🎂";

audio.src="./audios/introMusic.mp3";
audio.play();

}


blowBtn.onclick=blowCandle;

function blowCandle(){

msg.innerText="Happy Birthday Preksha 🎉";

candle1.style.display="none";
candle2.style.display="none";
candle3.style.display="none";
candle4.style.display="none";

photo.style.display="block";

msg1.innerText="Happy Birthday Preksha 🎂";
msg2.innerText="May all your dream come true 🌟";
msg3.innerText="I hope you have a great day 🌟";
msg4.innerText="You deserve happiness 😊";
msg5.innerText="Enjoy every moment today 🎉";
msg6.innerText="Best wishes from your friend";
msg7.innerText="Be successful🌏";

audio.src="./audios/endMusic.mp3";
audio.loop=true;
audio.play();

}


let balloons=document.querySelectorAll(".balloon");

function randomPosition(){

balloons.forEach(balloon=>{

let x=Math.random()*window.innerWidth;
let y=Math.random()*window.innerHeight;

balloon.style.left=x+"px";
balloon.style.top=y+"px";

});

}

setInterval(randomPosition,3000);