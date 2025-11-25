// Smooth fade-in reveal on scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));

document.querySelectorAll(".fade-in").forEach((el) => {
  el.style.opacity = 0;
  el.style.transition = "0.8s";
});
document.querySelectorAll(".show").forEach((el) => {
  el.style.opacity = 1;
});

// Contact form logic
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let msg = document.getElementById("message");

  if (!name.value || !email.value || !msg.value) {
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 400);
    return;
  }

  successMsg.style.display = "block";

  name.value = "";
  email.value = "";
  msg.value = "";
});
