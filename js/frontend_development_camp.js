$(window).on('load', function () {
   firstFunction();
});

var firstFunction = function () {
   setTimeout(function () {
      $(".jscLoadingBeforeWrap").addClass("dn");
      $(".jscLoadingAfterWrap").removeClass("dn");
   }, 1000);
   setTimeout(function () {
      $(".jscLoadingAfterWrap").addClass("dn");
      $(".jscWrap").removeClass("dn");
   }, 2400);
}


$(function () {
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function () {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href = $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
   });

});

$(function () {
   $('input[name="check"]').on('change', function () {
      /// チェックされたvalue値を配列として取得
      var belongingsList = $('input[name="check"]:checked').map(function () {
         return $(this).val();
      }).get();
      if (belongingsList.length === 7) {
         var ok = document.getElementById('ok');
         ok.innerHTML = '<img src="./images/good.png" alt="good" width=80px height=80px>';
      } else {
         document.getElementById('ok').innerText = ''
      };
   })
});


$(function() {
   var appear = false;
   var pagetop = $('#page_top');
   $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
       if (appear == false) {
         appear = true;
         pagetop.stop().animate({
           'bottom': '50px' //下から50pxの位置に
         }, 300); //0.3秒かけて現れる
       }
     } else {
       if (appear) {
         appear = false;
         pagetop.stop().animate({
           'bottom': '-50px' //下から-50pxの位置に
         }, 300); //0.3秒かけて隠れる
       }
     }
   });
   pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
     return false;
   });
 });