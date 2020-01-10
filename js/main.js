$(function(){
  // リンクをクリックしたときの処理。外部リンクやページ内移動のスクロールリンクなどではフェードアウトさせたくないので少し条件を加えてる。
  $('a[href ^= "Web"]' + 'a[target != "_blank"]').click(function(){
      var url = $(this).attr('href'); // クリックされたリンクのURLを取得
      $('#js-loader').fadeIn(600);    // ローディング画面をフェードイン
      setTimeout(function(){ location.href = url; }, 800); // URLにリンクする
      return false;
  });
});

// ページのロードが終わった後の処理
$(window).on('load',function(){
$('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
});

// ページのロードが終わらなくても10秒たったら強制的に処理を実行
$(function(){ setTimeout('stopload()', 10000); });
function stopload(){
$('#js-loader').delay(300).fadeOut(400); //ローディング画面をフェードアウトさせることでメインコンテンツを表示
}


  //headerとfooterをここで追加
  $(function(){
    var name = window.location.href.split('/').pop();
    name = name.split(".")[0];
    if(name=="index"){
    name = "home";
    }
    name = "#"+name;
    
    if(window.innerWidth<=350){
      $("#nav").load("navbar.html", function(){
        document.getElementById("whatPage").style.display = "none";
        $(name).addClass("active");
      });
}
else {
  $("#nav").load("navbar.html", function(){
    document.getElementById("whatPage").style.display = "block";
    $(name).addClass("active");
    switch(name){
      case "#home"://ここにはファイル名
          $("#whatPage").html("Home")//ここには表示したいタイトル名
        break;
        case "#features":
          $("#whatPage").html("Features")
        break;
        case "#safety":
          $("#whatPage").html("Safety")
        break;
        case "#privacy_policy":
          $("#whatPage").html("PrivacyPolicy")
        break;
        case "#how_to":
          $("#whatPage").html("HowToUse")
        break;
        case "#media":
          $("#whatPage").html("Media")
        break;
        case "#waseMeshi":
          $("#whatPage").html("WaseMeshi")
        break;
        case "#reviews":
          $("#whatPage").html("Reviews")
        break;
        case "#class":
          $("#whatPage").html("Class")
        break;
        case "#professor":
          $("#whatPage").html("Professor")
        break;
  }
  });
}

$("#foot").load("footer.html");
});
