// hero functionality
// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
	new Date().getFullYear());

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

const text1 = ["OF HIGH QUALITY WOVEN BLOCK BOTTOM BAGS"];
const text2 = ["At Bilaspur, Chhattisgarh,India."];

let text1Index = 0;
let text2Index = 0;

function typeWriter(element, textArray, index) {
	let i = 0;
	const interval = setInterval(() => {
		element.innerHTML =
			textArray[index].substring(0, i) + '<span class="caret1">|</span>';
		i++;
		if (i > textArray[index].length) {
			clearInterval(interval);
			setTimeout(() => {
				deleteWriter(element, textArray, index);
			}, 1000);
		}
	}, 100);
}

function deleteWriter(element, textArray, index) {
	let i = textArray[index].length;
	const interval = setInterval(() => {
		element.innerHTML =
			textArray[index].substring(0, i) + '<span class="caret1">|</span>';
		i--;
		if (i < 0) {
			clearInterval(interval);
			index = (index + 1) % textArray.length;
			setTimeout(() => {
				typeWriter(element, textArray, index);
			}, 500);
		}
	}, 50);
}

function startTyping() {
	const element1 = document.getElementById("text1");
	const element2 = document.getElementById("text2");

	typeWriter(element1, text1, text1Index);

	typeWriter(element2, text2, text2Index);
}

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

window.onload = startTyping;

//faq's
document.querySelectorAll(".faq-question").forEach((question) => {
	question.addEventListener("click", () => {
		// Close any other open answers
		document
			.querySelectorAll(".faq-question.active")
			.forEach((activeQuestion) => {
				if (activeQuestion !== question) {
					activeQuestion.classList.remove("active");
					activeQuestion.nextElementSibling.style.display = "none";
				}
			});

		// Toggle the clicked question
		question.classList.toggle("active");
		const answer = question.nextElementSibling;
		if (question.classList.contains("active")) {
			answer.style.display = "block";
		} else {
			answer.style.display = "none";
		}
	});
});

//top scroll button

document.addEventListener("DOMContentLoaded", () => {
	const backToTopButton = document.getElementById("back-to-top");

	// Show or hide the back to top button
	window.addEventListener("scroll", () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			backToTopButton.style.display = "block";
		} else {
			backToTopButton.style.display = "none";
		}
	});

	// Smooth scroll to the top when the button is clicked
	backToTopButton.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
});

//resize behaviour
const toggleButton = document.getElementById("nav-toggle");
const navmenu = document.getElementByClass("nav-center");

toggleButton.addEventListener("click", () => {
	navmenu.classList.toggle("open");
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		navmenu.classList.remove("open");
	}
});
