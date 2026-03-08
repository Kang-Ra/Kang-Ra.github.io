function dropdownmenu(){
    const menu = document.getElementById("navbar-menu");
    menu.classList.toggle("active");
}

function tampilalert(){
    document.getElementById("alertbox").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closealert(){
    document.getElementById("alertbox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}