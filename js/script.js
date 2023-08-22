const arrayIndexEsp = [];

const landingIndexEsp = {
    h1: `<h1>Soluciones hechas a medida para su Negocio</h1>`,
    p: `<p>Consultoría sobre Negocios Internacionales para la economía global</p>`,
    small: `<small>Nos encargamos de sus logísticas para que se pueda concentrar en lo importante.</small>`,
    getStartedBtn: `<button>Comenzar Ahora</button>`,
    learnMoreBtn: `<button>Aprender Más</button>`,
    h2_n1: `<h2>Optimice las logísticas de su Negocio</h2>`,
    p_n1: `<p>Identificamos las debilidades de su Negocio y las mejoramos por usted</p>`,
    h2_n2:`<h2>Somos expertos en lo que hacemos</h2>`,
    p_n2:`<p>Con más de 25 años de experiencia en el rubro, en Worldrun Tailor Services nos aseguramos de proveer las soluciones que su Negocio necesita.</p>`
};

let espBtn = document.getElementById("esp_btn");
let engBtn = document.getElementById("eng_btn");

//Landing Page variables
let h1Land = document.getElementById("index_landing_h1");
let pLand = document.getElementById("index_landing_p");
let smallLand = document.getElementById("index_landing_small"); 
let getStartedBtn = document.getElementsByClassName("get-started-btn");
let learnMoreBtn = document.getElementsByClassName("learn-more-btn");
let h2_n1 = document.getElementById("h2_n1");
let p_n1 = document.getElementById("p_n1");
let h2_n2 = document.getElementById("h2_n2");
let p_n2 = document.getElementById("p_n2");

let lang = null;

espBtn.addEventListener("click", ()=>{
    lang = "esp"
})

if (lang="esp"){
    h1Land.innerHTML = landingIndexEsp["h1"];
    pLand.innerHTML = landingIndexEsp["p"];
    smallLand.innerHTML = landingIndexEsp["small"];
    getStartedBtn.innerHTML = landingIndexEsp["getStartedBtn"];
    learnMoreBtn.innerHTML = landingIndexEsp["learnMoreBtn"];
    h2_n1.innerHTML = landingIndexEsp["h2_n1"];
    p_n1.innerHTML = landingIndexEsp["p_n1"];
    h2_n2.innerHTML = landingIndexEsp["h2_n2"];
    p_n2.innerHTML = landingIndexEsp["p_n2"];
}



engBtn.addEventListener("click", ()=>{
    lang = null
})