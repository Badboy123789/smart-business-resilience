
/* ========================================
   SMART BUSINESS RESILIENCE
   Main JavaScript
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close the menu when a navigation link is selected
        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");

                menuToggle.textContent = "☰";
            });

        });

        // Close the mobile menu if the screen becomes wider
        window.addEventListener("resize", function () {

            if (window.innerWidth > 760) {

                mainNav.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");

                menuToggle.textContent = "☰";
            }

        });

    }


    // AUTOMATIC COPYRIGHT YEAR
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // HIGHLIGHT THE CURRENT PAGE IN THE NAVIGATION
    const currentPage = window.location.pathname;

    document.querySelectorAll(".nav a").forEach(function (link) {

        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    });


    // CONTACT FORM VALIDATION
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            if (!contactForm.checkValidity()) {
                event.preventDefault();
                contactForm.reportValidity();
            }

        });

    }

});
      
