
    function fenFn() {
        this.init();
        this.bindEvent();
    }
    fenFn.prototype = {

        init:function () {
            var self = this;
            $.get("json/service-example.json",function (data) {
                var dataobj = typeof data == 'object'?data:eval("("+data+")");
                var templateString1 = $("#template").html();
                for(var i = 0;i<dataobj.datas.length;i++){
                    if(i<5){
                        var DomString = templateFn(templateString1,dataobj.datas[i]);
                        var dataHtml = $(".dmy_jinrong").append(DomString);
                    }else{
                        var DomString = templateFn(templateString1,dataobj.datas[i]);
                        var dataHtml = $(".dmy_rest").append(DomString);
                    }
                }
                function templateFn(templateString,data){
                    return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
                        return data[$1];
                    });
                }
                $(".dmy_num").on("click",function () {
                    $(this).css({
                        "background":"#0086d1",
                        "color":"#fff"
                    }).siblings().css({
                        "background":"#fff",
                        "color":"#333"
                    })
                    var index = $(this).index();
                    $(".dmy_repeat").eq(index).css("display","block").siblings('.dmy_repeat').css("display","none");
                })
            })
            $.get("json/dmy_nengyuan.json",function (data) {
                var dataobj = typeof data == 'object'?data:eval("("+data+")");
                var templateString1 = $("#template").html();
                for(var i = 0;i<dataobj.data.length;i++){
                    var DomString = templateFn(templateString1,dataobj.data[i]);
                    var dataHtml = $(".dmy_nengyuan").append(DomString);
                }
                function templateFn(templateString,data){
                    return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
                        return data[$1];
                    });
                }
            })
            $.get("json/dmy_web.json",function (data) {
                var dataobj = typeof data == 'object'?data:eval("("+data+")");
                var templateString1 = $("#template").html();
                for(var i = 0;i<dataobj.data.length;i++){
                    var DomString = templateFn(templateString1,dataobj.data[i]);
                    var dataHtml = $(".dmy_web").append(DomString);
                }
                function templateFn(templateString,data){
                    return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
                        return data[$1];
                    });
                }
            })
            $.get("json/dmy_qita.json",function (data) {
                var dataobj = typeof data == 'object'?data:eval("("+data+")");
                var templateString1 = $("#template").html();
                for(var i = 0;i<dataobj.data.length;i++){
                    var DomString = templateFn(templateString1,dataobj.data[i]);
                    var dataHtml = $(".dmy_qita").append(DomString);
                }
                function templateFn(templateString,data){
                    return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
                        return data[$1];
                    });
                }
            })
            this.common($(".dmy_jinrongs").eq(0));

        },
        bindEvent:function () {
            var self = this;
            $(".dmy_tab li a").on("click",function () {
                var index = $(this).parent().index();
                $(this).addClass('on').parent().siblings().children().removeClass('on');
                $(".dmy_tabs ul").eq(index).css("display","block").siblings('.dmy_jinrongs').css("display","none");
                self.common($('.dmy_jinrongs').eq(index));
            })
        },
        common:function (eles) {
            var a,b,c;
            a=$(window).height();
            $(window).scroll(function(){
                var b=$(this).scrollTop();
                eles.children().each(function(){
                    c=$(this).offset().top;
                    if(a+b>c){
                        $(this).addClass("move");
                    }
                    else{
                        $(this).removeClass("move");
                    }
                });
            });
        }
    }
