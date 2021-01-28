// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    // Set the date we're counting down to
    var countDownDate = new Date("Feb 1, 2021 09:54:25").getTime();
    var now = new Date().getTime();    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    var timer = days + ":" + hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = "SUBMISSION DEADLINE " + timer;
    document.getElementById("time-mobile").innerHTML = "SUBMISSION DEADLINE " + timer;
  
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "SUBMISSION CLOSED";
      document.getElementById("time-mobile").innerHTML = "SUBMISSION CLOSED";
    }
  }, 1000);
// dynamic subgenre select options
// dance options
var dance = {
  selectgenre: 'Select subgenre',
  deep_house : 'Deep House',
  com_house : 'Commercial House',
  kwaito  : "Kwaito",
  amapiano : 'Amapiano',
  afro  : "Afro Pop",
  gqom  : "Gqom"
};
// rnb options
var rnb_soul = {
  selectgenre: 'Select subgenre',
  afro : 'Afro Soul',
  jazz : 'Jazz',
  rnb  : "RnB",
  gospel : 'Gospel',
  acapella  : "Acapella"
};
// traditional options
var traditional = {
  selectgenre: 'Select subgenre',
  mbaqanga : 'Mbaqanga',
  schathamiya : 'Schathamiya',
  other  : "Other"
};
// reggae options
var reggae = {
  selectgenre: 'Select subgenre',
  dancehall : 'Dance Hall',
  conscious : 'Conscious Reggae',
  soulful  : "Soulful Reggae"
};
// hip hop options
var hiphop = {
  selectgenre: 'Select subgenre',
  rap : 'Rap',
  trap : 'Trap',
  hiprnb  : "Hip Hop RnB",
  kasi : 'Kasi Rap',
  motswako  : "Motswako"
};
//default...
var arr_default = {
  selectgenre: 'Select a genre'
};
function sub_genres(){
  // reset subgenre select
  var select = document.getElementById("subgenre");
  select.options.length = 0;
  // get selected genre
  var e = document.getElementById("genre");
  var value = e.value;
  var arr = []

  switch(value) {  
    case "dance":
      arr = dance;
      break;  
    case "rnb_soul":
      arr = rnb_soul;
      break;  
    case "traditional":
      arr = traditional
      break;
    case "reggae":
      arr = reggae;  
      break;  
    case "hiphop":
      arr = hiphop
      break;   
    default:
      arr = arr_default
      break;  
  } 
  // dynamically populate the select
  var select = document.getElementById("subgenre");
  for(index in arr) {
    select.options[select.options.length] = new Option(arr[index], index);
  }
}
