
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
  }
  });
}

$("#foot").load("footer.html");
});
