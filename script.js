const schedules = {
  greenPark: [
    "Monday: Wet Waste",
    "Wednesday: Dry Waste",
    "Friday: E-Waste"
  ],
  sunriseColony: [
    "Tuesday: Wet Waste",
    "Thursday: Dry Waste",
    "Saturday: Hazardous Waste"
  ]
};

function showSchedule() {
  const area = document.getElementById("area").value;
  const scheduleList = document.getElementById("scheduleList");
  const scheduleDiv = document.getElementById("schedule");

  scheduleList.innerHTML = "";

  if (area && schedules[area]) {
    schedules[area].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      scheduleList.appendChild(li);
    });
    scheduleDiv.classList.remove("hidden");
  } else {
    scheduleDiv.classList.add("hidden");
  }
}

function setReminder() {
  alert("✅ Reminder set! You’ll be reminded near collection time.");
  setTimeout(() => {
    alert("⏰ Reminder: Don’t forget to put out your waste today!");
  }, 5000); // simulate reminder after 5 seconds
}
