const showNav = gsap.from('#parallax__nav', {
  yPercent: -200,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: 'top top',
  end: 9999,
  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  }
});