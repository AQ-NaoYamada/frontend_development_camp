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
   $('input[name="belongings"]').on('change', function () {
      /// チェックされたvalue値を配列として取得
      var belongingsList = $('input[name="belongings"]:checked').map(function () {
         return $(this).val();
      }).get();
      if (belongingsList.length === 7) {
         var ok = document.getElementById('ok');
         ok.innerHTML = '<img src="./images/good.png" alt="good" width=100px height=100px>';
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

// $(function() {
//    $('.contentTitle').on('inview', function(event, isInView){
//      if (isInView) {
//          $(this).addClass('left');
//      }else{
//          $(this).removeClass('left'); //elseをいれなければ、一度きりのアニメーションになる
//      }
//    });
//  });

$(function(){
 
   // モーダルウィンドウが開くときの処理    
   $(".modalOpen").click(function(){
           
       var navClass = $(this).attr("class"),
           href = $(this).attr("href");
               
           $(href).fadeIn();
       $(this).addClass("open");
       return false;
   });
    
   // モーダルウィンドウが閉じるときの処理    
   $(".modalClose").click(function(){
       $(this).parents(".modalWrap").fadeOut();
       $(".modalOpen").removeClass("open");
       return false;
   });  
       
   });

$(function() {
 
  // ①タブをクリックしたら発動
  $('.tab').click(function() {
 
    // ②クリックされたタブの順番を変数に格納
    var index = $('.tab').index(this);
 
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab').removeClass('active');
 
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
 
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.area').removeClass('show').eq(index).addClass('show');
 
  });
});
