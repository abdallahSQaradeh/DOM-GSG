const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
// ?Header 
const nav = document.getElementsByTagName("nav");
const headerImg = document.getElementById("logo-img")
const navKeys = Object.keys(siteContent.nav);
let i=0;
for(;i<nav[0].children.length;i++)
{
  nav[0].children[i].textContent=siteContent.nav[navKeys[i]];

}
headerImg.src=siteContent.nav[navKeys[i]];
//? cta
const cta_div = document.getElementsByClassName("cta-text");
cta_div[0].children[0].textContent = siteContent.cta.h1;
cta_div[0].children[1].textContent= siteContent.cta.button;
const cta_img = document.getElementById("cta-img");
cta_img.src=siteContent.cta["img-src"];

//? main content
const top_content = document.getElementsByClassName("top-content")
top_content[0].children[0].children[0].textContent  = siteContent["main-content"]["features-h4"];
top_content[0].children[0].children[1].textContent  = siteContent["main-content"]["features-content"]

top_content[0].children[1].children[0].textContent  = siteContent["main-content"]["about-h4"]
top_content[0].children[1].children[1].textContent  = siteContent["main-content"]["about-content"]
const middle_img = document.getElementById("middle-img");
middle_img.src=siteContent["main-content"]["middle-img-src"];



const bottom_content = document.getElementsByClassName("bottom-content")
bottom_content[0].children[0].children[0].textContent  = siteContent["main-content"]["services-h4"]
bottom_content[0].children[0].children[1].textContent  = siteContent["main-content"]["services-content"]

bottom_content[0].children[1].children[0].textContent  = siteContent["main-content"]["product-h4"]
bottom_content[0].children[1].children[1].textContent  = siteContent["main-content"]["product-content"]

bottom_content[0].children[2].children[0].textContent  = siteContent["main-content"]["vision-h4"]
bottom_content[0].children[2].children[1].textContent  = siteContent["main-content"]["vision-content"]

// ? contact

const contact = document.getElementsByClassName("contact")[0];
contact.children[0].textContent  =siteContent.contact["contact-h4"]
contact.children[1].textContent  =siteContent.contact.address
contact.children[2].textContent  =siteContent.contact.phone
contact.children[3].textContent  =siteContent.contact.email

// ? footer
const footer = document.getElementsByTagName("footer")[0];
footer.children[0].textContent = siteContent.footer.copyright;