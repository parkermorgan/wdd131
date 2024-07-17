const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
document.querySelector("#currentyear").innerHTML = `${new Date().getFullYear()}`;

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`