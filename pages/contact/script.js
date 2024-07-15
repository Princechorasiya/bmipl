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
const navmenu = document.getElementsByClassName("nav-center");

toggleButton.addEventListener("click", () => {
	navmenu[0].classList.toggle("open");
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		navmenu[0].classList.remove("open");
	}
});

const date = (document.getElementById("date").innerHTML =
	new Date().getFullYear());
