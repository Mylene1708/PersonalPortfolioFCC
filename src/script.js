// coded by @lasjorg
// eslint-disable-next-line no-unused-vars
const projectName = "portfolio";

const sr = ScrollReveal({
  duration: 1000,
  reset: true
})

ScrollReveal().reveal("h1", {
  scale: 0.5
});

ScrollReveal().reveal("#welcome-text", { 
  delay: 500
});

ScrollReveal().reveal(".project-tile", { 
  delay: 1000,
  interval: 500
});
