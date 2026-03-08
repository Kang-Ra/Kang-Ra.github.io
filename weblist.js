function dropdownmenu(){
    const menu = document.getElementById("navbar-menu");
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