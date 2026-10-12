
/* RUTH KAMBITA - PORTFOLIO JAVASCRIPT */

// 1. Welcome message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Ruth Kambita's Portfolio!");

    // 2. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Back to top button
    const topButton = document.getElementById("backToTop");

    if (topButton) {
        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 4. Update the current year automatically
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 5. Contact form feedback
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting Ruth Kambita! 💕");

            contactForm.reset();
        });
    }
});
