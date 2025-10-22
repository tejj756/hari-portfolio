// MENU SHOW
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      document.querySelector('.nav-toggle').classList.toggle('bx-x');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id');

    const sectionsClass = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
  reset: true
});
sr.reveal('.home-data, .about-img, .skills-subtitle, .skills-text');
sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img', { delay: 400 });
sr.reveal('.home-social-icon', { interval: 200 });
sr.reveal('.skills-data, .work-img, .contact-input', { interval: 200 });
