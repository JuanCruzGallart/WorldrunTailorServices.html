//Make a .json file with all this
const indexEsp = {
    h1: `Soluciones hechas a medida para su Negocio`,
    p: `Consultoría sobre Negocios Internacionales para la economía global`,
    small: `Nos encargamos de sus logísticas para que se pueda concentrar en lo importante.`,
    h2_n1: `Optimice las logísticas de su Negocio`,
    p_n1: `Identificamos las debilidades de su Negocio y las mejoramos por usted`,
    h2_n2:`Somos expertos en lo que hacemos`,
    p_n2:`Con más de 25 años de experiencia en el rubro, en Worldrun Tailor Services nos aseguramos de proveer las soluciones que su Negocio necesita.`
};

const servEsp = {
    servH1: `Soluciones hechas a medida para su negocio`,
    servSmall: `Optimizando las logísticas de su Negocio`,
    servH2:`Servicios`,
    servSmall2:`Estos son los principales servicios que brindamos, ante cualquier consulta contáctese con nosotros.`,
    storage:`Almacenamiento`,
    design:`Diseño, Gestión e Inventario de Almacenes`,
    recep:`Recepciones y Expediciones de mercadería`,
    stock:`Gestión de Stock`,
    order:`Preparación de pedidos (Picking/Packing)`,
    logistics:`Diagnóstico Integral de Logística`,
    physical:`Distribución Física`,
    transport:`Estrategias de Transporte y Distribución`,
    distribution:`Logística de Centros de Distribución (Diseño y Operación)`,
    inverse:`Logística Inversa (Devoluciones)`,
    financing:`Financiamiento para Importación y Exportación`,
    commodities:`Materias Primas`,
    intermediate:`Bienes Intermedios`,
    manufactured:`Productos Manufacturados`,
    portOps:`Operaciones Portuarias`,
    customs:`Recinto Aduanero (Seleccion y Operación)`,
    customs2:`Gestón de Aduanas y Comercio Exterior`,
    inventories:`Inventarios`,
    supply:`Gestión de Aprovisionammientos`,
    national:`Comercialización Nacional e Internacional`,
    marketAn: `Análisis de Mercado y Actualizaciones`,
    potOpp: `Identificación de potenciales oportunidades`,
    promotion:`Promoción, Marketing y Ventas`,
    salesDistrib:`Asistencia en Ventas y Distribución`,
    innovate:`Productos innovadores`,
    efficient:`Soluciones eficientes`,
    techSup:`Soporte Técnico de alto nivel`,
    faq:`Preguntas Frecuentes`,
    faqSmall:``,
    pregunta1:`¿Cómo puedo contactarme con ustedes? <span class="material-symbols-sharp">arrow_drop_down_circle</span>`,
    respuesta1:`Llamanos al +1 (786) 628-7922 o mandanos un correo a worldrunservices@gmail.com`,
    pregunta2:`¿Trabajan en Asia?<span class="material-symbols-sharp">arrow_drop_down_circle</span>`,
    respuesta2:`Sí, trabajamos en Asia, sobretodo en la parte oriental (Japón, Corea del Sur).`,
    pregunta3:`¿Su experiencia en logística le ahorraría dinero a mi negocio?<span class="material-symbols-sharp">arrow_drop_down_circle</span>`,
    respuesta3:`Sí, le aseguramos que nuestra experiencia en el campo no sólo le ahorraría dinero sino también incontables horas de trabajo e investigación.`,
    pregunta4:`¿Cuánto tiempo llevan trabajando en este campo?<span class="material-symbols-sharp">arrow_drop_down_circle</span>`,
    respuesta4:`Hace más de 25 años que trabajamos en el rubro.`
}

const contactEsp = {
    contH1:`Contacte a nuestro equipo`,
    contSmall:`Estas son las maneras de contactarnos.`,
    contH2:`Envíenos un mensaje`,
    contSmall2:`Responderemos en las próximas 24 horas`,
    contEmail:`Correo`,
    contNombre:`Nombre`,
    contMsg:`Mensaje`,
    contH22:`Oficinas`,
    contH3: `Miami, Estados Unidos`,
}

