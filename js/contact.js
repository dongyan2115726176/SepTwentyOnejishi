$(function(){
	class Contact{
		constructor(){
			var self = this;
			this.init();
			this.bind();
		}
		init(){
			this.one();
			this.two();
		}
		bind(){
			$(".btn").on("click",function(){
				$(this).children("a").addClass("cur").end().siblings().children("a").removeClass("cur");
			})
		}
		one(){
			$.get("json/site.json",function(data){
				var data = typeof data == 'object' ? data : eval('('+data+')');
				var list = data.data;
				console.log(list[0]);
//				var tpl = [
//					'<div><div>'
//				]
				for(var i = 0; i < list.length; i++){
					$('#mytmpl').tmpl(list[i]).appendTo('.map1');
				}	
			})
		}
		two(){
			var map = new BMap.Map("allmap");
			var point = new BMap.Point(116.063506,39.687933);
			map.centerAndZoom(point,15);
			
			window.setTimeout(function(){
				var conver = new BMap.Convertor();
				conver.translate(new Array(point),1,5,function(data){
					console.log(data);
					if(data.status === 0){
			function addMarker(point, index){  // 创建图标对象   
			    var myIcon = new BMap.Icon("img/contact/dw2.png", new BMap.Size(23, 25), {    
			        // 指定定位位置。   
			        // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
			        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
			        // 图标中央下端的尖角位置。    
			        anchor: new BMap.Size(10, 25),    
			        // 设置图片偏移。   
			        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
			        // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
			        imageOffset: new BMap.Size(-5, 0 - index * 3)   // 设置图片偏移    
			    });      
			    // 创建标注对象并添加到地图   
			    var marker = new BMap.Marker(point, {icon: myIcon});    
			    map.addOverlay(marker);    
			}    
			addMarker(data.points[0],1);						
									
									
			var opts = {    
			    width : 250,     // 信息窗口宽度    
			    height: 100,     // 信息窗口高度    
			    title : "Hello"  // 信息窗口标题   
			}    
			var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象    
			map.openInfoWindow(infoWindow, map.getCenter(data.points[0]));					
									
									
									
									
									map.setCenter(data.points[0]);	
									var marker = new BMap.Marker(data.points[0]);
									map.addOverlay(marker);
									marker.enableDragging();    
			//						marker.addEventListener("dragend", function(e){    
			//						    alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
			//						}) 
									var polyline = new BMap.Polyline([
			//							console.log(data.points[0]),
									    new BMap.Point(data.points[0].lng,data.points[0].lat),
									    new BMap.Point(0,0)
									    ],
									    {strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5}
									    );
									map.addOverlay(polyline);
									
			
								}					
							})
							 
						},2000);
						
						//地图添加控件
			//			添加缩放平移空间
						map.addControl(new BMap.NavigationControl());
						//添加比例尺控件
						map.addControl(new BMap.ScaleControl());
						//添加缩略图控件
						map.addControl(new BMap.OverviewMapControl());
						//添加地图卫星控件
						map.addControl(new BMap.MapTypeControl());
			
			
		}
	}
	
	var contact = new Contact();
})
