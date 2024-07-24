// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 992) {
		links.classList.remove("show-links");
	}
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		// prevent default
		e.preventDefault();
		links.classList.remove("show-links");

		const id = e.target.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		//
		let position = element.offsetTop - 62;

		window.scrollTo({
			left: 0,
			// top: element.offsetTop,
			top: position,
			behavior: "smooth",
		});
	});
});

let currentSlide = 0;
function showSlide(index) {
	const slides = document.querySelector(".slides");
	if (index >= slides.children.length) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = slides.children.length - 1;
	} else {
		currentSlide = index;
	}
	slides.style.transform = `translateX(-${currentSlide * 50}%)`;
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

function prevSlide() {
	showSlide(currentSlide - 1);
}

// Auto slide
setInterval(() => {
	nextSlide();
}, 8000); // Change slide every 5 seconds
