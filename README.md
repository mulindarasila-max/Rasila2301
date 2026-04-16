

🌐 Mulinda Rasila – Portfolio Website

📌 Task Objective

This project is a responsive personal portfolio website designed and developed using HTML, CSS, and JavaScript.

The goal of this project is to showcase my:

* Academic background
* Technical skills
* Projects
* Interests

while applying Human-Computer Interaction (HCI) principles such as usability, simplicity, and user-friendly navigation.


🏠 1. Homepage / Introduction

The homepage introduces who I am and gives a strong first impression.

Features:

* A welcome tagline:
    “Building clean systems. Thinking beyond the code.”
* A profile image
* A call-to-action button to guide users

Code Explanation:

* <header class="hero">
    Creates the main landing section.
* <img src="...">
    Displays the profile image.
* <h1>
    Highlights the main focus (Cybersecurity).
* <button onclick="showMessage()">
    Triggers a JavaScript function for interactivity.



👤 2. About Me

This section provides detailed background information.

Includes:

* Academic background (Computer Science student)
* Skills and tools
* Career goal (Cybersecurity Analyst)

Code Explanation:

* <section id="about">
    Defines the section for navigation.
* <p>
    Contains descriptive text about me.



🧠 3. Skills

Displays technical abilities clearly.

Technologies:

* C++
* Java
* HTML
* CSS
* JavaScript

Code Explanation:

* <ul>
    Creates a list.
* <li>
    Represents each skill.



💻 4. Projects

This section showcases practical work.

Project 1: Simple Calculator

* Built using Java
* Performs basic arithmetic operations

Project 2: Personal Portfolio Website

* Built using HTML, CSS, JavaScript
* Displays personal and professional information

Code Explanation:

* <div class="project-card">
    Creates styled project containers.
* <h3>
    Project title
* <p>
    Project description



🏆 5. Achievements

Highlights accomplishments.

Includes:

* 3rd Place – Maths Marathon (2025)
* Participation in Telkom Hackathon
* Maths Mentor (2026)

Code Explanation:

* <section id="achievement">
    Defines achievements section
* <ul>
    Lists achievements



📞 6. Contact Section

Allows users to connect with me.

Includes:

* Email link
* GitHub
* LinkedIn
* Phone number

Code Explanation:

* <a href="mailto:...">
    Opens email client
* <a href="https://github.com/">
    External links
* target="_blank"
    Opens links in new tab

⸻

🎯 JavaScript Functionality

Adds interactivity and improves user experience.

1. Smooth Scrolling

document.querySelectorAll("nav a").forEach(link => {

* Selects all navigation links

link.addEventListener("click", e => {

* Listens for clicks

e.preventDefault();

* Stops default jump behavior

target.scrollIntoView({ behavior: "smooth" });

* Smooth scrolling effect



2. Button Interaction

function showMessage() {

* Function triggered by button

btn.innerText = "Welcome 🚀";

* Changes button text



3. Scroll Reveal Animation

const observer = new IntersectionObserver(...)

* Detects when sections appear on screen

entry.target.style.opacity = 1;

* Makes section visible



4. Modal Contact Form

function openContactForm()

* Opens popup form

function closeContactForm()

* Closes popup



5. Send Message

const mailtoLink = `mailto:...`

* Creates email link dynamically


 CSS Design

Responsible for layout and appearance.

Key Features:

* Dark theme UI
* Responsive grid layout
* Hover animations
* Card-based design

Code Explanation:

* body {}
    Sets global styling
* nav {}
    Styles navigation bar
* .hero {}
    Styles homepage section
* .project-card {}
    Styles project containers
* .contact-grid {}
    Creates responsive layout
* .modal {}
    Styles popup form

⸻

📱 Responsiveness

* Uses:

grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

* Ensures layout adapts to different screen sizes

⸻

📂 File Structure

/portfolio
│── index.html
│── style.css
│── script.js
│── image.jpg



🚀 Conclusion

This portfolio demonstrates my ability to:

* Build structured web pages using HTML
* Design user-friendly interfaces with CSS
* Add interactivity using JavaScript
* Apply HCI principles in real-world projects

⸻

🔗 Links

* GitHub: https://github.com/
* LinkedIn: https://www.linkedin.com/
