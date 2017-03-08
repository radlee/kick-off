// var count = function(event_date){
//   var countDownDate = new Date(event_date).getTime();
//
//   var x = setInterval(function() {
//
//     var now = new Date().getTime();
//
//     var distance = countDownDate - now;
//
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//     document.getElementById("result").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
//
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("result").innerHTML = "Kick-Off";
//     }
//   }, 1000);
//
// }
// count("2017-05-03");
