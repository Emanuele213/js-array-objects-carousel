const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector('.slider');
const eleBtnBottom = document.querySelector('.btn-down');
const eleBtnTop = document.querySelector('.btn-up');
const eleOver = document.querySelector('.card');

// creaare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = `img/${arrImages[i].image}`;
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);

	const eleCard = document.createElement('img');
	eleCard.src = `img/${arrImages[i].image}`;
	eleCard.classList.add('img-size');
	if (i === 0) {
		eleImg.classList.add('overlay');
	}
	eleOver.append(eleCard);
}

const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile
const listCard = document.querySelectorAll('.img-size');
const eleBtn = document.querySelector('.mod-btn');
const eleBtnReverse = document.querySelector('.mod-btn-reverse');

let activeIndex = 0;

// aggiungere gli event listeners ai due bottoni
eleBtnBottom.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
    listCard[activeIndex].classList.remove('overlay');
	if (activeIndex == 4){
		activeIndex = -1;
	}
	// incrementare l'active index
	activeIndex++;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
    listCard[activeIndex].classList.add('overlay');
});

eleBtnTop.addEventListener('click', function () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
    listCard[activeIndex].classList.remove('overlay');
	if (activeIndex == 0){
		activeIndex = 5;
	}
	
	// incrementare l'active index
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
    listCard[activeIndex].classList.add('overlay');
});

const nextImg = setInterval (imgNext, 3 * 1000);


eleBtn.addEventListener('click', function () {
    eleStop ();
});

eleBtnReverse.addEventListener('click', function () {
    const backImg = setInterval (Imgback, 3 * 1000);
    eleStop ();
    Imgback ();
});

function imgNext () {
    // togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
    listCard[activeIndex].classList.remove('overlay');
	if (activeIndex == 4){
		activeIndex = -1;
	}
	// incrementare l'active index
	activeIndex++;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
    listCard[activeIndex].classList.add('overlay');
}

function Imgback () {
    // togliere la classe active dall'elemento attivo corrente
listEleImg[activeIndex].classList.remove('active');
listCard[activeIndex].classList.remove('overlay');
if (activeIndex == 0){
    activeIndex = 5;
}

// incrementare l'active index
activeIndex--;

// aggiungere la classe active all'elemento successivo
listEleImg[activeIndex].classList.add('active');
listCard[activeIndex].classList.add('overlay');
}

function eleStop () {
    clearInterval(nextImg);
}
