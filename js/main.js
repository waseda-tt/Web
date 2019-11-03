
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
      case "#home":
          $("#whatPage").html("Home")
        break;
        case "#features":
          $("#whatPage").html("Features")
        break;
        case "#safety":
          $("#whatPage").html("Safety")
        break;
  }
  });
}

$("#foot").load("footer.html");
});
