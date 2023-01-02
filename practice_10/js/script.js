$(function() {
  //idがbackの要素の中のaタグをクリックしたら
  $('#back a').on('click',function(event){
    //body要素またはhtml要素に対して実行。
    $('body, html').animate({
      //最上部まで移動
      //0.8秒かけて移動
      scrollTop:0
    }, 800);
    //aタグの機能を向こう
    event.preventDefault();
  });
});