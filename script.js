document.getElementById("navbar").addEventListener("click", function(e) {
    var activeLink = document.querySelector(".navbar a.active");
    activeLink.classList.remove("active");
    e.target.classList.add("active");
  
    var rect = e.target.getBoundingClientRect();
    var offset = rect.top - this.getBoundingClientRect().top;
    document.querySelector(".indicator").style.transform = "translateY(" + offset + "px)";
  });
  