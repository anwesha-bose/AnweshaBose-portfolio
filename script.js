document.addEventListener("DOMContentLoaded", () => {

    if (document.querySelector("#element")) {
        new Typed("#element", {
            strings: ['Frontend Developer', 'Problem Solver', 'Tech Enthusiast'],
            loop: true,
            typeSpeed: 60,
            backSpeed: 50,
            startDelay: 300,
            backDelay: 1000,
            showCursor: false,
        });
    }

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });

        if (nav) {
            nav.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

});
