export function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("in-view");
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "-80px" }
  );

  items.forEach((item) => observer.observe(item));
}
