// ===========================
// ⭐ Création des étoiles
// ===========================

const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    stars.appendChild(star);

}



// ===========================
// ✨ Style des étoiles
// ===========================

const style = document.createElement("style");

style.innerHTML = `

.star{

position:absolute;

background:white;

border-radius:50%;

opacity:.8;

animation:twinkle 3s infinite;

}

@keyframes twinkle{

0%{
opacity:.2;
transform:scale(.7);
}

50%{
opacity:1;
transform:scale(1.3);
}

100%{
opacity:.2;
transform:scale(.7);
}

}

`;

document.head.appendChild(style);



// ===========================
// 🌠 Etoile filante
// ===========================

function shootingStar(){

const star=document.createElement("div");

star.classList.add("shooting");

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2500);

}

const shootingStyle=document.createElement("style");

shootingStyle.innerHTML=`

.shooting{

position:absolute;

top:-100px;

left:-200px;

width:250px;

height:3px;

background:linear-gradient(to right,
white,
rgba(255,255,255,0));

transform:rotate(35deg);

animation:shoot 2.5s linear;

}

@keyframes shoot{

0%{

transform:translate(-200px,-200px) rotate(35deg);

opacity:1;

}

100%{

transform:translate(1800px,900px) rotate(35deg);

opacity:0;

}

}

`;

document.head.appendChild(shootingStyle);

setInterval(shootingStar,8000);



// ===========================
// ❤️ Bouton Commencer
// ===========================

const button=document.getElementById("startButton");

button.addEventListener("click",()=>{

button.innerHTML="✨ Prépare-toi...";

button.style.transform="scale(1.12)";

button.style.boxShadow="0 0 45px #79b7ff";

});
const lines = document.querySelectorAll(".line");
const name = document.getElementById("name");
const subtitle = document.querySelector(".subtitle");
const button = document.getElementById("startButton");

name.style.opacity = "0";
subtitle.style.opacity = "0";

setTimeout(()=>{
    name.style.transition="1.5s";
    name.style.opacity="1";
},6000);

setTimeout(()=>{
    subtitle.style.transition="1.5s";
    subtitle.style.opacity="1";
},7500);

setTimeout(()=>{
    button.style.display="block";
    button.animate([
        {opacity:0,transform:"translateY(30px)"},
        {opacity:1,transform:"translateY(0px)"}
    ],{
        duration:1200,
        fill:"forwards"
    });
},9000);