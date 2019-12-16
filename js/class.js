$(function () {
    $("input[name=what]").val(["0"]);
    $("input[name=radio]").val(["1"]);
    Show("全て","0","1");
         }); 

         //ボタンを押した時
         function Push(){
           var department = $("#placeFormControlSelect option:selected").text();
           var whatSort = $("input[name=what]:checked").val();
           var radio = $("input[name=radio]:checked").val();
           Show(department,whatSort,radio);
         }


        function Show(department,whatSort,radio){
           //JSONデータを読み込みます
            $.getJSON("./data/class.json", function (data) {



                
           //JSONの中のデータの個数を変数化し、1件以上の場合は出力します（0件の場合返り値が無いため）
                var infoCount = data.departments.length;
                //1件以上ある場合
                if (infoCount >= '1') {

                        //中を空欄にCSSで非表示にします（初期設定）
            $('div.infoList').html('');
            $('.infoList').css('display', 'none');
            var cardCount=0;
                    $(data.departments).each(function () {//departmentsの配列で繰り返す
                        if(this.Classes.length>0){
                        if((department==this.Classes[0].department) || department=='全て'){
                            
                            if(whatSort==="0"){
                                this.Classes.sort(function(a, b) {
                                    if (a.review.content > b.review.content) {
                                      return 1*radio;
                                    } else {
                                      return -1*radio;
                                    }
                                  })
                            }
                            else if(whatSort==="1"){
                                this.Classes.sort(function(a, b) {
                                    if (a.review.easy > b.review.easy) {
                                      return 1*radio;
                                    } else {
                                      return -1*radio;
                                    }
                                  })
                            }
                            else if(whatSort==="2"){
                                this.Classes.sort(function(a, b) {
                                    if (a.review.report > b.review.report) {
                                      return 1*radio;
                                    } else {
                                      return -1*radio;
                                    }
                                  })
                            }

                            cardCount++;
                            $('.infoList').css('display', 'block');
                            for(var i=0;i<this.Classes.length;i++){
                           var content = Content(this.Classes[i].reviews);        
                            var easy = Easy(this.Classes[i].reviews);
                            var report = Report(this.Classes[i].reviews);

                            $('<div class="card h-100 mb-4 pb-5">'+
                            '<div class="card-body">'+
                              '<div class="text-center"><h5 class="card-title"><strong>' + this.Classes[i].name + '</strong></h5>'+
                              this.Classes[i].department + '</div>' +
                              '<hr class="rounded" style="border:0;border-top:3px solid rgb(200, 200, 200);">'+
                              '</div>'+
                              '<div class="card-text container">' + 
                              '<div class="container">' +
                              content +
                              '</div>'+
                              '<hr style="border:0;border-top:1px solid rgb(200, 200, 200);">'+
                              '<div class="container">' +
                              easy +
                              '</div>'+
                              '<hr style="border:0;border-top:1px solid rgb(200, 200, 200);">'+
                              '<div class="container">' +
                              report + 
                              '</div>'+
                              '</div>'+
                            '</div>').appendTo('div.infoList');
                            }
                        }
                    }
                        
                    })
                    if(cardCount=='0'){//一件もなかった時
                      $('.infoList').css('display', 'block');
                      $('<div class="card h-100 mb-4 pb-5">'+
                            '<div class="card-body">'+
                              '<div class="text-center"><h5 class="card-title"><strong>' + '見つかりませんでした' + '</strong></h5>'+
                              '</div>' +
                              '<hr class="rounded" style="border:0;border-top:3px solid rgb(200, 200, 200);">'+
                              '</div>'+
                              '<div class="card-text container">' + 
                              '<div class="container mt-n3">' +//mtは調整
                              "是非あなたの口コミをお待ちしています!!" +
                              '</div>'+
                              '</div>'+
                            '</div>').appendTo('div.infoList');
                    }
            }
            })
                   }

        function Content(jsonContents) {
            var content = 0;//個数
            for(var i=0;i<jsonContents.length;i++){//Priceの配列で繰り返す
                switch(jsonContents[i].content){
                    case 1:
                    content++;
                        break;
                        
                        case 2:
                                content+=2;
                        break;
                        
                        case 3:
                                content+=3;
                        break;
                        case 4:
                                content+=4;
                        break;
                        case 5:
                                content+=5;
                        break;
                }
            }
            content = content/(jsonContents.length*5)*100;//安い
            var result = '内容:'+Math.round(content/100*5)+'<div class="progress">'+
            '<div class="progress-bar bg-warning" role="progressbar" style="width:'+content+'%" aria-valuenow="'+content+'" aria-valuemin="0" aria-valuemax="5">'+ jsonContents.length + '件'+'</div>'+
            '</div>'
            return result;
          }

          function Easy(jsonEasies) {
            var easy = 0;
            for(var i=0;i<jsonEasies.length;i++){//Priceの配列で繰り返す
                switch(jsonEasies[i].easy){
                    case 1:
                            easy++;
                        break;
                        
                        case 2:
                                easy+=2;
                        break;
                        
                        case 3:
                                easy+=3;
                        break;
                        case 4:
                                easy+=4;
                        break;
                        case 5:
                                easy+=5;
                        break;
                }
            }
            easy = easy/(jsonEasies.length*5)*100;
            var result = '楽単度:'+Math.round(easy/100*5)+'<div class="progress">'+
            '<div class="progress-bar bg-warning" role="progressbar" style="width:'+easy+'%" aria-valuenow="'+easy+'" aria-valuemin="0" aria-valuemax="5">'+ jsonEasies.length + '件'+'</div>'+
            '</div>'
            return result;
          }

          function Report(jsonReports) {
            var report = 0;
            for(var i=0;i<jsonReports.length;i++){//Priceの配列で繰り返す
                switch(jsonReports[i].report){
                    case 1:
                            report++;
                        break;
                        
                        case 2:
                                report+=2;
                        break;
                        
                        case 3:
                               report+=3;
                        break;
                        case 4:
                                report+=4;
                        break;
                        case 5:
                                report+=5;
                        break;
                }
            }
           report = report/(jsonReports.length*5)*100;//悪い
           var result = 'レポート量:'+Math.round(report/100*5)+'<div class="progress">'+
           '<div class="progress-bar bg-warning" role="progressbar" style="width:'+report+'%" aria-valuenow="'+report+'" aria-valuemin="0" aria-valuemax="5">'+ jsonReports.length + '件'+'</div>'+
           '</div>'
            return result;
          }