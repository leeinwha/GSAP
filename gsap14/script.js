const horizontal = document.querySelector('#horizontal');
const sections = gsap.utils.toArray('#horizontal > section');

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length -1),
  ease: 'none',
  scrollTrigger: {
    trigger: horizontal,
    start: 'top top',
    end: () => '+=' + (horizontal.offsetWidth - innerWidth),
    pin: true,
    ainicipatePin: 1,
    scrub: 1,
    invalidateOnRefresh: true
  }
});

gsap.to('.img4', {
  y: -200,
  duration: 2,
  ease: 'elastic',
  scrollTrigger: {
    trigger: '.img4',
    containerAnimation: scrollTween,
    start: 'left center',
    toggleActions: 'play none reverse none',
    id: 'img4'
  }
});

gsap.to('.img5', {
  rotation: 720,
  duration: 2,
  ease: 'elastic',
  scrollTrigger: {
    trigger: '.img5',
    containerAnimation: scrollTween,
    start: 'left center',
    toggleActions: 'play none reverse none',
    id: 'img5'
  }
});

gsap.to('.img6', {
  scale: 0.3,
  duration: 2,
  ease: 'elastic',
  scrollTrigger: {
    trigger: '.img6',
    containerAnimation: scrollTween,
    start: 'left center',
    toggleActions: 'play none reverse none',
    id: 'img6'
  }
});