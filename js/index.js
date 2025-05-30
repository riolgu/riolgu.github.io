const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
/*const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));*/

tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const flagElements = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  
  let requestJson;
  if (language === "ing") {
    /*requestJson = await fetch('/languages/ing.json');*/
    requestJson = await fetch(`${window.location.origin}/languages/ing.json`);
  } else {
    requestJson = await fetch(`${window.location.origin}/languages/esp.json`);
  }

  const texts = await requestJson.json();

  for(const textToChange of textsToChange) {
     const section = textToChange.dataset.section
     const value = textToChange.dataset.value

     //console.log(section, value);
    textToChange.innerHTML=texts[section][value];

  }
}

flagElements.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

// Toggle menu on logo click
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
function mostrar_menu() {
    document.getElementById("move-content").classList.toggle("move-container-all");
    document.getElementById("show-menu").classList.toggle("show-menu-lateral");
}

// Toggle menu on logo click
document.getElementById("click_link").addEventListener("click", mostrar_menu);
function mostrar_menu() {
    document.getElementById("show-menu").classList.toggle("show-menu-lateral");
}
