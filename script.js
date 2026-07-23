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
// বুকিং ফর্ম
const bookingForm = document.querySelector("#booking form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert(
            "✅ আপনার অ্যাপয়েন্টমেন্টের অনুরোধ গ্রহণ করা হয়েছে!\n\nযোগাযোগ: 01910947438"
        );

        bookingForm.reset();
    });
}

// ডার্ক/লাইট মোড বাটন
const modeBtn = document.createElement("button");
modeBtn.innerHTML = "🌙";
modeBtn.style.position = "fixed";
modeBtn.style.left = "20px";
modeBtn.style.bottom = "20px";
modeBtn.style.width = "55px";
modeBtn.style.height = "55px";
modeBtn.style.borderRadius = "50%";
modeBtn.style.border = "none";
modeBtn.style.cursor = "pointer";
modeBtn.style.fontSize = "22px";
modeBtn.style.zIndex = "999";
modeBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,.3)";

document.body.appendChild(modeBtn);

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.innerHTML = "☀️";
    } else {
        modeBtn.innerHTML = "🌙";
    }
});
