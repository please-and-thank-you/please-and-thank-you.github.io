gsap.registerPlugin(ScrollTrigger);

(function () {

  // Bring Site Header in
  gsap.from('.site-header', {
    alpha: 0,
    delay: 0.25,
    duration: 1,
    y: '130px',
    scrollTrigger: {
      trigger: '.site-header'
    }
  });

  // Bring Greeting in
  gsap.from('.greeting', {
    alpha: 0,
    delay: 0.25,
    duration: 1,
    rotate: 15,
    y: '130px',
    scrollTrigger: {
      trigger: '.greeting'
    }
  });

  // Scroll Greeting out
  gsap.fromTo('.greeting', {
    ease: 'linear',
    rotate: 0
  }, {
    ease: 'linear',
    rotate: -15,
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      scrub: true,
      start: 'top 100%',
      toggleActions: 'restart none none none',
      trigger: '.section-hero'
    }
  });

  // Fade in Section Hero
  // gsap.from('.hero-background', {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: '.section-hero',
  //     toggleActions: 'restart none none none',
  //     start: 'top 100%',
  //     end: 'top 0%',
  //     scrub: true,
  //     // markers: true
  //   }
  // });

  // Fade out Section Hero
  gsap.to('.hero-background', {
    opacity: 0,
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      scrub: true,
      start: 'top 90%',
      toggleActions: 'restart none none none',
      trigger: '.section-info'
    }
  });

  // Bring in footer logo
  gsap.from('.section-info .paty-logo', {
    ease: 'linear',
    opacity: 0,
    y: '-20vh',
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      scrub: true,
      start: 'top 20%',
      toggleActions: 'restart none none none',
      trigger: '.section-info'
    }
  });

  // Bring in Contact info background
  gsap.from('.contact-background', {
    ease: 'linear',
    opacity: 0,
    scrollTrigger: {
      end: 'top 10%',
      // markers: true,
      scrub: true,
      start: 'top 90%',
      toggleActions: 'restart none none none',
      trigger: '.section-info'
    }
  });

  // Bring in Contact email address
  gsap.from('.contact-info', {
    ease: 'linear',
    rotate: 45,
    scrollTrigger: {
      end: 'top 5%',
      markers: true,
      scrub: true,
      start: 'top 90%',
      toggleActions: 'restart none none none',
      trigger: '.section-info'
    }
  });

})();