const aboutEsp = {
    h1:`¿Quiénes Somos?`,
    small:`Líderes en el rubro por más de 25 años`,
    h2:`Nuestra Empresa`,
    text:`<p>En Worldrun Tailor Services, <strong>somos una empresa de asesoramiento internacional</strong> en diversas áreas, especialmente en logística y transporte, comercio exterior, canalización de inversiones y consultoría jurídico económica. 
    <br><br>
    Proveemos a nuestros clientes una gran variedad de estrategias dirigidas tanto a la región de América Latina como al resto del mundo.
    <br><br>
    Si su Empresa quiere estar integrada al mercado global y participar del comercio exterior, <strong>necesariamente deberá desarrollar e incorporar la habilidad para operar y gestionar la logística de sus negocios.</strong> 
    <br><br>
    Nos dedicamos a brindar servicios de valor agregado, ampliando oportunidades de negocios a nivel internacional a través de la <strong>rápida y eficiente interacción entre importadores y exportadores</strong> de productos manufacturados  y materia primas. 
    <br><br>
    Para asegurar nuestra gestión, <strong>consolidamos alianzas estratégicas con firmas especializadas</strong> que nos apoyan en todas nuestras actividades, lo que nos permite satisfacer todas y cada una de las necesidades de distribucion y transporte que su empresa pueda necesitar en el menor tiempo posible y con la <strong>mejor calidad de servicio y costo</strong>.
    <br><br>
    <strong>Contamos con más de veinticinco años de experiencia</strong>, principalmente en el MERCOSUR, pero también abiertos a un mundo cada vez más globalizado, prestando atención confidencial y personalizada a nuestros clientes.
    </p>`
}

const navEsp = {
    aHome: `Inicio`,
    aServices: `Servicios`,
    aContact: `Contacto`,
    aAbout: `Nosotros`
};

const botonesEsp = {
    getStarted: `Comenzar`,
    learnMore: `Leer Más`
};

const footerEsp = {
    footerP: `Asesoría sobre Negocios Internacionales para la Economía Global. <br> Ante cualquier consulta o si desea adquirir nuestros servicios, llámenos.`,
    officeH3: `Oficina <div class="underline"><span></span></div>`,
    copyright: `© 2023 Worldrun Tailor Services.  Todos los derechos reservados.`
};

//Nav variables
let aHome = document.getElementsByClassName("a_home");
let aServices = document.getElementsByClassName("a_services");
let aContact = document.getElementsByClassName("a_contact");
let aAbout = document.getElementsByClassName("a_about");

//Button variables
let getStartedBtn = document.getElementsByClassName("get-started-btn");
let learnMoreBtn = document.getElementsByClassName("learn-more-btn");
console.log(learnMoreBtn);

//Footer variables
let pFooter = document.getElementById("footer_p");
let officeH3 = document.getElementById("office_h3");
let copyright = document.getElementById("copyright");

//Index variables
let h1Land = document.getElementById("index_landing_h1");
let pLand = document.getElementById("index_landing_p");
let smallLand = document.getElementById("index_landing_small"); 
let h2_n1 = document.getElementById("h2_n1");
let p_n1 = document.getElementById("p_n1");
let h2_n2 = document.getElementById("h2_n2");
let p_n2 = document.getElementById("p_n2");

