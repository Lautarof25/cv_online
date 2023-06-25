const dataEnglish = `
<div class="ball-red"></div>
<div class="ball-gray"></div>
<header id="header" class="header flex"> 
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
        <section class="section profile">
        <h2 class="section__title">Key skills</h2>
          <p class="Aptitudes">
          Adaptation to changes and always eager to learn; ease of working in a team, long-term planner.
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
                <a href="./pdf/cv_lautaro_fernandez_en.pdf" download>Download
                </a>
            </div>
        </section>
    </footer>
<div class="ball-red red-2"></div>

`