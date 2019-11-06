$(function () {
    Show('全て',false);
         }); 

         function Push(){
           var place = $("#placeFormControlSelect option:selected").text();
           var check = $("#randomCheck").prop("checked");
           Show(place,check);
         }

        function Show(place,check){
            if(!check){
            
            }
            else{
                
            }
           //JSONデータを読み込みます
            $.getJSON("./data/wasemeshi.json", function (data) {
           //JSONの中のデータの個数を変数化し、1件以上の場合は出力します（0件の場合返り値が無いため）
                var infoCount = data.waseMeshis.length;
                //1件以上ある場合
                if (infoCount >= '1') {
                    if(!check){
                        //中を空欄にCSSで非表示にします（初期設定）
            $('div.infoList').html('');
            $('.infoList').css('display', 'none');
            $('.randomList').css('display', 'none');
                    $(data.waseMeshis).each(function () {//waseMeshisの配列で繰り返す
                        if(place==this.Place || place=="全て"){
                            $('.infoList').css('display', 'block');
                            var comment = "";
                            for(var i=0;i<this.Comment.length;i++){//Commentの配列で繰り返す
                                comment += this.Comment[i] + '<br>';
                            }                      
                            var price = Price(this.Price);
                            var recommendation = Recommendation(this.Recommendation);
                            $('<div class="card h-100 mb-4 pb-5">'+
                            '<div class="card-body">'+
                              '<div class="text-center"><h5 class="card-title"><strong>' + this.Name + '</strong></h5>'+
                              this.Place + '</div>' +
                              '<hr class="rounded" style="border:0;border-top:3px solid rgb(200, 200, 200);">'+
                              '</div>'+
                              '<div class="card-text container">' + 
                              '<div class="container mt-n3">' +//mtは調整
                              comment +
                              '</div>'+
                              '<hr style="border:0;border-top:1px solid rgb(200, 200, 200);">'+
                              '<div class="container">' +
                              price +
                              '</div>'+
                              '<hr style="border:0;border-top:1px solid rgb(200, 200, 200);">'+
                              '<div class="container">' +
                              recommendation + 
                              '</div>'+
                              '</div>'+
                            '</div>').appendTo('div.infoList');
                        }
                    })
                }
                else{
                    $('div.randomList').html('');
                    $('.infoList').css('display', 'none'); 
                    var count = 0;
                    $(data.waseMeshis).each(function () {//waseMeshisの配列で繰り返す
                        if(place==this.Place || place=="全て"){
                            count++;
                        }
                    })
                    
                    var random = Math.floor(Math.random() * count);//randomは0~count-1?
                    var increment = 0;
                    for(var i=0;i<data.waseMeshis.length;i++){
                        if(place==data.waseMeshis[i].Place || place=="全て"){ 
                            if(random==increment){
                            $('.randomList').css('display', 'block');
                            var comment = "";
                            for(var k=0;k<data.waseMeshis[i].Comment.length;k++){//Commentの配列で繰り返す
                                comment += data.waseMeshis[i].Comment[k] + '<br>';
                            }                      
                            var price = Price(data.waseMeshis[i].Price);
                            var recommendation = Recommendation(data.waseMeshis[i].Recommendation);
                            $('<div class="card h-100 mb-4 pb-5 waseMeshiRandom">'+
                            '<div class="card-body">'+
                              '<div class="text-center"><h5 class="card-title"><strong>' + data.waseMeshis[i].Name + '</strong></h5>'+
                              data.waseMeshis[i].Place + '</div>' +
                              '<hr class="rounded" style="border:0;border-top:3px solid rgb(200, 200, 200);">'+
                              '</div>'+
                              '<div class="card-text container">' + 
                              '<div class="container mt-n3">' +//mtは調整
                              comment +
                              '</div>'+
                              '<hr style="border:0;border-top:1px solid rgb(200, 200, 200);">'+
                              '<div class="container">' +
                              price +
                              '</div>'+
                              '<hr style="border:0;border-top:1px solid rgb(200, 200, 200);">'+
                              '<div class="container">' +
                              recommendation + 
                              '</div>'+
                              '</div>'+
                            '</div>').appendTo('div.randomList');

                            break;//一回でおわり
                        }
                        increment++;
                    }
                    }

                    $('div.infoList').html('');
                }
            }
            })
                   }

        function Price(jsonPrice) {
            var price_1 = 0;//個数
            var price_2 = 0;
            var price_3 = 0;
            for(var i=0;i<jsonPrice.length;i++){//Priceの配列で繰り返す
                switch(jsonPrice[i]){
                    case 1:
                    price_1++;
                        break;
                        
                        case 2:
                                price_2++;
                        break;
                        
                        case 3:
                                price_3++;
                        break;
                }
            }
            price_1 = price_1/jsonPrice.length*100;//安い
            price_2 = price_2/jsonPrice.length*100;
            price_3 = price_3/jsonPrice.length*100;//高い
            var price = 'リッチ'+'<div class="progress">'+
            '<div class="progress-bar bg-warning" role="progressbar" style="width:'+price_3+'%" aria-valuenow="'+price_3+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(price_3*jsonPrice.length/100) + '件'+'</div>'+
            '</div>'+
          '普通'+
          '<div class="progress">'+
            '<div class="progress-bar bg-info" role="progressbar" style="width: '+price_2+'%" aria-valuenow="'+price_2+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(price_2*jsonPrice.length/100) + '件'+'</div>'+
            '</div>'+
          '安い'+
          '<div class="progress">'+
            '<div class="progress-bar bg-success" role="progressbar" style="width: '+price_1+'%" aria-valuenow="'+price_1+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(price_1*jsonPrice.length/100) + '件'+'</div>'+
            '</div>';
            return price;
          }

          function Recommendation(jsonRecommendation) {
            var recommendation_1 = 0;
            var recommendation_2 = 0;
            var recommendation_3 = 0;
            var recommendation_4 = 0;
            var recommendation_5 = 0;
            for(var i=0;i<jsonRecommendation.length;i++){//Priceの配列で繰り返す
                switch(jsonRecommendation[i]){
                    case 1:
                            recommendation_1++;
                        break;
                        
                        case 2:
                                recommendation_2++;
                        break;
                        
                        case 3:
                                recommendation_3++;
                        break;
                        case 4:
                                recommendation_4++;
                        break;
                        case 5:
                                recommendation_5++;
                        break;
                }
            }
            recommendation_1 = recommendation_1/jsonRecommendation.length*100;//悪い
            recommendation_2 = recommendation_2/jsonRecommendation.length*100;
            recommendation_3 = recommendation_3/jsonRecommendation.length*100;
            recommendation_4 = recommendation_4/jsonRecommendation.length*100;
            recommendation_5 = recommendation_5/jsonRecommendation.length*100;//良い
            var recommendation = 'めっちゃいい'+'<div class="progress">'+
            '<div class="progress-bar bg-primary" role="progressbar" style="width:'+recommendation_5+'%" aria-valuenow="'+recommendation_5+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(recommendation_5*jsonRecommendation.length/100) + '件'+'</div>'+         
            '</div>'+
          'おすすめ'+
          '<div class="progress">'+
            '<div class="progress-bar bg-success" role="progressbar" style="width: '+recommendation_4+'%" aria-valuenow="'+recommendation_4+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(recommendation_4*jsonRecommendation.length/100) + '件'+'</div>'+
            '</div>'+
          '普通'+
          '<div class="progress">'+
            '<div class="progress-bar bg-info" role="progressbar" style="width: '+recommendation_3+'%" aria-valuenow="'+recommendation_3+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(recommendation_3*jsonRecommendation.length/100) + '件'+'</div>'+            
            '</div>'+
            'うーん'+'<div class="progress">'+
            '<div class="progress-bar bg-secondary" role="progressbar" style="width:'+recommendation_2+'%" aria-valuenow="'+recommendation_2+'" aria-valuemin="0" aria-valuemax="100">'+ Math.round(recommendation_2*jsonRecommendation.length/100) + '件'+'</div>'+           
            '</div>'+
            '。。。。。'+'<div class="progress">'+
            '<div class="progress-bar bg-dark" role="progressbar" style="width:'+recommendation_1+'%" aria-valuenow="'+recommendation_1+'" aria-valuemin="0" aria-valuemax="100">'+Math.round(recommendation_1*jsonRecommendation.length/100) + '件'+'</div>'+
            '</div>'
            return recommendation;
          }