//Serv Variables
let servH1 = document.getElementById("serv_h1");
let servSmall = document.getElementById("serv_small");
let servH2 = document.getElementById("serv_h2");
let servSmall2 = document.getElementById("serv_small_2");
let storage = document.getElementById("storage");
let design = document.getElementById("design");
let receptions = document.getElementById("receptions");
let stock = document.getElementById("stock");
let order = document.getElementById("order");
let logistics = document.getElementById("logistics");
let physical = document.getElementById("physical");
let transport = document.getElementById("transport");
let distribution = document.getElementById("distribution");
let inverse = document.getElementById("inverse");
let financing = document.getElementById("financing");
let commodities = document.getElementById("commodities");
let intermediate = document.getElementById("intermediate");
let manufactured = document.getElementById("manufactured");
let portOps = document.getElementById("port_ops");
let customs = document.getElementById("customs");
let customs2 = document.getElementById("customs2");
let inventories = document.getElementById("inventories");
let supply = document.getElementById("supply");
let national = document.getElementById("national");
let market = document.getElementById("market");
let opportunities = document.getElementById("ident_op");
let  promotion = document.getElementById("promotion");
let salesDistrib = document.getElementById("sales_dist");
let innovate = document.getElementById("innovate");
let efficient = document.getElementById("efficient");
let techSup = document.getElementById("tech_sup");
let faq = document.getElementById("faq");
let faqSmall = document.getElementById("faq_small");
let pregunta1 = document.getElementById("pregunta1");
let respuesta1 = document.getElementById("respuesta1");
let pregunta2 = document.getElementById("pregunta2");
let respuesta2 = document.getElementById("respuesta2");
let pregunta3 = document.getElementById("pregunta3");
let respuesta3 = document.getElementById("respuesta3");
let pregunta4 = document.getElementById("pregunta4");
let respuesta4 = document.getElementById("respuesta4");

//Contact variables
let contH1 = document.getElementById("cont_h1");
let contSmall = document.getElementById("cont_small");
let contH2 = document.getElementById("cont_h2");
let contSmall2 = document.getElementById("cont_small2");
let contEmail = document.getElementById("cont_email");
let contNombre = document.getElementById("cont_nombre");
let contMsg = document.getElementById("cont_msg");
let contH22 = document.getElementById("cont_h22");
let contH3 = document.getElementById("cont_h3");

//About variables
let aboutH1 = document.getElementById("about_h1");
let aboutSmall = document.getElementById("about_small");
let aboutH2 = document.getElementById("about_h2");
let aboutText = document.getElementById("about_text");

//Language function variables
let lang = localStorage.getItem("lang");
let espBtn = document.getElementById("esp_btn");
let engBtn = document.getElementById("eng_btn");
let fired = localStorage.getItem("fired");

changeLang(); //call the function so it loads the lang selected previously

espBtn.addEventListener("click", setEsp);
engBtn.addEventListener("click",setEng);

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

function setEsp(){
    let swal = document.getElementsByClassName("swal2-container");
    lang = "esp";
    localStorage.setItem("lang", lang);
    console.log("Language: ", lang);
    changeLang();

    if (swal!==null){
        Swal.close();
    }

    Toast.fire({
        icon: 'success',
        title: 'Español seleccionado'
      });

      validateInputs();
}
function setEng(){
    let swal = document.getElementsByClassName("swal2-container");

    if (lang !== "null"){
        lang = "eng";
        localStorage.setItem("lang", null);
        console.log("Language: eng");
        changeLang();
    };
}

if(fired!=="true"){
    document.addEventListener("DOMContentLoaded", fireSwal);
}

