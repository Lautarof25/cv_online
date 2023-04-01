let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    window.alert('Número de telefono copiado!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
// Creo una variable para guardar 
// la opción elegida en el select
let selected;


// Traigo el botón select
var select = document.querySelector("#idiom");
// Traigo el body 
const body = document.querySelector("body");

// Creo el evento change(u otro) sobre el elemento
// "select" para obtener la opción seleccionada 
// mediante una captura 
select.addEventListener("change",(evento) => capturarSelect(evento))

// Creo la función para capturar el evento
function capturarSelect(evento){
  selected = evento.target.value
  if(selected == "english"){
    body.innerHTML = englishHTML;
  }else {
    body.innerHTML = spanishHTML;
  }
  console.log(selected)
}

var spanishHTML = "";

spanishHTML += `
<div class="container">
<div class="ball-red"></div>
<div class="ball-gray"></div>
<header id="header" class="header flex">
<div class="select_idiom">
<select name="idiom" id="idiom">
  <option value="spanish" selected>Spanish</option>
  <option value="english">English</option>
</select>
    <div class="column-1 header__img">
        <img src="./img/profile_picture.jpg"
            alt="profile photo" class="header__photo">
    </div>
    <div class="header__container column-2">
        <h1 class="header__title">Lautaro <span>Fernández</span></h1>
        <h2 class="header__p">Desarrollador Full-Stack</h2>
    </div>
</header>
<div class="flex">
    <main id="main" class="main column-2">
        <section class="section background">
            <h2 class="section__title">Experiencia laboral</h2>
            <div class="section__container">
                <p class="dates">2011 - Actual</p>
                <h3 class="role">Armador, reparador y mantenimiento PC</h3>
                <p class="company">Freelance</p>
                <ul>
                    <li>Armado, mantenimiento, reparación y reciclado de PC de escritorio y portátiles</li>
                    <li>Desarrollo web con lenguajes HTML, CSS, JavaScript y frameworks.
                    </li>
                    <li>Creación de planillas inteligentes para administración productiva de pymes y optimización del posicionamiento web.
                    </li>
                    <li>Impartiendo clases de internet avanzado a personas adultas para acortar la brecha digital.
                    </li>
                </ul>
            </div>
            <div class="section__container">
                <p class="dates">2008 - 2009</p>
                <h3 class="role">Administrativo informático</h3>
                <p class="company">Empresa de transportes Don Pedro</p>
                <ul>
                    <li>Registro y control de bolsines, remitos, gastos de choferes y cierre de rendiciones.
                    </li>
                    <li>Atención a choferes y derivaciones para la solución a problemas generales y urgentes.
                    </li>
                    <li>Ideé una planilla de registro de entregas de choferes para acortar tiempos de consultas.
                    </li>
                </ul>
            </div>
        </section>
        <section class="section education">
            <h2 class="section__title">Formación</h2>
            <table>
                <tr>
                  <td colspan="2" class="year">2022</td>
                </tr>
                <tr class="titles">
                  <td>Descripción</td>
                  <td>Institución</td>
                </tr>
                <tr>
                  <td>Testing QA Basico</td>
                  <td>Eduting, Academia QA</td>
                </tr>
                  <tr>
                  <td>Introducción a SQL</td>
                  <td>Tecno 3F</td>
                </tr>
                <tr>
                  <td>Programación desde cero</td>
                  <td>Egg Educación</td>
                </tr>
                <tr>
                  <td>Python Core</td>
                  <td>SoloLearn</td>
                </tr>
                <tr>
                  <td>Java II</td>
                  <td>Fundaula</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2021</td>
                </tr>
                <tr class="titles">
                  <td>Descripción</td>
                  <td>Institución</td>
                </tr>
                <tr>
                  <td>Curso Python básico</td>
                  <td>Universidad de Hurlingham</td>
                </tr>
                <tr>
                  <td>Introducción al desarrollo web II</td>
                  <td>Google Activate</td>
                </tr>
                <tr>
                  <td>Responsive Web Desing</td>
                  <td>FreeCodeCamp</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2020</td>
                  
                </tr>
                <tr class="titles">
                  <td>Descripción</td>
                  <td>Institución</td>
                </tr>
                <tr>
                  <td>Tecnicatura Universitaria en Informática [1º año]</td>
                  <td>Universidad de Hurlingham</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2019</td>
                  
                </tr>
                <tr class="titles">
                  <td>Descripción</td>
                  <td>Institución</td>
                </tr>
                <tr>
                  <td>Programador de sistemas de intefaces gráficas</td>
                  <td>CFP Hurlingham</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2018</td>
                  
                </tr>
                <tr class="titles">
                  <td>Descripción</td>
                  <td>Institución</td>
                </tr>
                <tr>
                  <td>Supervisor y administrador de redes informáticas</td>
                  <td>CFP Hurlingham</td>
                </tr>
                <tr>
                  <td>Diseño web y Marketing digital</td>
                  <td>ITUOM Caseros</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2017</td>
                  
                </tr>
                <tr class="titles">
                  <td>Descripción</td>
                  <td>Institución</td>
                </tr>
                <tr>
                  <td>Armado y reparación de PC</td>
                  <td>IAC Devoto</td>
                </tr>
              </table>
        </section>
    </main>

    <footer id="footer" class="footer column-1">
        <section class="section profile">
            <h2 class="section__title">Perfil</h2>
            <p class="description">
                Desempeñarme en tareas administrativo-informáticas, aportando los conocimientos de mis experiencias laborales y poder demostrar mis habilidades en materia de tecnología.
            </p>
        </section>
        <section class="section contacts">
            <h2 class="section__title">Contacto</h2>
            <div class="flex-contact">
                <p class="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone"
                        width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg><span id="myText">+54-11-6038-2014 </span><button
                        onclick="copyContent()">Copiar</button>
                </p>
                <p class="email">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44"
                        height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg><a
                        href="mailto:fernandez.lautaro@hotmail.com">fernandez.&#8203;lautaro@&#8203;hotmail.&#8203;com</a>
                </p>
                <p class="location">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin"
                        width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="11" r="3" />
                        <path
                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>Buenos aires, Hurlingham
                </p>
                <p class="webpage">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="3.6" y1="9" x2="20.4" y2="9" />
                        <line x1="3.6" y1="15" x2="20.4" y2="15" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    <a href="https://portfoliolautarofernandez.firebaseapp.com/"
                        target="_blank">portfoliolautarofernandez&#8203;.firebaseapp&#8203;.com/</a>
                </p>

                <p class="github">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    <a href="https://github.com/Lautarof25" target="_blank">github.com/Lautarof25</a>
                </p>

            </div>
        </section>
        <section class="section skills">
            <h2 class="section__title">Habilidades</h2>
            <ul class="skill">
                <li>Python</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Photopea</li>
                <li>Google sheet</li>
                <li>Inglés A2</li>
            </ul>
        </section>
        <section class="section social">
            <h2 class="section__title">Redes</h2>
            <div class="flex iconos">
                <a href="https://www.linkedin.com/in/lautaro-exequiel-fernandez-2146b3238/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/lautadev25/" target="_blank">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="https://github.com/Lautarof25" target="_blank">
                    <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="https://wa.me/5491160382014?text=Hola,Lautaro" target="_blank">
                    <i class="fa-brands fa-square-whatsapp"></i>
                </a>
                <a href="https://twitter.com/Lautadev" target="_blank"><i
                        class="fa-brands fa-square-twitter"></i></a>
            </div>
        </section>
        <section class="section certificates">
            <h2 class="section__title">Certificaciones</h2>
            <div class="flex ">
                <a href="https://drive.google.com/drive/folders/1V8vzyJU0mVTNGUIT5b4Sfr9yYgGoM8Ke?usp=share_link"
                    target="_blank">
                    <img src="./img/certificate_qr.JPG" alt="certificados en qr">
                </a>
            </div>
        </section>
        <section class="section download">
            <h2 class="section__title">Descargar CV</h2>
            <div class="flex">
                <a href="./pdf/cv_lautaro_fernandez.pdf" download>Descargar
                </a>
            </div>
        </section>
    </footer>
</div>
<div class="ball-red red-2"></div>

</div>
<div class="flotante">
<div class="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="https://resume-2pc.pages.dev/"
    data-a2a-title="CV Lautaro Fernández">
    <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
    <a class="a2a_button_linkedin"></a>
    <a class="a2a_button_email"></a>
    <a class="a2a_button_whatsapp"></a>
</div>
<script>
    var a2a_config = a2a_config || {};
    a2a_config.locale = "es-AR";
</script>
<script async src="https://static.addtoany.com/menu/page.js"></script>
</div>
<script async src="./script/script.js"></script>
`
var englishHTML = "";

englishHTML += `
<div class="container">
<div class="ball-red"></div>
<div class="ball-gray"></div>
<header id="header" class="header flex">
<div class="select_idiom">
              <select name="idiom" id="idiom">
                <option value="spanish">Spanish</option>
                <option value="english" selected>English</option>
              </select>
            </div>    
    <div class="column-1 header__img">
        <img src="./img/profile_picture.jpg"
            alt="profile photo" class="header__photo">
    </div>
    <div class="header__container column-2">
        <h1 class="header__title">Lautaro <span>Fernández</span></h1>
        <h2 class="header__p">Full-Stack Developer</h2>
    </div>
</header>
<div class="flex">
    <main id="main" class="main column-2">
        <section class="section background">
            <h2 class="section__title">Work experience</h2>
            <div class="section__container">
                <p class="dates">2011 - Current</p>
                <h3 class="role">Computer Repair and Maintenance Technician</h3>
                <p class="company">Freelance</p>
                <ul>
                    <li>Assembly, maintenance, repair, and recycling of desktop and laptop PCs
                    </li>
                    <li>Web development using HTML, CSS, JavaScript, and frameworks
                    </li>
                    <li>Creation of intelligent spreadsheets for productive management of SMEs and SEO
                    </li>
                    <li>Teaching advanced internet classes to adults to bridge the digital divide
                    </li>
                </ul>
            </div>
            <div class="section__container">
                <p class="dates">2008 - 2009</p>
                <h3 class="role">Administrative</h3>
                <p class="company">Empresa de transportes Don Pedro</p>
                <ul>
                    <li>Registration and control of bags, receipts, driver expenses, and closing of accounting renditions.
                    </li>
                    <li>Attention to drivers and referrals for the solution of general and urgent problems.
                    </li>
                    <li>I designed a driver delivery registration sheet to reduce query times.
                    </li>
                </ul>
            </div>
        </section>
        <section class="section education">
            <h2 class="section__title">Education</h2>
            <table>
                <tr>
                  <td colspan="2" class="year">2022</td>
                </tr>
                <tr class="titles">
                  <td>Description</td>
                  <td>Institution</td>
                </tr>
                <tr>
                  <td>Testing QA Basic</td>
                  <td>Eduting, Academia QA</td>
                </tr>
                  <tr>
                  <td>Introduction to SQL</td>
                  <td>Tecno 3F</td>
                </tr>
                <tr>
                  <td>Programming from zero</td>
                  <td>Egg Educación</td>
                </tr>
                <tr>
                  <td>Python Core</td>
                  <td>SoloLearn</td>
                </tr>
                <tr>
                  <td>Java II</td>
                  <td>Fundaula</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2021</td>
                </tr>
                <tr class="titles">
                  <td>Description</td>
                  <td>Institution</td>
                </tr>
                <tr>
                  <td>Python course</td>
                  <td>Universidad de Hurlingham</td>
                </tr>
                <tr>
                  <td>Introduction to Web development II</td>
                  <td>Google Activate</td>
                </tr>
                <tr>
                  <td>Responsive Web Desing</td>
                  <td>FreeCodeCamp</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2020</td>
                  
                </tr>
                <tr class="titles">
                  <td>Description</td>
                  <td>Institution</td>
                </tr>
                <tr>
                  <td>University Technician in Computer Science [1st year]</td>
                  <td>Universidad de Hurlingham</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2019</td>
                  
                </tr>
                <tr class="titles">
                  <td>Description</td>
                  <td>Institution</td>
                </tr>
                <tr>
                  <td>Graphic interface systems programmer</td>
                  <td>CFP Hurlingham</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2018</td>
                  
                </tr>
                <tr class="titles">
                  <td>Description</td>
                  <td>Institution</td>
                </tr>
                <tr>
                  <td>Supervisor and administrator of Computer Networks</td>
                  <td>CFP Hurlingham</td>
                </tr>
                <tr>
                  <td>Web Design and Digital Marketing</td>
                  <td>ITUOM Caseros</td>
                </tr>
                <tr>
                <td>Assistant in microenterprise administration</td>
                 <td>CTA Hurlingham</td>
                </tr>
                <tr>
                  <td colspan="2" class="year">2017</td>
                  
                </tr>
                <tr class="titles">
                  <td>Description</td>
                  <td>Institution</td>
                </tr>
                <tr>
                  <td>Computer Repair and Maintenance Technician</td>
                  <td>IAC Devoto</td>
                </tr>
              </table>
        </section>
    </main>

    <footer id="footer" class="footer column-1">
        <section class="section profile">
            <h2 class="section__title">Profile</h2>
            <p class="description">
            To work in administrative and computer-related tasks, contributing my knowledge and skills gained from my work experience and demonstrating my abilities in the field of technology.
            </p>
        </section>
        <section class="section contacts">
            <h2 class="section__title">Contacto</h2>
            <div class="flex-contact">
                <p class="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone"
                        width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg><span id="myText">+54-11-6038-2014 </span><button
                        onclick="copyContent()">Copiar</button>
                </p>
                <p class="email">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44"
                        height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg><a
                        href="mailto:fernandez.lautaro@hotmail.com">fernandez.&#8203;lautaro@&#8203;hotmail.&#8203;com</a>
                </p>
                <p class="location">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin"
                        width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="11" r="3" />
                        <path
                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>Buenos aires, Hurlingham
                </p>
                <p class="webpage">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ba0006"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="3.6" y1="9" x2="20.4" y2="9" />
                        <line x1="3.6" y1="15" x2="20.4" y2="15" />
                        <path d="M11.5 3a17 17 0 0 0 0 18" />
                        <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                    <a href="https://portfoliolautarofernandez.firebaseapp.com/"
                        target="_blank">portfoliolautarofernandez&#8203;.firebaseapp&#8203;.com/</a>
                </p>

                <p class="github">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    <a href="https://github.com/Lautarof25" target="_blank">github.com/Lautarof25</a>
                </p>

            </div>
        </section>
        <section class="section skills">
            <h2 class="section__title">Skills</h2>
            <ul class="skill">
                <li>Python</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Photopea</li>
                <li>Google sheet</li>
                <li>Inglés B1</li>
            </ul>
        </section>
        <section class="section social">
            <h2 class="section__title">social networks</h2>
            <div class="flex iconos">
                <a href="https://www.linkedin.com/in/lautaro-exequiel-fernandez-2146b3238/" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/lautadev25/" target="_blank">
                    <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="https://github.com/Lautarof25" target="_blank">
                    <i class="fa-brands fa-square-github"></i>
                </a>
                <a href="https://wa.me/5491160382014?text=Hola,Lautaro" target="_blank">
                    <i class="fa-brands fa-square-whatsapp"></i>
                </a>
                <a href="https://twitter.com/Lautadev" target="_blank"><i
                        class="fa-brands fa-square-twitter"></i></a>
            </div>
        </section>
        <section class="section certificates">
            <h2 class="section__title">Certificates</h2>
            <div class="flex ">
                <a href="https://drive.google.com/drive/folders/1V8vzyJU0mVTNGUIT5b4Sfr9yYgGoM8Ke?usp=share_link"
                    target="_blank">
                    <img src="./img/certificate_qr.JPG" alt="qr_certificates">
                </a>
            </div>
        </section>
        <section class="section download">
            <h2 class="section__title">Download CV</h2>
            <div class="flex">
                <a href="./pdf/cv_lautaro_fernandez.pdf" download>Download
                </a>
            </div>
        </section>
    </footer>
</div>
<div class="ball-red red-2"></div>

</div>

<div class="flotante">
<div class="a2a_kit a2a_kit_size_32 a2a_default_style" data-a2a-url="https://resume-2pc.pages.dev/"
    data-a2a-title="CV Lautaro Fernández">
    <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
    <a class="a2a_button_linkedin"></a>
    <a class="a2a_button_email"></a>
    <a class="a2a_button_whatsapp"></a>
</div>
<script>
    var a2a_config = a2a_config || {};
    a2a_config.locale = "es-AR";
</script>
<script async src="https://static.addtoany.com/menu/page.js"></script>
</div>
<script async src="./script/script.js"></script>
`

