$(function () {
    Show("全て","All");
         }); 

         //ボタンを押した時
         function Push(){
           var department = $("#placeFormControlSelect option:selected").text();
           var key = $("#inputKeyword").val();
           if(key==null||key==""){
             key="All";
           }
           Show(department,key);
         }


        function Show(department,key){
           //JSONデータを読み込みます
            $.getJSON("./data/professor.json", function (data) {
           //JSONの中のデータの個数を変数化し、1件以上の場合は出力します（0件の場合返り値が無いため）
                var infoCount = data.departments.length;
                //1件以上ある場合
                if (infoCount >= '1') {
                        //中を空欄にCSSで非表示にします（初期設定）
            $('div.infoList').html('');
            $('.infoList').css('display', 'none');
            var cardCount=0;
                    $(data.departments).each(function () {//departmentsの配列で繰り返す
                        if(this.Teachers.length>0){
                            for(var i=0;i<this.Teachers.length;i++){
                        if((department==this.Teachers[i].department) || department=='全て'){
                        
                            if(this.Teachers[i].name.match(key)||key=="All"){//キーワードが含まれている時、もしくはキーワードが指定されていない時
                            cardCount++;
                            $('.infoList').css('display', 'block');
                                var comment = "";
                                comment +=  '<ul class="ml-n3">';
                                for(var k=0;k<this.Teachers[i].comments.length;k++){//Commentの配列で繰り返す
                                    comment += '<li>'+this.Teachers[i].comments[k] +'</li>';
                                }       
                                comment +=  '</ul>';
                                const h = Math.random() * 360;
                            $('<div class="card h-100 mb-4 pb-5">'+
                            '<div class="card-body">'+
                              '<div class="text-center"><h5 class="card-title"><strong>' + this.Teachers[i].name + '</strong></h5>'+
                              this.Teachers[i].department + '</div>' +
                              '<hr class="rounded" style="border:0;border-top:3px solid hsl('+h+', 80%, 60%);">'+
                              '</div>'+
                              '<div class="card-text container">' + 
                              '<div class="container">' +
                              comment +
                              '</div>'+
                              '</div>'+
                            '</div>').appendTo('div.infoList');
                            }
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
