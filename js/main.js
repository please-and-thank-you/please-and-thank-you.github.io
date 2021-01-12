gsap.registerPlugin(ScrollTrigger);

(function () {

  // Bring Site Header in
  gsap.from('.site-header', {
    delay: 0.25,
    y: '130px',
    alpha: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.site-header'
    }
  });

  // Bring Greeting in
  gsap.from('.greeting', {
    delay: 0.25,
    y: '130px',
    rotate: 15,
    alpha: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.greeting'
    }
  });

  // Scroll Greeting out
  gsap.fromTo('.greeting', {
    rotate: 0
  }, {
    rotate: -15,
    scrollTrigger: {
      trigger: '.section-hero',
      toggleActions: 'restart none none none',
      start: 'top 100%',
      end: 'top 0%',
      scrub: true,
      // markers: true
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
      trigger: '.section-info',
      toggleActions: 'restart none none none',
      start: 'top 90%',
      end: 'top 0%',
      scrub: true,
      // markers: true
    }
  });

  // Bring in footer logo
  gsap.from('.section-info .paty-logo', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.section-info',
      toggleActions: 'restart none none none',
      start: 'top 20%',
      end: 'top 0%',
      scrub: true,
      markers: true
    }
  });

  // Bring in Contact info background
  gsap.from('.contact-background', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.section-info',
      toggleActions: 'restart none none none',
      start: 'top 90%',
      end: 'top 10%',
      scrub: true,
      // markers: true
    }
  });

  // Bring in Contact email address
  gsap.from('.contact-info', {
    rotate: 90,
    scrollTrigger: {
      trigger: '.section-info',
      toggleActions: 'restart none none none',
      start: 'top 90%',
      end: 'top 10%',
      scrub: true,
      // markers: true
    }
  });

})();
