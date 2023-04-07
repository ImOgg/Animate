// 跑馬燈
// gsap.to(".loop", {
//   xPercent: "-50", //僅往左50
//   ease: "none", //速度為none才不會有速度差
//   duration: 10,
//   repeat: -1, //無限循環
// });

// 基礎控制動畫
// const timeline = gsap.timeline()

// timeline.fromTo('.box', { x: -100, duration: 1 },{ x: 100, duration: 1 })
// timeline.fromTo('.box', { y: 0, duration: 1 },{ y: 100, duration: 1 })

// 加入scrollTrigger
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box", // 決定scrolltrigger要以哪一個元素作為觸發基準點
//     markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
//     start: 'top 35%', // 決定動畫開始點的位置
//     end: 'top 1%', // 決定動畫結束點的位置
//     scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
//   },
// })
// // 撰寫動畫屬性的感覺其實類似於在寫一般CSS
// tl.to('.box', {
//   top:"0%", // 距外層容器top 0px
//   left: '50%', // 距外層容器left 50%
//   xPercent: '-50', // translate(-50%, 0)
//   duration: 10, // 動畫持續時間之比例
//   position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
// })
// .to('.box', {
//   top:"60%", // 距外層容器top 0px
//   left: '50%', // 距外層容器left 50%
//   YPercent: '50', // translate(-50%, 0)
//   duration: 10, // 動畫持續時間之比例
//   position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
// })

// const box2 = document.querySelector(".box2")

// ScrollTrigger.create({
//     //以box2作為觸發時機
//     trigger: box2,
//     markers: true,

//     //向下滾動進入start點時觸發callback
//     onEnter: function () {
//         animated(box2);
//     },

//     //向下滾動超過end點時觸發callback
//     onLeave: function () {
//         hide(box2);
//     },

//     //向上滾動超過end點時觸發（回滾時觸發）callback
//     onEnterBack: function () {
//         animated(box2);
//     },

// });

// function animated(element) {
//     let x = -100;
//     //設定元素初始值
//     element.style.transform = `translate(${x}px, 0px)`;
//     gsap.fromTo(
//         element,
//         { x: x, y: 0, opacity: 0, visibility: "hidden" },
//         {
//             duration: 1,
//             delay: 0.2,
//             x: 0,
//             y: 0,
//             visibility: "visible",
//             opacity: "1",
//             ease: "expo", // 元素的運動速度變化
//             overwrite: "auto",
//         }
//     );
// }
// function hide(element) {
//     gsap.set(element, { opacity: 0, visibility: "hidden" });
// }

// //   打字效果
// gsap.to(".typing1", {
//     text: "這裡是第一段", //text屬性將自動為DOM元素嵌入我們所輸入的文字
//     duration: 1.5,
//     scrollTrigger: {
//         trigger: ".typing1",
//         toggleActions: "play pause resume reset", //見備註
//     },
// });
// //   使_持續閃爍
// gsap.fromTo(
//     ".cursor",
//     0,
//     {
//         visibility: "hidden",
//     },
//     {
//         visibility: "visible",
//         repeat: -1,
//         yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
//         repeatDelay: 0.3, // 下一次repeat的delay時間
//     }
// );

const test = gsap.timeline({
      scrollTrigger: {
        trigger: ".test", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: 'top 35%', // 決定動畫開始點的位置
        end: 'top 1%', // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      },
    })

// 撰寫動畫屬性的感覺其實類似於在寫一般CSSf

test.to('.test', {
      top: 0, // 距外層容器top 0px
      left: '100', // 距外層容器left 50%
      xPercent: '-50', // translate(-50%, 0)
      duration: 10, // 動畫持續時間之比例
      position: 'absolute', // position: 'absolute'，絕對位置才能使用left, right...等
    })