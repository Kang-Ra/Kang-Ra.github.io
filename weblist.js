function dropdownmenu(){
    const menu = document.getElementById("navbar-menu");
    menu.classList.toggle("active");
}

function tampilalert(){
    document.getElementById("alert-container").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("alertbox").style.display = "flex";
    return;
}

function closealert(){
    document.getElementById("alertbox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    return;
}