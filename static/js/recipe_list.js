gsap.registerPlugin(ScrollTrigger);

var RecipeList_Images = document.querySelector('.Ibox');
var images = gsap.utils.toArray('img');
var centerSpans = images.map(img => {
      var span = document.createElement('span');
      RecipeList_Images.appendChild(span);
      return span;
    });
var snapPositions = [];

gsap.to(RecipeList_Images, {
  x: () => - (RecipeList_Images.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: RecipeList_Images,
    start: 0,
    pin: true, /*스크롤시 가로로만 움직이고 세로로는 스크롤 되지 않도록 고정*/
    scrub: 1.5,/*되감기 true값도 좋지만 수치를 넣으면 더 부드러움. 스크롤이 요소 이전으로 돌아가면 애니메이션 역시 되돌아가는 기능을 제공함*/
    onRefresh: self => {
      var viewportWidth = document.documentElement.clientWidth;
      images.forEach((image, i)=> {
        var centerX = image.offsetLeft + image.offsetWidth / 2;
        centerSpans[i].style.left = centerX + "px";
        snapPositions[i] = (centerX - viewportWidth / 2) / (RecipeList_Images.scrollWidth - viewportWidth);
      });
    },
    snap: value => gsap.utils.snap(snapPositions, value),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: self => `+=${RecipeList_Images.scrollWidth - document.documentElement.clientWidth}`,
    invalidateOnRefresh: true,
  }
});

$(document).ready(function(){
  $("img:first").mouseenter(function(){
    $("#img1-caption").delay(500).slideDown("slow");
  });
  $("img:first").mouseleave(function(){
    $("#img1-caption").delay(1000).slideUp("slow");
  });
});

$(document).ready(function(){
  $("img:eq(1)").mouseenter(function(){
    $("#img2-caption").delay(500).slideDown("slow");
  });
  $("img:eq(1)").mouseleave(function(){
    $("#img2-caption").delay(1000).slideUp("slow");
  });
});

$(document).ready(function(){
  $("img:eq(2)").mouseenter(function(){
    $("#img3-caption").delay(500).slideDown("slow");
  });
  $("img:eq(2)").mouseleave(function(){
    $("#img3-caption").delay(1000).slideUp("slow");
  });
});
$(document).ready(function(){
  $("img:eq(3)").mouseenter(function(){
    $("#img4-caption").delay(500).slideDown("slow");
  });
  $("img:eq(3)").mouseleave(function(){
    $("#img4-caption").delay(1000).slideUp("slow");
  });
});
$(document).ready(function(){
  $("img:eq(4)").mouseenter(function(){
    $("#img5-caption").delay(500).slideDown("slow");
  });
  $("img:eq(4)").mouseleave(function(){
    $("#img5-caption").delay(1000).slideUp("slow");
  });
});
