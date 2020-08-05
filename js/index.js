const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
let navigation = document.querySelectorAll ("nav a");
    navigation[0] .textContent = siteContent["nav"]["nav-item-1"];
    navigation[1] .textContent = siteContent["nav"]["nav-item-2"];
    navigation[2] .textContent = siteContent["nav"]["nav-item-3"];
    navigation[3] .textContent = siteContent["nav"]["nav-item-4"];
    navigation[4] .textContent = siteContent["nav"]["nav-item-5"];
    navigation[5] .textContent = siteContent["nav"]["nav-item-6"];

//turn font link color to green
let navA = document.getElementsByTagName("a");
let navArray = Array.from(navA);
  navArray.forEach((navA, i) => {
  navA.style.color = "green";
});

//Appended
const newLink = document.createElement("A");
const randomTextNode1 = document.createTextNode("Appended");
const setAppendChild = newLink.appendChild(randomTextNode1);
const appendToNav = document.querySelector("nav").appendChild(newLink);
newLink.style.color = "green";

//Prepended
const newLink2 = document.createElement("A");
const randomTextNode2 = document.createTextNode("Prepended");
const setPrepend = newLink2.prepend(randomTextNode2);
const prependToNav = document.querySelector("nav").prepend(newLink2);
newLink2.style.color = "green";

//update src paths content
const ctaImage = document.getElementById("cta-img");const setCtaImage = ctaImage.setAttribute('src', siteContent.cta["img-src"]);

const middleImage = document.getElementById("middle-img");
const setMiddleImage = middleImage.setAttribute('src', siteContent["main-content"] ["middle-img-src"]);

 //cta-text setting 
let ctaContent = document.querySelector(".cta-text h1");
ctaContent.textContent = siteContent["cta"]["h1"];
let ctaContentButton = document.querySelector(".cta-text button");
ctaContentButton.textContent = siteContent["cta"] ["button"];

//Features Main Content

let mainContentFeaturesH4 = Array.from(document.querySelectorAll(".text-content h4"));
mainContentFeaturesH4[0].textContent = siteContent["main-content"][ "features-h4"];
mainContentFeaturesH4.textContent = siteContent["main-content"]["features-h4"];

let mainContentFeaturesP = Array.from(document.querySelectorAll(".text-content p"));
mainContentFeaturesP[0].textContent = siteContent["main-content"] ["features-content"];


//About Main Content
let mainContentAbout = Array.from(document.querySelectorAll(".text-content h4"));
mainContentAbout[1].textContent = siteContent["main-content"] ["about-h4"];

let mainContentAboutP = Array.from(document.querySelectorAll(".text-content p"));
mainContentAboutP[1].textContent = siteContent["main-content"] ["about-content"];

//Services Main Content

let mainContentServicesH4 = Array.from(document.querySelectorAll(".text-content h4"));
mainContentServicesH4[2].textContent = siteContent["main-content"][ "services-h4"];
mainContentServicesH4.textContent = siteContent["main-content"]["services-h4"];

let mainContentServicesP = Array.from(document.querySelectorAll(".text-content p"));
mainContentServicesP[2].textContent = siteContent["main-content"] ["services-content"];

//Product Main Content
let mainContentProductH4 = Array.from(document.querySelectorAll(".text-content h4"));
mainContentProductH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentProductH4.textContent = siteContent["main-content"]["product-h4"];

let mainContentProductP = Array.from(document.querySelectorAll(".text-content p"));
mainContentProductP[3].textContent = siteContent["main-content"] ["product-content"];

//Vision Main Content
let mainContentVisionH4 = Array.from(document.querySelectorAll(".text-content h4"));
mainContentVisionH4[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentVisionH4.textContent = siteContent["main-content"]["vision-h4"];

let mainContentVisionP = Array.from(document.querySelectorAll(".text-content p"));
mainContentVisionP[4].textContent = siteContent["main-content"] ["vision-content"];

//H4 Contact Section
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

//Address Contact Section
let contactAddress = Array.from(document.querySelectorAll(".contact p"));
contactAddress[0].textContent = siteContent["contact"]["address"];

//Phone Contact Section
let contactPhone = Array.from(document.querySelectorAll(".contact p"));
contactPhone[1].textContent = siteContent["contact"]["phone"];

//Email Contact Section
let contactEmail = Array.from(document.querySelectorAll(".contact p"));
contactEmail[2].textContent = siteContent["contact"]["email"];

//Footer Section
let contactFooter = document.querySelector("footer");
contactFooter.textContent = siteContent["footer"]["copyright"];
