gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', (e) => {

  // Remove Blind
  gsap.to('.blind', {
    autoAlpha: 0
  });

  // Bring Site Header in
  gsap.from('.home .site-header', {
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
    rotate: 20,
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
    rotate: -20,
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      scrub: true,
      start: 'top 100%',
      trigger: '.section-hero'
    }
  });

  // Fade out Section Hero
  gsap.to('.hero-background', {
    opacity: 0,
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      // pin: '.section-landing',
      scrub: true,
      start: 'top 90%',
      trigger: '.section-info'
    }
  });

  // Fade in Section Hero
  gsap.from('.hero-background', {
    ease: 'linear',
    opacity: 0,
    y: '-100vh',
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      scrub: true,
      start: 'top 100%',
      trigger: '.section-hero'
    }
  });

  // Bring in footer logo
  gsap.from('.section-info .paty-logo', {
    ease: 'linear',
    opacity: 0,
    y: '-25vh',
    scrollTrigger: {
      end: 'top 0%',
      // markers: true,
      scrub: true,
      start: 'top 25%',
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
      trigger: '.contact'
    }
  });

  // Bring in Contact email address
  gsap.from('.contact-info', {
    ease: 'linear',
    rotate: 45,
    scrollTrigger: {
      end: 'top 5%',
      // markers: true,
      scrub: true,
      start: 'top 90%',
      trigger: '.contact'
    }
  });

  // Newsletter Submit
  var newsletterForm = $('#mc-embedded-subscribe-form');

  newsletterForm.submit(function(e) {
    e.preventDefault();
    var body = $('body');
    var formData = $(this).serialize();

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: formData,
      cache: false,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      encode: true,
      error: function(error) {
        // console.log(error);
      },
      success: function(data) {
        if (data.result != 'success') {
          // console.log(data.msg);
          $('.newsletter').addClass('invalid');
          $('.error-message').html(data.msg);
        } else {
          body.addClass('newsletter-success');

          setTimeout(function() {
            $('#mce-EMAIL').val('').blur();
            $('.newsletter').removeClass('invalid');
            body.removeClass('newsletter-success');
          }, 3000);
        }
      }
    })

    return;
  });

});
