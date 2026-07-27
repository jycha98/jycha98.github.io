const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.nav))
  .filter(Boolean);

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.dataset.nav === sectionId;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveLink(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-45% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 1],
    },
  );

  sections.forEach((section) => observer.observe(section));
}
