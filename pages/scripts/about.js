document.addEventListener("DOMContentLoaded", () => {
	const slidesData = [
		{ src: "../../images/customers/acc.png", description: "Description 1" },
		{
			src: "../../images/customers/customer2.png",
			description: "Description 2",
		},
		{
			src: "../../images/customers/customer3.png",
			description: "Description 3",
		},
		{ src: "../../images/customers/hei.png", description: "Description 4" },
		{ src: "../../images/customers/lafarge.png", description: "Description 5" },
		{ src: "../../images/customers/nuv.png", description: "Description 6" },
		{ src: "../../images/customers/ramcoo.png", description: "Description 7" },
		{
			src: "../../images/customers/ultratechcement.png",
			description: "Description 8",
		},
	];

	const carouselTrack = document.querySelector(".carousel-track");

	const createSlide = ({ src, description }) => {
		// if (slideElement.length === 8) {
		// 	return slideElement;
		// }
		const slideElement = document.createElement("div");
		slideElement.className = "customer-slide";

		const imgElement = document.createElement("img");
		imgElement.src = src;
		imgElement.alt = description;

		const overlayElement = document.createElement("div");
		overlayElement.className = "overlay";
		// overlayElement.textContent = description;

		slideElement.append(imgElement, overlayElement);

		return slideElement;
	};

	const populateCarouselTrack = (slides) => {
		const fragment = document.createDocumentFragment();
		slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

		// Duplicate slides to create a seamless loop effect
		slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

		carouselTrack.appendChild(fragment);

		const slideWidth = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue(
				"--slide-width"
			)
		);
		const gapWidth = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue("--gap-width")
		);

		carouselTrack.style.setProperty("--total-width", "500px");

		carouselTrack.style.setProperty("--scroll-duration", `${4}s`);
	};

	const updateBlurEffect = () => {
		const slides = carouselTrack.querySelectorAll(".slide");
		slides.forEach((slide) => {
			slide.classList.remove("blur");
			slide.classList.remove("lesser-blur");
		});

		if (slides.length > 0) {
			slides[0].classList.add("blur");
			slides[1].classList.add("lesser-blur");
			slides[slides.length - 2].classList.add("lesser-blur");
			slides[slides.length - 1].classList.add("blur");
		}
	};

	populateCarouselTrack(slidesData);
	updateBlurEffect();

	carouselTrack.addEventListener("animationiteration", updateBlurEffect);

	const mask = document.createElement("div");
	mask.className = "mask";
	document.querySelector(".carousel").appendChild(mask);
});
