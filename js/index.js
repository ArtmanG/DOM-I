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

// navBar[0].textContent = 'Services';
// console.log(navBar[0]);
// navBar[1].textContent = 'Product';
// navBar[2].textContent = 'Vision';
// navBar[3].textContent = 'Features';
// navBar[4].textContent = 'About';
// navBar[5].textContent = 'Content';

// CTA
const header = document.querySelector('h1');
// console.log(header);
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
const mainH4 = document.getElementsByTagName('h4');
console.log(mainH4);
mainH4[0].textContent = siteContent['main-content']['features-h4'];
mainH4[1].textContent = siteContent['main-content']['about-h4'];

const mainPs = document.getElementsByTagName('p')
console.log(mainPs);
mainPs[0].textContent = siteContent['main-content']['features-content'];
mainPs[1].textContent = siteContent['main-content']['about-content'];




// Bottom Content


