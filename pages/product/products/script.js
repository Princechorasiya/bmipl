var swiper = new Swiper(".blog-slider", {
	spaceBetween: 30,
	effect: "fade",
	loop: true,
	mousewheel: {
		invert: false,
	},
	// autoHeight: true,
	pagination: {
		el: ".blog-slider__pagination",
		clickable: true,
	},
});

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

function smoothMoves(event) {
	const mouseX = event.clientX;
	const mouseY = event.clientY;

	gsap.to(circle, { duration: 0.5, attr: { cx: mouseX, cy: mouseY } });
}

function expandHero() {
	tl.to(circle, {
		duration: 1,
		attr: {
			r: "2000",
		},
		ease: "power2.inOut",
	})
		.to(
			hero,
			{
				duration: 1,
				scale: 1,
				borderRadius: 0,
				ease: "power2.inOut",
			},
			"-=1"
		)
		.to(body, {
			overflow: "auto",
		});
}

document.addEventListener("mousemove", smoothMoves);

// hero.addEventListener("click", expandHero);

// add the slider for gallery
