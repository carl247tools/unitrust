
function codeAddress() {
$("#info").hide();
   onLoad();         
setTimeout(function(){$("#mainLoader").css("visibility","visible");},5000);
setTimeout(function(){$("#mainLoader").css("visibility","hidden");},7000);
var duration = 6000;
    setTimeout(function() {
$("#info").show();
$("#carl").fadeOut( 1500 );

}, duration);

var duration2 = 4000;
    setTimeout(function() {  
 checkNetConnection();  
 }, duration2);
	 }
window.onload = codeAddress;

var online = navigator.onLine || false;
$(document).ready(function() { 
  $(document).bind('deviceready', function(){
    onDeviceReady()
  })
  // Your main code
}) 
function onLoad() {
if(online) {
	window.screen.orientation.lock('portrait'); 
} else {
	navigator.vibrate(500);
  alert("Connection Not Available\nCheck Network settings and Try Again!!!");
  navigator.app.exitApp();
}
}

   
function checkNetConnection(){
  var xhr = new XMLHttpRequest();
 var file = "https://raw.githubusercontent.com/carl247tools/unitrust/master/minus-black.png";
 var r = Math.round(Math.random() * 10000);
 xhr.open('HEAD', file + '?subins=' + r, false);
 try {
  xhr.send();
  if (xhr.status >= 200 && xhr.status < 304) {
   return true;
  } else {
	  navigator.vibrate(500);
	  swal("Network Error!!!", "Check Internet Connection Or check if app is running in Latest Version and Try Again.", "error");
	  var dura = 3000;
    setTimeout(function() {
	  navigator.app.exitApp();
	  }, dura);
   return false;
  }
 } catch (e) {
	 navigator.vibrate(500);
	  swal("Network Error!!!", "Check Internet Connection Or check if app is running in Latest Version and Try Again.", "error");
	  var dura = 3000;
    setTimeout(function() {
	  navigator.app.exitApp();
	  }, dura);
   return false;
 }
}

function logout() {
$('#usern').value = "";
alert("You Have sucessfully Logged out!!!");
window.location = "#page";
return true;
}
