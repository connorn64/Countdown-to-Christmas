// Setting the countdown date we're counting to.
const countdownDate = new Date ("Dec 25, 2020 00:00:00").getTime();

// Updates the on-screen clock until clearInterval() is called.
const run = setInterval(function() {
  
// Fetching todays Date/Time.
  let now = new Date().getTime();
  
// Finding distance between current Time/Date - Event.
  let distance = now - countdownDate;
  
// Calculations for seconds, minutes, hours and days.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Displaying values in element "pageDisplay".
  document.getElementById("pageDisplay").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
  
  // If countdown is over, to be displayed >.
  if(distance > 0) {
    clearInterval(run);
    document.getElementById("pageDisplay").innerHTML = "CHRISTMAS HAS COME!";
  }
}, 1000);