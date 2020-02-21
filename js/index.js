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
    "h1": `DOM<br> Is<br> Awesome`,
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


// Nav
const navBar = document.querySelectorAll('nav a');
// console.log(navBar);

for (i = 0; i < navBar.length; i++){
  navBar[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
}

// Before I figured out the for loop to automate this.
// navBar[0].textContent = siteContent['nav'][`nav-item-1`];
// navBar[1].textContent = siteContent['nav'][`nav-item-2`];
// navBar[2].textContent = siteContent['nav'][`nav-item-3`];
// navBar[3].textContent = siteContent['nav'][`nav-item-4`];
// navBar[4].textContent = siteContent['nav'][`nav-item-5`];
// navBar[5].textContent = siteContent['nav'][`nav-item-6`];


// Creates the parent element which points to the nav.
const navi = document.querySelector('nav');
// Creates the new a elements which will go into the nav.
const newA1 = document.createElement('a');
newA1.textContent = 'Whatever';
const newA2 = document.createElement('a');
newA2.textContent = 'You Want';
// parent element. before/after newA element
navi.prepend(newA1);
navi.appendChild(newA2);


// This goes below the new nav elements so they also are turned green.
// querySelectorAll selects all the 'nav a' elements.
const navColor = document.querySelectorAll('nav a');
// console.log(navColor);

// .forEach() goes through each 'nav a' and styles the color green.
navColor.forEach(aColor => {
  aColor.style.color ='green';
});




// CTA
// querySelector selects the first 'h1'
const header = document.querySelector('h1');
// console.log(header);

// innerHTML is used to change the content in header to whatever in in this part of the siteContent object. innerHTML is specifically used over textContent for the <br> in the h1.
header.innerHTML = siteContent["cta"]["h1"];

const ctaButton = document.querySelector('button');
// console.log(ctaButton);
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.getElementById('cta-img');
// console.log(ctaImg);
ctaImg.src = siteContent["cta"]["img-src"];
ctaImg.alt = 'Image of a code snippet.';


// Middle Img
const middleImg = document.getElementById('middle-img');
// console.log(middleImg);
middleImg.src = siteContent["main-content"]["middle-img-src"];
middleImg.alt = 'Image of code snippets across the screen';


// Top Content
// getElementByTagName is grabbing all the h4
const mainH4 = document.getElementsByTagName('h4');
// console.log(mainH4);

// I only need specific ones so I add [index] to point to directly which one I want.
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];

const mainPs = document.getElementsByTagName('p')
// console.log(mainPs);
mainPs[0].textContent = siteContent['main-content']['features-content'];
mainPs[1].textContent = siteContent['main-content']['about-content'];


// Bottom Content

// H4's
mainH4[2].textContent = siteContent['main-content']['services-h4'];
mainH4[3].textContent = siteContent['main-content']['product-h4'];
mainH4[4].textContent = siteContent['main-content']['vision-h4'];

// P's
mainPs[2].textContent = siteContent['main-content']['services-content'];
mainPs[3].textContent = siteContent['main-content']['product-content'];
mainPs[4].textContent = siteContent['main-content']['vision-content'];


// Contact

// H4's
mainH4[5].textContent = siteContent['contact']['contact-h4'];

// P's
mainPs[5].textContent = siteContent['contact']['address'];
mainPs[6].textContent = siteContent['contact']['phone'];
mainPs[7].textContent = siteContent['contact']['email'];

// Footer
mainPs[8].textContent = siteContent['footer']['copyright'];