function changeLang(){
    if(lang == "eng"){
        lang = null;
        (async () => {
            await new Promise(resolve => {
                location.reload();
                resolve();
            });
    
            // After the page has finished reloading, show the Toast
            Toast.fire({
                icon: 'success',
                title: 'English selected'
            });
        })();
    }else if(lang == "esp"){

        //Navigation Links
        for (let i = 0; i < aHome.length; i++) {
            aHome[i].innerHTML = navEsp["aHome"]
          };
        for (let i = 0; i < aServices.length; i++) {
        aServices[i].innerHTML = navEsp["aServices"]
        };
        for (let i = 0; i < aContact.length; i++) {
        aContact[i].innerHTML = navEsp["aContact"]
        };
        for (let i = 0; i < aAbout.length; i++) {
        aAbout[i].innerHTML = navEsp["aAbout"]
        };

        //Btns
        for (let i = 0; i < getStartedBtn.length; i++) {
            getStartedBtn[i].innerHTML = botonesEsp["getStarted"];
          };
        
        for (let i = 0; i < learnMoreBtn.length; i++) {
            learnMoreBtn[i].innerHTML = botonesEsp["learnMore"];
          };

        //Footer
        pFooter.innerHTML = footerEsp["footerP"];
        officeH3.innerHTML = footerEsp["officeH3"];
        copyright.innerHTML = footerEsp["copyright"];

        //Index
        if(h1Land!=null){
            h1Land.innerHTML = indexEsp["h1"];
            pLand.innerHTML = indexEsp["p"];
            smallLand.innerHTML = indexEsp["small"];
            h2_n1.innerHTML = indexEsp["h2_n1"];
            p_n1.innerHTML = indexEsp["p_n1"];
            h2_n2.innerHTML = indexEsp["h2_n2"];
            p_n2.innerHTML = indexEsp["p_n2"];
        }else if(servH1!=null){
            //Serv
            servH1.innerHTML = servEsp["servH1"];
            servSmall.innerHTML = servEsp["servSmall"];
            servH2.innerHTML = servEsp["servH2"];
            servSmall2.innerHTML = servEsp["servSmall2"];
            storage.innerHTML = servEsp["storage"];
            design.innerHTML = servEsp["design"];
            receptions.innerHTML = servEsp["recep"];
            stock.innerHTML = servEsp["stock"];
            order.innerHTML = servEsp["order"];
            logistics.innerHTML = servEsp["logistics"];
            physical.innerHTML = servEsp["physical"];
            transport.innerHTML = servEsp["transport"],
            distribution.innerHTML = servEsp["distribution"];
            inverse.innerHTML = servEsp["inverse"]
            financing.innerHTML = servEsp["financing"];
            commodities.innerHTML = servEsp["commodities"];
            intermediate.innerHTML = servEsp["intermediate"];
            manufactured.innerHTML = servEsp["manufactured"];
            portOps.innerHTML = servEsp["portOps"];
            customs.innerHTML = servEsp["customs"];
            customs2.innerHTML = servEsp["customs2"];
            inventories.innerHTML = servEsp["inventories"];
            supply.innerHTML = servEsp["supply"];
            national.innerHTML = servEsp["national"];
            market.innerHTML = servEsp["marketAn"];
            opportunities.innerHTML = servEsp["potOpp"];
            promotion.innerHTML = servEsp["promotion"];
            salesDistrib.innerHTML = servEsp["salesDistrib"];
            innovate.innerHTML = servEsp["innovate"];
            efficient.innerHTML = servEsp["efficient"];
            techSup.innerHTML = servEsp["techSup"];
            faq.innerHTML = servEsp["faq"];
            faqSmall.innerHTML = servEsp["faqSmall"];
            pregunta1.innerHTML =servEsp["pregunta1"];
            respuesta1.innerHTML = servEsp["respuesta1"];
            pregunta2.innerHTML = servEsp["pregunta2"];
            respuesta2.innerHTML = servEsp["respuesta2"];
            pregunta3.innerHTML = servEsp["pregunta3"];
            respuesta3.innerHTML = servEsp["respuesta3"];
            pregunta4.innerHTML = servEsp["pregunta4"];
            respuesta4.innerHTML = servEsp["respuesta4"];
        }else if(contH1!=null){
            contH1.innerHTML = contactEsp["contH1"];
            contSmall.innerHTML = contactEsp["contSmall"];
            contH2.innerHTML = contactEsp["contH2"];
            contEmail.innerHTML = contactEsp["contEmail"];
            contSmall2.innerHTML = contactEsp["contSmall2"];
            contNombre.innerHTML = contactEsp["contNombre"];
            contMsg.innerHTML = contactEsp["contMsg"];
            contH22.innerHTML = contactEsp["contH22"];
            contH3.innerHTML = contactEsp["contH3"];
        }else if(aboutH1!=null){
            aboutH1.innerHTML = aboutEsp["h1"];
            aboutSmall.innerHTML = aboutEsp["small"];
            aboutH2.innerHTML = aboutEsp["h2"];
            aboutText.innerHTML = aboutEsp["text"];
        }
        
    }
}

