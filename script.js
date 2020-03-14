// header
const menu = document.querySelector('.navigation_menu');
let list = menu.querySelectorAll('.navigation_menu--link');
function changeSection() {
  list.forEach(item => item.classList.remove('active'));
  event.target.classList.add('active');
};
menu.addEventListener('click', changeSection);

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
document.querySelector('.slider--image-vertical').addEventListener('click', (event) => {
  let blackDisplay = document.querySelector('.vertical-black');
  if ( blackDisplay.style.display == 'block' ) {
    blackDisplay.style.display = 'none';
  } else {
      blackDisplay.style.display = 'block';
  };
  blackDisplay.addEventListener('click', (event) => {
    blackDisplay.style.display = 'none';
  })
});
document.querySelector('.slider--image-horizontal').addEventListener('click', (event) => {
  let blackDisplay = document.querySelector('.horizontal-black');
  if ( blackDisplay.style.display == 'block' ) {
    blackDisplay.style.display = 'none';
  } else {
      blackDisplay.style.display = 'block';
  };
  blackDisplay.addEventListener('click', (event) => {
    blackDisplay.style.display = 'none';
  })
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
  event.target.style.outline = '5px solid #F06C64';
  event.target.style.transition = '0.3s';
};
project.addEventListener('click', addOutline);


let imgA = document.getElementById('a').src;
let imgB = document.getElementById('b').src;
let imgC = document.getElementById('c').src;
let imgD = document.getElementById('d').src;
let imgE = document.getElementById('e').src;
let imgF = document.getElementById('f').src;
let imgG = document.getElementById('g').src;
let imgH = document.getElementById('h').src;
let imgJ = document.getElementById('j').src;
let imgL = document.getElementById('l').src;
let imgK = document.getElementById('k').src;
let imgN = document.getElementById('n').src;

all.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
  document.getElementById('a').src = imgA;
  document.getElementById('b').src = imgB;
  document.getElementById('c').src = imgC;
  document.getElementById('d').src = imgD;
  document.getElementById('e').src = imgE;
  document.getElementById('f').src = imgF;
  document.getElementById('g').src = imgG;
  document.getElementById('h').src = imgH;
  document.getElementById('j').src = imgJ;
  document.getElementById('l').src = imgL;
  document.getElementById('k').src = imgK;
  document.getElementById('n').src = imgN;
});

web.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
  document.getElementById('a').src = imgN;
  document.getElementById('b').src = imgK;
  document.getElementById('c').src = imgL;
  document.getElementById('d').src = imgJ;
  document.getElementById('e').src = imgH;
  document.getElementById('f').src = imgG;
  document.getElementById('g').src = imgF;
  document.getElementById('h').src = imgE;
  document.getElementById('j').src = imgD;
  document.getElementById('l').src = imgC;
  document.getElementById('k').src = imgB;
  document.getElementById('n').src = imgA;
});
graphic.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
  document.getElementById('a').src = imgL;
  document.getElementById('b').src = imgJ;
  document.getElementById('c').src = imgN;
  document.getElementById('d').src = imgK;
  document.getElementById('e').src = imgF;
  document.getElementById('f').src = imgE;
  document.getElementById('g').src = imgH;
  document.getElementById('h').src = imgG;
  document.getElementById('j').src = imgB;
  document.getElementById('l').src = imgA;
  document.getElementById('k').src = imgD;
  document.getElementById('n').src = imgC;
});
artwork.addEventListener('click', (event) => {
  projectList.forEach(item => item.style.outline = 'none');
  document.getElementById('a').src = imgK;
  document.getElementById('b').src = imgN;
  document.getElementById('c').src = imgJ;
  document.getElementById('d').src = imgL;
  document.getElementById('e').src = imgG;
  document.getElementById('f').src = imgH;
  document.getElementById('g').src = imgE;
  document.getElementById('h').src = imgF;
  document.getElementById('j').src = imgC;
  document.getElementById('l').src = imgD;
  document.getElementById('k').src = imgA;
  document.getElementById('n').src = imgB;
});

// form
const form = document.querySelector('form');
const submit = document.getElementById('submit');
const ok = document.getElementById('ok');
const shadow = document.querySelector('.shadow');
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
    topicValue.innerText = subject.value;
  } else {
    topic.innerText = 'Без темы';
  };
  if(details.value != '') {
    description.innerText = 'Описание: ';
    descriptionValue.innerText = details.value;
  } else {
    description.innerText = 'Без описания';
  };
  event.preventDefault()
});
ok.addEventListener('mousedown', (event) => {
  shadow.style.display ='none';
});

