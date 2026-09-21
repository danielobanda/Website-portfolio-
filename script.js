const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


const typewriterText = document.querySelector('#typewriter-text');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typewriterText) {
  if (reduceMotion) {
    typewriterText.textContent = 'ICT & AI Solutions Developer building useful digital products.';
  } else {
    const phrases = [
      'ICT & AI Solutions',
      'Developer building',
      'useful digital products.'
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let deleting = true;

    const tick = () => {
      const phrase = phrases[phraseIndex];

      if (deleting) {
        charIndex--;
        typewriterText.textContent = phrase.slice(0, Math.max(0, charIndex));

        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(tick, 320);
          return;
        }

        setTimeout(tick, 42);
        return;
      }

      const nextPhrase = phrases[phraseIndex];
      charIndex++;
      typewriterText.textContent = nextPhrase.slice(0, charIndex);

      if (charIndex >= nextPhrase.length) {
        deleting = true;
        setTimeout(tick, 1150);
        return;
      }

      setTimeout(tick, 76);
    };

    setTimeout(tick, 1150);
  }
}


const aboutTypewriterText = document.querySelector('#about-typewriter-text');

if (aboutTypewriterText) {
  const aboutSentence = 'I like solving practical problems with technology people can actually use.';

  if (reduceMotion) {
    aboutTypewriterText.textContent = aboutSentence;
  } else {
    let aboutIndex = aboutSentence.length;
    let aboutDeleting = true;

    const aboutTick = () => {
      if (aboutDeleting) {
        aboutIndex--;
        aboutTypewriterText.textContent = aboutSentence.slice(0, Math.max(0, aboutIndex));

        if (aboutIndex <= 0) {
          aboutDeleting = false;
          setTimeout(aboutTick, 700);
          return;
        }

        setTimeout(aboutTick, 115);
        return;
      }

      aboutIndex++;
      aboutTypewriterText.textContent = aboutSentence.slice(0, aboutIndex);

      if (aboutIndex >= aboutSentence.length) {
        aboutDeleting = true;
        setTimeout(aboutTick, 1800);
        return;
      }

      setTimeout(aboutTick, 82);
    };

    setTimeout(aboutTick, 1800);
  }
}
