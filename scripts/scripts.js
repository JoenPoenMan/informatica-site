var x = document.getElementById("navbar");
if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ) {
    document.getElementById("navbar").classList.add('hover');
}

function togglenavbar() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        document.getElementById("navbar").classList.remove('hover');
        if (x.className == "navbar" || x.className == "navbar hover") {
            document.getElementById("navbar").className = "navbarex";
        }
        else if (x.className == "navbarex" || x.className == "navbarex hover") {
            document.getElementById("navbar").className = "navbar";
        }
    }
    else {
        document.getElementById("navbar").classList.add('hover');
    }
}