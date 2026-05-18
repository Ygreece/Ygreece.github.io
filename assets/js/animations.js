// Scroll Animations
document.addEventListener("DOMContentLoaded", function() {
  // Add fade-in class to elements
  var elements = document.querySelectorAll(".page__content h1, .page__content h2, .page__content h3, .page__content p, .page__content ul, .page__content table, .archive__item");
  elements.forEach(function(el, i) {
    el.classList.add("fade-in");
    el.style.animationDelay = (i * 0.1) + "s";
  });

  // Intersection Observer for scroll animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(function(el) { observer.observe(el); });
});
