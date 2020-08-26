
function myMove() {
    
  var elem1=document.getElementById("sky"); 
  var elem = document.getElementById("animate");  
  var elem2 =document.getElementById("fish"); 
  var elem3 =document.getElementById("fish2"); 
  var pos = 0;
  var pis= 1200;
  var fs=1200;
 var ft=1000;
  var up=380;
  var id = setInterval(frame, 12);
  function frame() {
    if(pos==1300 )
    {
pos=0;
pis=1200;
fs=1000;
ft=900;
    }

      if(up<340){
        up=up+0.5;
      

      }
   else {
     
    pos++;   
    pis--;
    fs--;
    ft--;
    up=up-0.5;
       
       elem.style.left = pos + "px"; 
       elem2.style.left = fs + "px";
       elem3.style.left = ft + "px"; 
       elem2.style.top = up + "px";
      
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
    let octopusPositionY = 0;
    let Rotate = 0;
    let flag = 1;
    let elem6 = document.getElementById("fish2");
    let fxnId = setInterval(octo, 20);
    function octo() {
      if (flag == 1) {
        octopusPositionY++;
        Rotate -= 0.4;
        elem6.style.transform = "translateY(" + octopusPositionY + "px) rotate(" + Rotate + "deg)";
        if (octopusPositionY == 100) {
          flag = 2;
        }
      }
      if (flag == 2 || flag == -2) {
        if (flag == 2) {
          octopusPositionY--;
          elem6.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            flag = -1;
          }
        }
        if (flag == -2) {
          octopusPositionY++;
          elem6.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            flag = 1;
          }
        }
      }
      if (flag == -1) {
        octopusPositionY--;
        elem6.style.transform = "translateY(" + octopusPositionY + "px)";
        if (octopusPositionY == -100) {
          flag = -2;
        }
      }
    }
  }
  function fishes() {
    let octopusPositionY = 0;
    let Rotate = 0;
    let flag = 1;
    let elem7 = document.getElementById("fish");
    let fxnId = setInterval(fish, 30);
    function fish() {
      if (flag == 1) {
        octopusPositionY++;
        Rotate -= 0.4;
        elem7.style.transform = "translateY(" + octopusPositionY + "px) rotate(" + Rotate + "deg)";
        if (octopusPositionY == 50) {
          flag = 2;
        }
      }
      if (flag == 2 || flag == -2) {
        if (flag == 2) {
          octopusPositionY--;
          elem7.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            flag = -1;
          }
        }
        if (flag == -2) {
          octopusPositionY++;
          elem7.style.transform = "translateY(" + octopusPositionY + "px)";
          if (octopusPositionY == 0) {
            flag = 1;
          }
        }
      }
      if (flag == -1) {
        octopusPositionY--;
        elem7.style.transform = "translateY(" + octopusPositionY + "px)";
        if (octopusPositionY == -50) {
          flag = -2;
        }
      }
    }
  }