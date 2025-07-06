const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      el.classList.add('animate-play');
    } else {
      el.classList.remove('animate-play'); 
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  scrollObserver.observe(el);
});
