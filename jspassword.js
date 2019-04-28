var myWindow = 0;
OpenWin();
function OpenWin() {
  myWindow = window.open("about:newtab", "myWindow", "width=800,height=800");
}
function PassWordCheck(){
  var PassWord = prompt("Please enter your password");
  return PassWord;
}

if (PassWordCheck() == "gucci"){
  ViewGrant()
}
else
  for(var i = 0; i <= 2; i++){
    alert("Incorrect. Please try again");
    PassWordCheck();
    if(i >= 2){
      alert("Too many incorrects. Please try again");
      CloseWin();
      break;
    }
  }

function CloseWin() {
myWindow.close();
}
