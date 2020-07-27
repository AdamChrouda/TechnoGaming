var elem = document.getElementById("myAnimation");
var elem2= document.getElementById("myAnimation2");
function myMove() {  
  var width = 0;
  var id = setInterval(frame, 0);
  function frame() {
    if (width == 135) {
      clearInterval(id);
    } else {
      width+=1; 
      elem.style.display= "flex";
      elem.style.width = width + 'px';
    }
  }
}
function reset(){
    elem.style.display= "none";
    elem2.style.display= "none";
    return false;
}
function myMove2() {  
    var width = 0;
    var id = setInterval(frame, );
    function frame() {
      if (width == 380) {
        clearInterval(id);
      } else {
        width+=1; 
        elem2.style.display= "flex";
        elem2.style.width = width + 'px';  
      }
    }
  }


