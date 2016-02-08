window.onload = function (){

var clock = document.getElementById('clock');

writeDate(); 


window.setInterval(function(){
  //iga 500ms tagant uuendab kellaaega
  writeDate();

}, 500);

writeDate();


};

//võtab aja ja kirjutab elemendi sisse
function writeDate(){

  var today =new Date();

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();


clock.innerHTML = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds);

}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}
