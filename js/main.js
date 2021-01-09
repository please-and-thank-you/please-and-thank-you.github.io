gsap.registerPlugin(ScrollTrigger);

(function () {

  // Bring Site Header in
  gsap.to('.site-header', {
    scrollTrigger: {
      trigger: '.site-header'
    },
    delay: 0.25,
    y: '0px',
    alpha: 1,
    duration: 1
  });

  // Bring Greeting in
  gsap.to('.greeting', {
    scrollTrigger: {
      trigger: '.greeting'
    },
    delay: 0.25,
    y: '0px',
    rotate: 0,
    alpha: 1,
    duration: 1
  });

  // Scroll Greeting out
  gsap.to('.greeting', {
    scrollTrigger: {
      trigger: '.section-landing',
      scrub: true
    },
    rotate: -15,
  });


})();
