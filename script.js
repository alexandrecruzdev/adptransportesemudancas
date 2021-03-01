function openMenu() {
    document.getElementById('menu-in').style.display = "block";
    document.getElementById('close').style.visibility = "visible";
}

function closeMenu() {
    document.getElementById('menu-in').style.display = "none";
    document.getElementById('close').style.visibility = "hidden";
}


function slide() { 
    setInterval( function passaImg() {
    elemnt = document.getElementById("slideShow");
    elemnt.scrollLeft += elemnt.scrollWidth/14;
}, 3000)}


function myFunction() {
body = document.documentElement;
y = body.scrollTop;


if (y >= 1200) {
    document.getElementById("btn-top").style.visibility= "visible";
    document.getElementById("btn-down").style.visibility= "visible";
    document.getElementById("faleConosco").style.visibility= "visible";
} else {
    document.getElementById("btn-top").style.visibility= "hidden";
    document.getElementById("btn-down").style.visibility= "hidden";
    document.getElementById("faleConosco").style.visibility= "hidden";
}
}

function scrollDown() {
    body = document.documentElement;
    body.scrollTop += 500;

}

function ativaWpp() {
    document.getElementById("wpp").src="whatsappv.svg";
}

function desativaWpp() {
    document.getElementById("wpp").src="whatsapp.svg";
}

function ativaWpp2() {
    document.getElementById("wpp2").src="whatsappv.svg";
}

function desativaWpp2() {
    document.getElementById("wpp2").src="whatsapp.svg";
}


function ativaFaleConosco() {
    document.getElementById("faleConosco").src="whatsappv.svg";
}

function desativaFaleConosco() {
    document.getElementById("faleConosco").src="whatsapp.svg";
}


function mostraservicos() {

    document.getElementById("servicos-in1").style.display="block";
    document.getElementById("btn-serv-down").style.display="none";
   document.getElementById("btn-serv-top").style.display="block";
    
}

function escondeservicos() {

    document.getElementById("servicos-in1").style.display="none";
    document.getElementById("btn-serv-down").style.display="block";
   document.getElementById("btn-serv-top").style.display="none";
    
}

function mostraservicos2() {

    document.getElementById("servicos-in2").style.display="block";
    document.getElementById("btn-serv-down2").style.display="none";
   document.getElementById("btn-serv-top2").style.display="block";
    
}

function escondeservicos2() {

    document.getElementById("servicos-in2").style.display="none";
    document.getElementById("btn-serv-down2").style.display="block";
   document.getElementById("btn-serv-top2").style.display="none";
    
}

function mostraservicos3() {

    document.getElementById("servicos-in3").style.display="block";
    document.getElementById("btn-serv-down3").style.display="none";
   document.getElementById("btn-serv-top3").style.display="block";
    
}

function escondeservicos3() {

    document.getElementById("servicos-in3").style.display="none";
    document.getElementById("btn-serv-down3").style.display="block";
   document.getElementById("btn-serv-top3").style.display="none";
    
}



function deslizaPensou() {
 
    document.getElementById("txt-pensou").style.left="0";

}