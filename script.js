const button = document.querySelector('.lever');
const body = document.querySelector('body');
const door = document.querySelector('.door');

let isOpen = true;

function manipulateGarage() {
	if (isOpen === true) {
		door.style.animation = 'garageDown 4s ease forwards';
		isOpen = false;
		button.innerHTML = "Open the garage";
	} else if (isOpen === false){
		door.style.animation = "garageUp 4s ease forwards";
		isOpen = true;
		button.innerHTML = "Close the garage";
	}
	console.log(isOpen);
}

button.addEventListener('click', manipulateGarage);
