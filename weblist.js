function dropdownmenu(){
    const ul = document.getElementById("navbar-menu");
    const close = document.getElementById("logox")
    const menu = document.getElementById("logomenu")
    
    ul.classList.toggle("active");
    close.classList.toggle("active");
    menu.classList.toggle("active");
}

function tampilalert(e){
     e.preventDefault();

    document.getElementById("alert-container").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("alertbox").style.display = "flex";

     setTimeout(function(){
        document.getElementById("formkontak").submit();
    }, 2000);
}