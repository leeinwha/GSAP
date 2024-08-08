// 01. 텍스트 분리하기
    // let text = document.querySelector('.split');
    // let splitText = text.innerText;
    // let splitWrap = splitText.split('').join('</spna><span>');
    // text.innerHTML = splitWrap = '<span>' + splitWrap + '</span>';

    // 02. 모든 텍스트 분리하기
    // document.querySelectorAll('.split').forEach(text => {
    //   let splitWrap = text.innerText.split('').join("</span><span aria-hidden='true'>");
    //   text.innerHTML = "<span aria-hidden='true'>" + splitWrap + '</span>';
    //   text.setAttribute("aria-lavel", text.innerText)
    // });

    // 03. 모든 텍스트 분리하기 : 여백 표현하기
    // document.querySelectorAll('.split').forEach(text => {
    //   let theText = text.innerText;
    //   let newText = '';

    //   for(let i=0; i < text.innerText.length; i++){
    //     newText += "<span aria-hidden='true'>";
    //     if(text.innerText[i] == ' '){
    //       newText += "&nbsp";
    //     } else {
    //       newText += text.innerText[i];
    //     }
    //     newText += "</span>";
    //   }
    //   text.innerHTML = newText;
    //   text.setAttribute("aria-label", theText);
    // });

    // gsap.from('.split span', {
    //   yPercent: 100,
    //   autoAlpha: 0,
    //   duration: 2,
    //   ease: 'circ.out',
    //   stagger: 0.1,
    //   scrollTrigger: {
    //     trigger: '.split',
    //     start: 'top center',
    //     end: '+=400',
    //     markers: true,
    //     scrub: 1,
    //   }
    // });

    // gsap.utils.toArray('.split').forEach(text => {
    //   gsap.from(text.querySelectorAll('span'), {
    //     yPercent: 100,
    //     autoAlpha: 0,
    //     duration: 1,
    //     rotation: 100,
    //     y: 100,
    //     ease: 'circ.out',
    //     stagger: {
    //       amount: 1,
    //       from: 'random'
    //     },
    //     scrollTrigger: {
    //       trigger: text,
    //       start: 'top bottom',
    //       end: '+=400',
    //       markers: true,
    //     }
    //   })
    // });

    //04. split-type 사용하기
    const targets = gsap.utils.toArray('.split');

    targets.forEach(target => {
      let splitClient = new SplitType(target, {type: 'lines, words, chars'});
      let lines = splitClient.lines;
      let words = splitClient.words;
      let chars = splitClient.chars;

      gsap.from(chars,{
        yPercent: 100,
        autoAlpha: 0,
        dyration: 1,
        rotation: 100,
        y: 100,
        ease: 'circ.out',
        stagger: {
          amount: 1,
          from: 'random'
        },
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: '+=400',
          markers: false
        }
      })
    })