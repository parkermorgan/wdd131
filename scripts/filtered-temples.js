const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navLinks');
const gallery = document.querySelector('.gallery');
const title = document.querySelector('main h2');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
	{
		templeName: "Portland Oregon",
		location: "Portland, Oregon",
		dedicated: "1989, August, 19",
		area: 80500,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/400x250/portland-temple-lds-1079112-wallpaper.jpg"
	},
	{
		templeName: "Oakland California",
		location: "Oakland, California",
		dedicated: "1964, November, 17",
		area: 95000,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
	},
	{
		templeName: "Rexburg Idaho",
		location: "Rexburg, Idaho",
		dedicated: "2008, February, 10",
		area: 57504,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/400x250/rexburg-temple-776440-wallpaper.jpg"
	},
  ];
  function renderTemples(filteredTemples) {
	gallery.innerHTML = '';
	filteredTemples.forEach(temple => {
		const card = document.createElement('div');
		card.classList.add('card');

		const cardContent = document.createElement('div');
		cardContent.classList.add('card-content');

		const figcaption = document.createElement('figcaption');
		const img = document.createElement('img');

		figcaption.innerHTML = `
			<h3>${temple.templeName}</h3>
			<div><span>Location:</span> ${temple.location}</div>
			<div><span>Dedicated:</span> ${temple.dedicated}</div>
			<div><span>Area:</span> ${temple.area} sq ft</div>
		`;

		img.src = temple.imageUrl;
		img.alt = temple.templeName;
		img.loading = 'lazy';
		img.width = 320;
		img.height = 200;

		cardContent.appendChild(figcaption);
		card.appendChild(cardContent);
		card.appendChild(img);
		gallery.appendChild(card);
	});
}

renderTemples(temples);

navigation.addEventListener('click', (event) => {
	if (event.target.tagName === 'A') {
		event.preventDefault();

		let filteredTemples;
		let filterName = event.target.textContent;
		switch (event.target.dataset.filter) {
			case 'old':
				filteredTemples = temples.filter(temple => {
					const dedicatedDate = new Date(temple.dedicated);
					return dedicatedDate.getFullYear() < 1900;
				});
				break;
			case 'new':
				filteredTemples = temples.filter(temple => {
					const dedicatedDate = new Date(temple.dedicated);
					return dedicatedDate.getFullYear() > 2000;
				});
				break;
			case 'large':
				filteredTemples = temples.filter(temple => temple.area > 90000);
				break;
			case 'small':
				filteredTemples = temples.filter(temple => temple.area < 10000);
				break;
			default:
				filteredTemples = temples;
				filterName = 'Home';
				break;
		}

		renderTemples(filteredTemples);
		title.textContent = filterName;
	}
});