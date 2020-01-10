var isAnimated = [false,false,false,false,false,false,false,false,false];
$(window).on('load scroll', function(){

    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

  
    if(scrollPos > $('#carouselExampleIndicators').offset().top - wh&&!isAnimated[0]){
      isAnimated[0] = true
      $('#carouselExampleIndicators').velocity(
        {
            opacity: [ 1, 0 ]
        }, {
            // // Option
            duration: 2000, // アニメーション時間
            easing: 'easeInCubic', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
            begin: function(){}, // or null
            progress: null, // 進捗率
            complete: function(){}, // or null
             loop: false, // 繰り返し : or false
            delay: 0, // 開始、ループ時に遅延させる Ex.1000
            display: 'visible' // 表示・非表示 : false, 'none', 'block'
        }
     );
    }
  
        if(scrollPos > $('.title').offset().top - wh&&!isAnimated[1]){
          isAnimated[1] = true
          $('.title').velocity(
            {
                translateY: ['0','200'],
                opacity: [ 1,'easeInExpo', 0 ]
            }, {
                // // Option
                duration: 2000, // アニメーション時間
                easing: 'easeOutQuad', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
                begin: function(){}, // or null
                progress: null, // 進捗率
                complete: function(){}, // or null
                 loop: false, // 繰り返し : or false
                delay: 0, // 開始、ループ時に遅延させる Ex.1000
                display: 'visible' // 表示・非表示 : false, 'none', 'block'
            }
         );

         $('.line').velocity(
          {
              translateX: ['0','10000'],
              opacity: [ 1,'easeInExpo', 0 ]
          }, {
              // // Option
              duration: 2500, // アニメーション時間
              easing: 'easeInOutElastic', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
              begin: function(){}, // or null
              progress: null, // 進捗率
              complete: function(){}, // or null
               loop: false, // 繰り返し : or false
              delay: 0, // 開始、ループ時に遅延させる Ex.1000
              display: 'visible' // 表示・非表示 : false, 'none', 'block'
          }
       )
        }

        if(scrollPos > $('.badge').offset().top - wh&&!isAnimated[2]){
          isAnimated[2] = true
          $('.badge').velocity(
            {
                translateX: ['0','100'],
                opacity: [ 1,'easeInExpo', 0 ]
            }, {
                // // Option
                duration: 2500, // アニメーション時間
                easing: 'easeInOutElastic', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
                begin: function(){}, // or null
                progress: null, // 進捗率
                complete: function(){}, // or null
                 loop: false, // 繰り返し : or false
                delay: 0, // 開始、ループ時に遅延させる Ex.1000
                display: 'visible' // 表示・非表示 : false, 'none', 'block'
            }
         );
        }

        if(scrollPos > $('.top').offset().top - wh&&!isAnimated[3]){
          isAnimated[3] = true
          $('.top').velocity(
            {
                translateY: ['0','200'],
                opacity: [ 1,'easeInExpo', 0 ]
            }, {
                // // Option
                duration: 3000, // アニメーション時間
                easing: 'easeOutSine', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
                begin: function(){}, // or null
                progress: null, // 進捗率
                complete: function(){}, // or null
                 loop: false, // 繰り返し : or false
                delay: 0, // 開始、ループ時に遅延させる Ex.1000
                display: 'visible' // 表示・非表示 : false, 'none', 'block'
            }
         )
        }

        if(scrollPos > $('.bottom').offset().top - wh&&!isAnimated[4]){
          isAnimated[4] = true
          $('.bottom').velocity(
            {
                translateY: ['0','200'],
                opacity: [ 1,'easeInExpo', 0 ]
            }, {
                // // Option
                duration: 2000, // アニメーション時間
                easing: 'easeOutSine', // イージング : linear, swing, ease, ease-in, ease-out, ease-in-out, [200, 15]
                progress: null, // 進捗率
                 loop: false, // 繰り返し : or false
                delay: 0, // 開始、ループ時に遅延させる Ex.1000
                display: 'visible' // 表示・非表示 : false, 'none', 'block'
            }
         );
        }
        
  });