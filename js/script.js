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


function changeLang(){
    if(lang == "eng"){
        lang = null;
        location.reload();
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
        h1Land.innerHTML = indexEsp["h1"];
        pLand.innerHTML = indexEsp["p"];
        smallLand.innerHTML = indexEsp["small"];
        h2_n1.innerHTML = indexEsp["h2_n1"];
        p_n1.innerHTML = indexEsp["p_n1"];
        h2_n2.innerHTML = indexEsp["h2_n2"];
        p_n2.innerHTML = indexEsp["p_n2"];

        //Serv
        servH1.innerHTML = servEsp["servH1"];
        servSmall.innerHTML = servEsp["servSmall"];
    }
}


let lang = localStorage.getItem("lang");
let espBtn = document.getElementById("esp_btn");
let engBtn = document.getElementById("eng_btn");
console.log(lang);
changeLang();

espBtn.addEventListener("click", ()=> {
    lang = "esp";
    console.log(lang);
    localStorage.setItem("lang", lang);
    console.log("Language: ", lang);
    changeLang();
})

engBtn.addEventListener("click",()=>{
    lang = "eng";
    console.log(lang);
    localStorage.setItem("lang", null);
    console.log("Language: eng");
    changeLang();

})