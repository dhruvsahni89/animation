
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
       /*elem1.style.right=pos + "px"; */ 
       elem1.style.backgroundPosition=pis + "px";   
      elem2.style.transform="translate(1px) rotate(20deg)";
     
      
    }
    
  }
  
}
