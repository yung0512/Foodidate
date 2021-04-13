
/*
$('.js-loop').infiniteScroll({
  // options
  path: '.pagination__next',
  append: '.people',
  history: false,
});

var infScroll = new InfiniteScroll( ".js-loop", {
    path: function() {
        // 頁面路徑
        if ( this.loadCount < 2 ) {
            // 只讀取前兩頁資料
            var nextIndex = this.loadCount + 2; // 2
            return "page" + nextIndex + ".html"; // page2.html
        }
    },
    append: ".people", // 匯入物件類別
    //status: ".scroller-status"  捲軸狀態類別
})
*/

$(document).ready(function () {
  'use strict';
  document.getElementById('p4').scrollIntoView({behavior: 'auto', block: 'center',inline:'center'})
  //let view = $(window).height() > $(window).width() ? 'higher':'wider'
  //console.log(view);
  
  var show=0;
  
  //for(let i=1; i<8;i++){
    //ppl = $('#p' + j);
    //ppl.hover(function(){     
    $('.people').hover(function(e){
      for(var i=1; i<8;i++){
        var ppl = $('#p' + i);
        if(ppl.is(e.target) && show===0)ppl.css("transform","scale(1.1)");
      }},function(e){
        for(var i=1; i<8;i++){
          var ppl = $('#p' + i);
          if(ppl.is(e.target) && show===0)ppl.css("transform","scale(1)");
        }
      });
  //}
  
  
  for(let i=1; i<8;i++){
    $(document).mouseup(function(e){ // this is called when mouse releases
      var point = $("#dot" + i);
      var ppl = $('#p' + i);
      if(point.is(e.target)){
        document.getElementById('p' + i).scrollIntoView({duration: 'slow',behavior: 'smooth', block: 'center',inline:'center'});
      }
      if(ppl.is(e.target) && show === 0){
          show=i;
          ppl.transition('horizontal flip');
          ppl.css("transform","scale(1.7)");
          ppl.transition('horizontal flip');

          $( ".dots" ).hide();
          $( "#aboutUs" ).hide();
          if(i===1)ppl.css('background', "url('../src/ａｂｏｕｔ　ｕｓ-09.png') no-repeat top / contain");
          else{ppl.css('background', "url('../src/ａｂｏｕｔ　ｕｓ-1"+(i-2)+".png') no-repeat top / contain");};
        }

      //if(!$('.wrapper').is(e.target) && $('.wrapper').has(e.target).length === 0){
      if(!ppl.is(e.target) && show === i){
          show = 0;
          $( ".dots" ).show();
          $( "#aboutUs" ).show();
          ppl.css('background', "url('../src/ａｂｏｕｔ　ｕｓ-0"+(i+1)+".png') no-repeat top / contain");
          ppl.css("transform","scale(1)");
      }
    });
  }
  
});

