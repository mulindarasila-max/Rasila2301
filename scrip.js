// Smooth scroll navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Button interaction
function showMessage() {
    const btn = document.querySelector("button");
    btn.innerText = "Welcome 🚀";

    setTimeout(() => {
        btn.innerText = "View Portfolio";
    }, 1500);
}

// Scroll reveal
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// Card click feedback
document.querySelectorAll(".contact-card, .like-card").forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.95)";
        setTimeout(() => card.style.transform = "", 150);
    });
});

// Nav glow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 0 20px rgba(255,77,166,0.4)";
    } else {
        nav.style.boxShadow = "none";
    }
});
// open modal
function openContactForm() {
    document.getElementById("contactModal").style.display = "flex";
}

// close modal
function closeContactForm() {
    document.getElementById("contactModal").style.display = "none";
}

// send message (mailto fallback)
function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    const mailtoLink =
        `mailto:email@example.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;

    window.location.href = mailtoLink;
}