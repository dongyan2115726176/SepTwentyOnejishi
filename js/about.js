//面向对象切换
function TabFn(id){
          	var that=this;
          	this.box=document.getElementById(id);
          	this.spans=this.box.getElementsByTagName('span');
          	this.divs=this.box.getElementsByTagName('div');
          	this.init=function(){
          		for(var i=0;i<this.spans.length;i++){
          			this.spans[i].index=i;
          			this.spans[i].onclick=this.clickFn;
          		}
          	}
          	
          	this.clickFn=function(){
          		//this tab对象
               for(var i=0;i<that.spans.length;i++){
               that.spans[i].className="";
               that.divs[i].className="";
               }
               this.className="select";
               that.divs[this.index].className="active";
          	}
          }
          var tab=new TabFn("box");
          tab.init();