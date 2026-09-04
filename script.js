/* =========================================
   LA LUZ LOVE STORY
   Website Interactions
========================================= */

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------
       SMOOTH SCROLLING
    ----------------------------------------- */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* -----------------------------------------
       SCROLL REVEAL ANIMATION
    ----------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".story-card, .reason, .timeline-item, .photo-placeholder, .letter"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition =
            "opacity 0.9s ease, transform 0.9s ease";

        revealObserver.observe(element);

    });


    /* -----------------------------------------
       CREATE FLOATING HEARTS
    ----------------------------------------- */

    const heartContainer = document.querySelector(".hearts");

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💞",
        "♥"
    ];


    function createHeart() {

        if (!heartContainer) return;

        const heart = document.createElement("span");

        heart.innerHTML =
            heartSymbols[
                Math.floor(Math.random() * heartSymbols.length)
            ];

        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "105%";
        heart.style.fontSize =
            Math.floor(Math.random() * 18 + 12) + "px";
        heart.style.opacity =
            Math.random() * 0.35 + 0.1;
        heart.style.pointerEvents = "none";

        const duration =
            Math.floor(Math.random() * 8 + 8);

        heart.style.animation =
            `heartRise ${duration}s linear forwards`;

        heartContainer.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }


    // Create hearts periodically
    setInterval(createHeart, 900);


    /* -----------------------------------------
       ADD HEART ANIMATION
    ----------------------------------------- */

    const heartStyle = document.createElement("style");

    heartStyle.innerHTML = `
        @keyframes heartRise {

            0% {
                transform: translateY(0) rotate(0deg);
            }

            25% {
                transform: translateY(-25vh) translateX(15px)
                           rotate(15deg);
            }

            50% {
                transform: translateY(-50vh) translateX(-15px)
                           rotate(-15deg);
            }

            75% {
                transform: translateY(-75vh) translateX(12px)
                           rotate(10deg);
            }

            100% {
                transform: translateY(-125vh) translateX(-10px)
                           rotate(-10deg);
                opacity: 0;
            }

        }
    `;

    document.head.appendChild(heartStyle);


    /* -----------------------------------------
       PHOTO PLACEHOLDER CLICK EFFECT
    ----------------------------------------- */

    document.querySelectorAll(".photo-placeholder").forEach(photo => {

        photo.addEventListener("click", () => {

            photo.style.transform = "scale(1.04)";

            setTimeout(() => {
                photo.style.transform = "";
            }, 250);

        });

    });


    /* -----------------------------------------
       CONSOLE MESSAGE ❤️
    ----------------------------------------- */

    console.log(
        "❤️ Welcome to La Luz Love Story."
    );

    console.log(
        "Made with love for Cynthia — La Luz."
    );

});
