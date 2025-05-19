const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const txtMe_Esp = "Hola, soy Richard Milton Aunque empiezo a mis 60 en formándome en <span>Full Stack</span>, ya tengo experiencia Back End en Mainframe, programando <span>Cobol</span> por más de 18 años en AFP y Banca. Me gusta aprender y me apasiona la tecnología. Espero que mi portafolio sea de su agrado y que podamos trabajar juntos en el futuro. ¡Gracias por visitar mi portafolio!"
const txtMe_Eng = "Hello, I'm Richard Milton. Although I am starting my journey in <span>Full Stack</span> development at the age of 60, I already have over 18 years of experience in Back End programming with <span>Cobol</span> in the AFP and Banking sectors. I love learning and am passionate about technology. I hope you enjoy my portfolio and that we can work together in the future. Thank you for visiting my portfolio!"

const txtNav_Experiencia_Esp = "Experiencia";
const txtNav_Experiencia_Eng = "Experience";

const txtNav_Proyectos_Esp = "Proyectos";
const txtNav_Proyectos_Eng = "Projects";

const txtNav_Contacto_Esp = "Certificados";
const txtNav_Contacto_Eng = "Certificates";


const txtTec_Esp = "Tecnología";
const txtTec_Eng = "Technology";


const txtFoot_Esp = "2025 Portafolio diseñado en BootStrap y JavaScript";
const txtFoot_Eng = "2025 Portfolio designed in BootStrap and JavaScript";

const flagElements = document.getElementById("flags");


const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  
  let requestJson;
  if (language === "ing") {
    requestJson = await fetch('/languages/ing.json');
  } else {
    requestJson = await fetch('/languages/esp.json');
  }

  const texts = await requestJson.json();
  //console.log(texts);

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




