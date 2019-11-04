$(window).on('load scroll', function(){

    var elem1 = $('.eachContent1');
    var elem2 = $('.eachContent2');
    var elem3 = $('.eachContent3');
    var elem4 = $('.eachContent4');
  
    elem1.each(function () {
  
      var isPlay = 'play-1';
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > elemOffset - wh*1.2){
        $(this).addClass(isPlay);
      }
    });

    elem2.each(function () {
  
        var isPlay = 'play-2';
        var elemOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > elemOffset - wh*1.2){
          $(this).addClass(isPlay);
        }
      });

      elem3.each(function () {
  
        var isPlay = 'play-3';
        var elemOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > elemOffset - wh*1.2){
          $(this).addClass(isPlay);
        }
      });

      elem4.each(function () {
  
        var isPlay = 'play-4';
        var elemOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > elemOffset - wh*1.2){
          $(this).addClass(isPlay);
        }
      });
  });