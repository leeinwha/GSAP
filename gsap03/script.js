// 01. 1개의 섹션을 선택
// const panel = document.querySelector('#section1');

// ScrollTrigger.create({
//   trigger: panel,
//   start: 'top top',
//   pin: true,
// })

//02. 전체 섹션 고정
// gsap.utils.toArray('.parallax__item').forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: true,
//     pinSpacing: false
//   })
// })

// 03. 스냅 고정 효과
let panels = gsap.utils.toArray(".parallax__item");
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    pin: true, 
    pinSpacing: false 
  });
});


ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start), 
      snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); 
    },
    duration: 0.5
  }
});