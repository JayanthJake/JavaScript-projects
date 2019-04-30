/*Written by JayanthJake. Do not claim it as yours. I do not expect anything but you are
allowed to share and use as long as you credit me*/

//script to open websites at a defined interval
function OpenWindow(){
  var windows = window.open("https://www.youtube.com", "_blank"); //opens youtube.com
  
}
function CloseWindow(){
  windows.close();
}

function ContinueForever(){
setInterval(OpenWindow,500);
//setInterval(CloseWindow,600); //uncomment if you want the windows to close
}
 while(1==1){
   ContinueForever();
 }
