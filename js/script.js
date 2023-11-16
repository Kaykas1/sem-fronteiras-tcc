let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	menuin.classList.toggle('open');
}

function resizeIframe() {
	var iframe = document.getElementById('myIframe');
	iframe.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	iframe.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
   }
   