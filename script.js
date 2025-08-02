function updateClock() {
  const clock = document.getElementById("clock");
  const greeting = document.getElementById("greeting");
  const now = new Date();
  
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  
  clock.textContent = `${hours}:${minutes}:${seconds}`;

  if (now.getHours() < 12) {
    greeting.textContent = "Good Morning ☀️";
    document.getElementById("greeting").style.color = "rgba(243, 153, 18, 1)"
    document.getElementById("greeting").style.textShadow = "rgba(65, 63, 65, 1) 2px 2px 2px"

  } else if (now.getHours() < 18) {
    greeting.textContent = "Good Afternoon 🌞";
     document.getElementById("greeting").style.color = "rgba(252, 84, 7, 1)"
     document.getElementById("greeting").style.textShadow = "rgba(41, 40, 41, 1) 2px 2px 2px"
  } else {
    greeting.textContent = "Good Evening 🌙";
     document.getElementById("greeting").style.color = "rgba(26, 25, 25, 1)"
     document.getElementById("greeting").style.textShadow = "rgba(65, 63, 65, 1) 2px 2px 2px"
  }
}

setInterval(updateClock, 1000);
updateClock(); // Call it once immediately
