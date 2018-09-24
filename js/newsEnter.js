
function fenFn() {
    this.init();
}
fenFn.prototype = {

    init:function () {
        var self = this;
        $.get("json/service-example.json",function (data) {
            var dataobj = typeof data == 'object'?data:eval("("+data+")");
            var templateString1 = $("#template").html();
            for(var i = 0;i<dataobj.datas.length;i++){
                    var DomString = templateFn(templateString1,dataobj.datas[i]);
                    var dataHtml = $(".dmy_jinrong").append(DomString);

            }
            function templateFn(templateString,data){
                return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
                    return data[$1];
                });
            }

        })
        this.common($(".dmy_jinrongs").eq(0));

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
