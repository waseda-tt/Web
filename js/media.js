document.getElementById("simulation1").onclick = function() {
    var a = $('#simu1-1').val();
    var b = $('#simu1-2').val();
    var c = $('#simu1-3').val();
    var d = $('#simu1-4').val();

    if($.isNumeric(a)&&$.isNumeric(b)&&$.isNumeric(c)&&$.isNumeric(d)&&a>=0&&b>=0&&c>=0&&d>=0&&a<=25&&b<=25&&c<=25&&d<=25){
        var r = (a*7+b*7+c*7+d*7)*7.5+1000;
        $('#result1').html(r.toString());
    }
    else{
        $('#result1').html("エラー");
    }
    
  };

  document.getElementById("simulation2").onclick = function() {
    var a = $('#simu2-1').val();
    var b = $('#simu2-2').val();
    var c = $('#simu2-3').val();
    var d = $('#simu2-4').val();

    if($.isNumeric(a)&&$.isNumeric(b)&&$.isNumeric(c)&&$.isNumeric(d)&&a>=0&&b>=0&&c>=0&&d>=0&&a<=50&&b<=50&&c<=50&&d<=50){
        var r = (a*7+b*7+c*7+d*7)*5+3000;
        $('#result2').html(r.toString());
    }
    else{
        $('#result2').html("エラー");
    }
    
  };