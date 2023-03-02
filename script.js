let menu = false;
//Función que oculta o muestra el menu
function Menu(){
    if(menu){
        document.getElementById("nav").classList ="";
        menu = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menu = true;
    }
}

function select(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menu = false;
}
//Funcion que aplica las animaciones de las habilidades
function effect(){
    var skills = document.getElementById("skills");
    var ds_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(ds_skills >= 300){
        let habbit = document.getElementsByClassName("progres");
        habbit[0].classList.add("javascript");
        habbit[1].classList.add("htmlcss");
        habbit[2].classList.add("photoshop");
        habbit[3].classList.add("wordpress");
        habbit[4].classList.add("drupal");
        habbit[5].classList.add("comunicacion");
        habbit[6].classList.add("trabajo");
        habbit[7].classList.add("creatividad");
        habbit[8].classList.add("dedicacion");
        habbit[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    effect();
} 
gsap.set(".ball", {xPercent: -50, yPercent: -50});

const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// special thanks to Blake Bowen for most of the code.

// quickTo() version, new in version 3.10.0: https://codepen.io/GreenSock/pen/xxpbORN?editors=0010
gsap.to(".content-header", {rotation: 360, x: 100, duration: 1});