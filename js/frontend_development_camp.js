$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });

 });

// function checkBelongings() {
//    var belongingsList = []; // 選択されているか否かを判定する変数
    
//    for (var i = 0; i < document.form1.check.length; i++) {
    
//        // i番目のチェックボックスがチェックされているかを判定
//        if (document.form1.check[i].checked) {
//          belongingsList.push(document.form1.check[i].value);    
//        }
//        if (belongingsList.length === 7) {
//          document.getElementById('ok').innerText = '持ち物OK！'
//        }
//    }
// }

$(function(){
  $('input[name="check"]').on('change', function(){
    /// チェックされたvalue値を配列として取得
    var belongingsList = $('input[name="check"]:checked').map(function(){
      return $(this).val();
    }).get();
    if (belongingsList.length === 7) {
      // document.write('<img src="./images/good.png" alt="good" width=10% height=10%>')
      var ok = document.getElementById('ok');
      ok.innerHTML = '<img src="./images/good.png" alt="good" width=80px height=80px>';
   }else {
      document.getElementById('ok').innerText = ''
   };
   })
});