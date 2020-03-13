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