// 增加控制的華感
var dat = new dat.GUI();
var obj = {
  progress: 0,
};
// listen()是雙向的監聽 這樣暫停或是繼續進行才會同步地跟上
var pcontroller = dat.add(obj, "progress", 0, 1, 0.001).listen();
// 在改變的時候取得值並暫停
pcontroller.onChange((value) => {
  time_line.progress(value);
  time_line.pause();
});

const time_line = new TimelineMax({
  onUpdate() {
    obj.progress = time_line.progress();
  },
});
let box = document.querySelector(".box");

// 控制項目 動畫時間 初始狀態 結束狀態 fromto的控制

time_line
  .to(box, 1, { rotation: 360 })
  .to(box, 1, { borderRadius: "50%" })
  .to(box, 1, { backgroundColor: "red" })
  .fromTo(
    box,
    1,
    { scale: "1" },
    { scale: "2", ease: "slow(0.7, 0.7, false)" }
  );
var fadeIn = TweenMax.fromTo(box, 3, { opacity: "0" }, { opacity: "1" });
time_line.add(fadeIn, 0); //我可以在這邊 也可以直接在上面給
window.addEventListener("scroll", function () {
  // 獲取目前的高度與頁面高度 要-window.innerHeight 反則會發現怎麼都顯示不了1
  let current = window.scrollY;
  let pageHeight = document.body.clientHeight - window.innerHeight;
  let progress = current / pageHeight;
  time_line.progress(progress);
  time_line.pause();
});
