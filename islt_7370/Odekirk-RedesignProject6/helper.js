    function menu() {
      var menu = document.getElementById('menu');
      var display = menu.style.display;
      if(display=="none")
      {
        menu.style.display="block";
      }
      else
      {
        menu.style.display="none";
      }

    }

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}