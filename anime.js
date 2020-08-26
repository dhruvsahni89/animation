
function myMove() {
    
  var elem1=document.getElementById("sky"); 
  var elem = document.getElementById("animate");  
  var elem2 =document.getElementById("fish"); 
  var elem3 =document.getElementById("fish2"); 
  var pos = 0;
  var pis= 1200;
  var fs=1200;
  var ft=1000;
  var id = setInterval(frame, 18);
  function frame() {
    if(pos==1300 )
    {
pos=0;
fs=1000;
ft=900;
    }

     
   else {
     
    pos++;   
    pis--;
    fs--;
    ft--;
    
       
       elem.style.left = pos + "px"; 
       elem2.style.left = fs + "px";
       elem3.style.left = ft + "px"; 
      
      
       elem1.style.backgroundPosition=pis + "px";   
     
     
      
    }
    
  }
  
}
function air() {
    var elem4=document.getElementById("balloon");
    var high=200;
    var ps=0;
    var id = setInterval(frame, 30);
    function frame() {
        if(ps==1400)
        {
            ps=0;
            high=200;
        }
        if(high==20)
        {
            ps++;
            elem4.style.left = ps + "px";
            
        }
        else {
        high=high-0.5;
        ps++;
        elem4.style.left = ps + "px";
        elem4.style.top = high + "px";
        }
        

    }

}
function octopus() {
    var octopusPositionY = 0;
    var Rotate = 0;
    var pin = 1;
    var elem6 = document.getElementById("fish2");
    var Id = setInterval(octo, 25);
    function octo() {
      if (pin == 1) {
        octopusPositionY++;
        Rotate -= 0.4;
        elem6.style.transform = "translateY(" + octopusPositionY + "px) rotate(" + Rotate + "deg)";
        if (octopusPositionY == 100) {
          pin = 2;
        }
      }
      if (pin == 2 || pin == -2) {
        if (pin == 2) {
          octopusPositionY--;
          elem6.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            pin = -1;
          }
        }
        if (pin == -2) {
          octopusPositionY++;
          elem6.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            pin = 1;
          }
        }
      }
      if (pin == -1) {
        octopusPositionY--;
        elem6.style.transform = "translateY(" + octopusPositionY + "px)";
        if (octopusPositionY == -100) {
          pin = -2;
        }
      }
    }
  }
  function fishes() {
    var octopusPositionY = 0;
    var Rotate = 0;
    var pin = 1;
    var elem7 = document.getElementById("fish");
    var Id = setInterval(fish, 50);
    function fish() {
      if (pin == 1) {
        octopusPositionY++;
        Rotate -= 0.4;
        elem7.style.transform = "translateY(" + octopusPositionY + "px) rotate(" + Rotate + "deg)";
        if (octopusPositionY == 100) {
          pin = 2;
        }
      }
      if (pin == 2 || pin == -2) {
        if (pin == 2) {
          octopusPositionY--;
          elem7.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            pin = -1;
          }
        }
        if (pin == -2) {
          octopusPositionY++;
          elem7.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            pin = 1;
          }
        }
      }
      if (pin == -1) {
        octopusPositionY--;
        elem7.style.transform = "translateY(" + octopusPositionY + "px)";
        if (octopusPositionY == -100) {
          pin = -2;
        }
      }
    }
  }