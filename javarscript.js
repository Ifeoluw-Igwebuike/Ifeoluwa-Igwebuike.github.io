function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display="flex"
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display="none"
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("MySlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slides.length) {myIndex = 1}    
  slides[myIndex-1].style.display = "block";  
  setTimeout(carousel, 5000);    
}


  
