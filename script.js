//saglaba checkbox js mainigaja
const toggletheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggletheme.addEventListener("change", togglethemehandler);

function togglethemehandler() {
  if (toggletheme.checked) {
    html.dataset.theme = "dark";
  } else {
    html.dataset.theme = "light";
  }
}
