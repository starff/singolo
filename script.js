// header
const home = document.getElementById('home'); 
const services = document.getElementById('services'); 
const portfolio = document.getElementById('portfolio'); 
const about = document.getElementById('about_us'); 
const contact = document.getElementById('quote'); 
const menu = document.querySelector('.navigation_menu');
let list = menu.querySelectorAll('.navigation_menu--link');

function changeSection() {
  home.classList.remove('active');
  services.classList.remove('active');
  portfolio.classList.remove('active');
  about.classList.remove('active');
  contact.classList.remove('active');
  event.target.classList.add('active');
};
home.addEventListener('click', changeSection);
services.addEventListener('click', changeSection);
portfolio.addEventListener('click', changeSection);
about.addEventListener('click', changeSection);
contact.addEventListener('click', changeSection);

// header scroll

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
document.addEventListener('scroll', onScroll);
function onScroll() {
  const currentPosition = window.scrollY;
  let links = document.querySelectorAll('.navigation_menu a');
  if (links.length == 0) {
    links = document.querySelectorAll('.burger_menu a');
  }
  const places = document.querySelectorAll('section');
  places.forEach((item) => {
    if(window.innerHeight + currentPosition == document.body.offsetHeight) {
      links.forEach((elem) => {
        elem.classList.remove('active');
        if(item.getAttribute('class') === elem.getAttribute('id')) {
        contact.classList.add('active');
        }
      })
    }
    else if(item.offsetTop <= currentPosition && (item.offsetTop + item.offsetHeight) >= currentPosition) {
      links.forEach((elem) => {
        elem.classList.remove('active');
        if(item.getAttribute('class') === elem.getAttribute('id')) {
        elem.classList.add('active');
        }
      })
    }
    
  });
}
 //burger 
 const burger = document.getElementById('burger');
 const nav = document.querySelector('.navigation_menu');
 burger.addEventListener('click', ((event) => {
   if(nav.classList.contains("burger_menu")) {
    burger.style.transform = 'rotate(0deg)';
    burger.style.transition = '0.5s';
    nav.classList.remove('burger_menu');
    nav.classList.add('navigation_menu');
   }else {
    burger.style.transform = 'rotate(90deg)';
    burger.style.transition = '0.5s';
    nav.classList.remove('navigation_menu');
    nav.classList.add('burger_menu');
   }
   event.target.classList.remove('burger_menu');
 }));  
nav.addEventListener('click', ((event) => {
  nav.classList.remove('burger_menu');
  nav.classList.add('navigation_menu');
  burger.style.transform = 'rotate(0deg)';
  burger.style.transition = '0.5s';
})); 
//slider
let items = document.querySelectorAll('.slide');
let currentItem = 0; 
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.slider--left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.slider--right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

// slider black phone
const horDisplay = document.querySelector('.iphone--horizontal-display');
const vertDisplay = document.querySelector('.iphone--vertical-display');
document.querySelector('.iphone--vertical').addEventListener('click', (event) => {
  if ( vertDisplay.style.display == 'none' ) {
    vertDisplay.style.display = 'block';
  } else {
    vertDisplay.style.display = 'none';
  };
});
vertDisplay.addEventListener('click', (event) => {
  if ( vertDisplay.style.display == 'none' ) {
    vertDisplay.style.display = 'block';
  } else {
    vertDisplay.style.display = 'none';
  };
});

document.querySelector('.iphone--horizontal').addEventListener('click', (event) => {
  if ( horDisplay.style.display == 'none' ) {
    horDisplay.style.display = 'block';
  } else {
    horDisplay.style.display = 'none';
  };
});
horDisplay.addEventListener('click', (event) => {
  if ( horDisplay.style.display == 'none' ) {
    horDisplay.style.display = 'block';
  } else {
    horDisplay.style.display = 'none';
  };
});
//portfolio 
const all = document.getElementById('all');
const web = document.getElementById('web');
const graphic = document.getElementById('graphic');
const artwork = document.getElementById('artwork');

function changeTag() {
  all.classList.remove('activeTag');
  web.classList.remove('activeTag');
  graphic.classList.remove('activeTag');
  artwork.classList.remove('activeTag');
  event.target.classList.add('activeTag');
};
all.addEventListener('click', changeTag);
web.addEventListener('click', changeTag);
graphic.addEventListener('click', changeTag);
artwork.addEventListener('click', changeTag);
const project = document.querySelector('.project');
let projectList = project.querySelectorAll('.project--image');
function addOutline() {
  projectList.forEach(item => item.style.outline = 'none');
  project.style.outline = 'none';
  event.target.style.outline = '5px solid #F06C64';
  event.target.style.transition = '0.3s';
};
project.addEventListener('click', addOutline);

all.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
});

web.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
});
graphic.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
  
});
artwork.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
});



// portfolio random

function portfolioRandom () {
  let elements = document.querySelectorAll('.project--item');
  const container = document.querySelector('.project');
  let arrForImageOrig = [];
  let arrForImage = [];
  let arr = Array.from(elements);
  let origin = arr;
  origin.forEach((elem) => {
    arrForImageOrig.push(elem.querySelector('.project--image'));
  })
  container.innerHTML ='';
  sort();
  function sort() {
    arr.sort ( () => Math.random() - 0.5);
    
    arr.forEach((elem) => {
      arrForImage.push(elem.querySelector('.project--image'));
    });
    // checkRandom();
  }
function checkRandom() {
  for(let i = 0; i < arrForImageOrig.length; i++) {
    // console.log(arrForImage[i]);
    if(arrForImageOrig[i].getAttribute('src') === arrForImage[i].getAttribute('src')) {
      sort();
      i=0;
    }
  }
}
  arr.forEach((item) => {
    // console.log(item);
    container.appendChild(item);
  })
};
all.addEventListener('click', portfolioRandom);
web.addEventListener('click', portfolioRandom);
graphic.addEventListener('click', portfolioRandom);
artwork.addEventListener('click', portfolioRandom);



// form
const form = document.querySelector('form');
const submit = document.getElementById('submit');
const ok = document.getElementById('ok');
const shadow = document.querySelector('.shadow');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let details = document.getElementById('details');
let topic = document.getElementById('topic');
let topicValue = document.getElementById('topic-value');
let description = document.getElementById('description');
let descriptionValue = document.getElementById('description-value');

form.addEventListener('submit', (event) => {
  shadow.style.display ='block';
  if(subject.value != '') {
    topic.innerText = 'Тема: ';
    topicValue.innerText = '';
    topicValue.innerText = subject.value;
  } else {
    topic.innerText = 'Без темы';
    topicValue.innerText = '';
  };
  if(details.value != '') {
    description.innerText = 'Описание: ';
    descriptionValue.innerText = '';
    descriptionValue.innerText = details.value;
  } else {
    description.innerText = 'Без описания';
    descriptionValue.innerText = '';
  };
  event.preventDefault()
});
ok.addEventListener('mousedown', (event) => {
  shadow.style.display ='none';
  name.value = '';
  email.value = '';
  subject.value = '';
  details.value = '';
});