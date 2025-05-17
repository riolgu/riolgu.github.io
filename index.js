const txtMe_Esp = "Hola, soy Richard Milton Aunque empiezo a mis 60 en formándome en <span>Full Stack</span>, ya tengo experiencia Back End en Mainframe, programando <span>Cobol</span> por más de 18 años en AFP y Banca. Me gusta aprender y me apasiona la tecnología. Espero que mi portafolio sea de su agrado y que podamos trabajar juntos en el futuro. ¡Gracias por visitar mi portafolio!"
const txtMe_Eng = "Hello, I'm Richard Milton. Although I am starting my journey in <span>Full Stack</span> development at the age of 60, I already have over 18 years of experience in Back End programming with <span>Cobol</span> in the AFP and Banking sectors. I love learning and am passionate about technology. I hope you enjoy my portfolio and that we can work together in the future. Thank you for visiting my portfolio!"
const txtMe_Por = "Olá, sou Richard Milton. Embora esteja começando minha formação em <span>Full Stack</span> aos 60 anos, já tenho experiência em Back-End no Mainframe, programando <span>Cobol</span> por mais de 18 anos em AFP e Bancos. Adoro aprender e sou apaixonado por tecnologia. Espero que goste do meu portfólio e que possamos trabalhar juntos no futuro. Obrigado por visitar meu portfólio!"
const txtMe_Ita = "Ciao, sono Richard Milton. Sebbene abbia iniziato a formarmi in <span>Full Stack</span> a 60 anni, ho già esperienza di Back End in Mainframe, programmando in <span>Cobol</span> per oltre 18 anni in AFP e nel settore bancario. Mi piace imparare e sono appassionato di tecnologia. Spero che il mio portfolio ti piaccia e che potremo lavorare insieme in futuro. Grazie per aver visitato il mio portfolio!"
const txtMe_Fra = "Bonjour, je suis Richard Milton. Bien que je commence ma formation en <span>Full Stack</span> à 60 ans, j'ai déjà plus de 18 ans d'expérience en programmation Back End avec <span>Cobol</span> dans les secteurs AFP et bancaire. J'aime apprendre et je suis passionné par la technologie. J'espère que vous apprécierez mon portfolio et que nous pourrons travailler ensemble à l'avenir. Merci de visiter mon portfolio!"

const txtNav_Experiencia_Esp = "Experiencia";
const txtNav_Experiencia_Eng = "Experience";
const txtNav_Experiencia_Por = "Experiência";
const txtNav_Experiencia_Ita = "Esperienza";
const txtNav_Experiencia_Fra = "Expérience";
const txtNav_Proyectos_Esp = "Proyectos";
const txtNav_Proyectos_Eng = "Projects";
const txtNav_Proyectos_Por = "Projetos";
const txtNav_Proyectos_Ita = "Progetti";
const txtNav_Proyectos_Fra = "Projets";
const txtNav_Contacto_Esp = "Certificados";
const txtNav_Contacto_Eng = "Certificates";
const txtNav_Contacto_Por = "Certificados";
const txtNav_Contacto_Ita = "Certificati";
const txtNav_Contacto_Fra = "Certificats";

const txtTec_Esp = "Tecnología";
const txtTec_Eng = "Technology";
const txtTec_Por = "Tecnologia";
const txtTec_Ita = "Tecnologia";
const txtTec_Fra = "Technologie";

const txtFoot_Esp = "2025 Portafolio diseñado en BootStrap y JavaScript";
const txtFoot_Eng = "2025 Portfolio designed in BootStrap and JavaScript";
const txtFoot_Por = "2025 Portfólio projetado em BootStrap e JavaScript";
const txtFoot_Ita = "2025 Portfolio progettato in BootStrap e JavaScript";
const txtFoot_Fra = "2025 Portfolio conçu en BootStrap et JavaScript";



const idiomaActual = document.getElementById("idioma");
const listaidiomas = document.getElementById("idiomas");
const idiomas = document.getElementsByClassName("opcion");

//info
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("subtitulo");

//toggle lista de idiomas
idiomaActual.addEventListener("click", ()=>  {   
  listaidiomas.classList.toggle("toggle");
}); 
console.log(idiomas);

const opcionesArray = Array.from(idiomas);

console.log(opcionesArray);

opcionesArray.forEach((opcion) => {
    console.log(opcion);
})
