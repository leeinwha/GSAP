// 01. 이질감 표현하기
// gsap.to('.parallax__item__desc', {
//   yPercent: -300,
//   ease: 'none',
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: '.parallax__item__desc',
//     start:'top bottom',
//     end: 'bottom top',
//     markers: true,
//     scrub: true
//   }
// })

// 02. 여러개 이질감 표현하기
gsap.utils.toArray(".parallax__item__desc").forEach(item => {
  gsap.to(item, {
    yPercent: -300,
    ease: "none",
    duration: 0.5,
    scrollTrigger: {
      trigger: item,
      start: "top bottom", 
      end: "bottom top",
      markers: false,
      scrub: 0.5
    },  
  });
});