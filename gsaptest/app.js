const time_line = new TimelineMax();
let box = document.querySelector(".box");

// 控制項目 動畫時間 初始狀態 結束狀態

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
//   .fromTo(box, 1, { opacity: "1" }, { opacity: "0", ease: Power2.easeInOut });
var fadeIn = TweenMax.fromTo(box, 3, { opacity: "0" }, { opacity: "1" });
time_line.add(fadeIn,0) //我可以在這邊 也可以直接在上面給
