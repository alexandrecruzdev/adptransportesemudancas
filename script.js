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
    elemnt.scrollLeft += elemnt.scrollWidth/8;
}, 5000)}


function myFunction() {
body = document.documentElement;
y = body.scrollTop;


if (y >= 700) {
    document.getElementById("btn-top").style.visibility= "visible";
    document.getElementById("btn-down").style.visibility= "visible";
} else {
    document.getElementById("btn-top").style.visibility= "hidden";
    document.getElementById("btn-down").style.visibility= "hidden";
}
}

function scrollDown() {
    body = document.documentElement;
    body.scrollTop += 500;

}
