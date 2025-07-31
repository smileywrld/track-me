document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const mobileMenu = document.querySelector(".mobile-menu");

navToggle.addEventListener("click", function toggleMenu() {
	const isMenuOpen = mobileMenu.classList.contains("hidden");
	const isOpen = !isMenuOpen;

	if (isOpen) {
		mobileMenu.classList.add("hidden");
	} else {
		mobileMenu.classList.remove("hidden");
	}
});
