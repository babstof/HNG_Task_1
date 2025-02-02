// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Live Clock Update
function updateClock() {
    const clockElement = document.getElementById("live-clock");
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clockElement.textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
