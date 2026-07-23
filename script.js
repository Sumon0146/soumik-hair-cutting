// সৌমিক হেয়ার কাটিং ওয়েবসাইট

document.addEventListener("DOMContentLoaded", () => {

    console.log("Soumik Hair Cutting Website Loaded!");

    // Welcome Message
    setTimeout(() => {
        alert("✂️ সৌমিক হেয়ার কাটিং-এ আপনাকে স্বাগতম!");
    }, 1000);

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});

// Footer Year Auto Update
const year = new Date().getFullYear();
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${year} সৌমিক হেয়ার কাটিং | All Rights Reserved`;
}
