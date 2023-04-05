## TimelineMax介紹
```
let timeline = new TimelineMax();
let box = document.querySelector("./box");
timeline.set(""); //即時的設定
timeline.to("", duration, {}); //變化到指定狀態
timeline.from("", duration, {}); //從指定狀態變化到現在
timeline.fromTo("", duration, {}); //從指定變化到現在
timeline.staggerTo("", duration, {}, delay); //一一變化
timeline.staggerFrom("", duration, {}, delay);
```
## TimelineMax 裡的事件
```
let timeline = new TimelineMax({
    onUpdate:function(){},//每次更新
    onRepeat:function(){},//每次重複
    onComplete:function(){}//每次播放完畢
});
timeline.add(function(){},時間) //安插呼叫自訂時間
```
## 直接在指定的時間放入想要一起執行的動畫
var fadeIn = TweenMax.fromTo(box, 3, { opacity: "0" }, { opacity: "1" });
time_line.add(fadeIn,0) //我可以在這邊 也可以直接在上面給


1. `ease`需要設為`”none”`，動畫輪播才不會有速度差
2. `xPercent: "-50"`代表每次僅往左50%，讓視覺看起來像是在無限循環，因為下一個動畫又會繼續補上
3. `repeat: -1`，代表動畫無限循環
```
time_line
.to(".box", {
  xPercent: "-50", 
  ease: "none",
  duration: 10,
  repeat: -1,
});
```
### 例如我們需要下一個動作與上一個動作時間同時作動，只需多添加一個"<"，就可以順利移動時間段並使之齊平
```
time_line
.to(box,{x: 500, duration:5})
time_line
.to(box,{y: 500, duration:5}, "<")
```