  
        $(function(){
            $('.row_show').width($('.row_show .fadeInUp').length*280);
            var index=0;
            var t=setInterval(move,2000);
            function move(){
                $(".row_show").animate({marginLeft:"-280px"},"slow",function(){
                    $('.row_show .fadeInUp').first().appendTo($(".row_show"));
                    $(".row_show").css('marginLeft',0);
                })
            }
            $(".row_show").hover(function(){
                clearInterval(t);
            },function(){
                t=setInterval(move,2000);
            })
        });
 