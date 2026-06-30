function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
 function myFunction() {
        document.getElementById("myButton").innerHTML = "Hello you";
      }
      
  
  function myFunction() {
        document.getElementById("myButton").style.backgroundColor = "coral";
      }
      