function fireSwal(){
    Swal.fire({
        html:`
        <div id="swalContainer">
            <span class="material-symbols-sharp">translate</span>
            <p>Choose your Language<br>Elija su Idioma<p>
    
            <div id="btnContainer">
                <button class="swal_lang_btn">
                    <a id="eng_btn_swal">
                        English
                        <img src="./resources/united-states.png" alt="">
                    </a>
                </button>
                
                <button class="swal_lang_btn">
                    <a id="esp_btn_swal">
                        Español 
                        <img src="./resources/spain.png" alt="">
                    </a>
                </button>
            </div>
            <div id="small_swal">
                <p>You can change your chosen language anytime by clicking on the "language" icon on the top-right.</p>
                <p>Puede cambiar su idioma elegido en cualquier momento haciendo click en el ícono de "lenguage" arriba a la derecha.</p>
            </div>
        </div>
        `,
        heightAuto:false,
        showConfirmButton:false,
        focusConfirm:false,
    })

    let espBtnSwal = document.getElementById("esp_btn_swal");
    let engBtnSwal = document.getElementById("eng_btn_swal");
    espBtnSwal.addEventListener("click",setEsp);
    engBtnSwal.addEventListener("click", ()=>{Swal.close();});
    localStorage.setItem("fired",true);
}

//form
let form = document.getElementById("form")
let email = document.getElementById("email");
let nameForm = document.getElementById("name");
let msg = document.getElementById("message");
let emailValidation = false;
let nameValidation = false;
let msgValidation = false;
let validation = false;

document.addEventListener("DOMContentLoaded", ()=>{
    if(nameForm.value!=""||email.value!=""||msg.value!=""){
        validateInputs();
    }
});

email.addEventListener("input", ()=>{
    validateEmail();
})

nameForm.addEventListener("input", ()=>{
    validateName();
})

msg.addEventListener("input", ()=>{
    validateMsg();
})


form.addEventListener("submit", e =>{
    validateInputs();
    if(validation!==true){
        e.preventDefault();
    }
});

function setValid(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("valid");
    inputControl.classList.remove("invalid");
    inputControl.classList.remove("focus");

};

function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("invalid");
    inputControl.classList.remove("valid");
    inputControl.classList.remove("focus");

}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function validateEmail(){
    let lang = localStorage.getItem("lang");
    let emailValue = document.getElementById("email").value.trim();

    if(emailValue === ""){
        if(lang=="esp"){
            setError(email,"Se requiere su Correo Electrónico");
        }else{
            setError(email, "Email is required");
        };
        emailValidation = false;

    }else if(!isValidEmail(emailValue)){
        if(lang=="esp"){
            setError(email,"Escriba una dirección de correo electrónico");
        }else{
        setError(email, "Provide an email address");
        }
        emailValidation = false;

    }else{
        setValid(email);
        emailValidation = true;
    }
};

function validateName(){
    let nameFormValue = document.getElementById("name").value.trim();
    let lang = localStorage.getItem("lang");

    if(nameFormValue === ""){
        if(lang=="esp"){
            setError(nameForm,"Por favor escriba su nombre");
        }else{
            setError(nameForm, "Please fill in your name");
        }
        nameValidation = false;
    }else{
        setValid(nameForm);
        nameValidation = true;
    }
};

function validateMsg(){
    let lang = localStorage.getItem("lang");
    let msgValue = document.getElementById("message").value.trim();

    if(msgValue==""){
        if(lang=="esp"){
            setError(msg,"Escriba un mensaje con sus consultas");
        }else{
            setError(msg,"Write a message addressing your inquiries");
        };
        msgValidation = false;
    }else if(msgValue.length<15){
        if(lang=="esp"){
            setError(msg,"Su mensaje es demasiado corto")
        }else{
            setError(msg, "Your message is too short");
        }
        msgValidation = false;
    }else if(msgValue.length>=419){
        if(lang=="esp"){
            setError(msg,"Máximo de caracteres alcanzado");
        }else{
            setError(msg,"Maximum character count reached");
        }
    }else{
        setValid(msg);
        msgValidation = true;
    }
};

function validateInputs(){
    if(emailValidation&&nameValidation&&msgValidation){
        validation=true;
    }else{
        validateEmail();
        validateName();
        validateMsg();
    }
}
