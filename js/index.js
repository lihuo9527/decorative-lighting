window.onload=function(){
	var masking = get_class("masking")
	 masking.style.height = document.documentElement.clientHeight + "px"
	var mobile_nav = get_class("mobile_nav")
	 mobile_nav.style.height = document.documentElement.clientHeight + "px"
	// if(if_ie()){
	// 	//幻灯片
	// 	   	var swiper_container = get_class("swiper-container");
	// 		removeClass(swiper_container[0], "visible-sm")
	// 		removeClass(swiper_container[0], "visible-md")
	// 		removeClass(swiper_container[0], "visible-lg")
	// 		swiper_container[0].style.display="none";

	// 		var carousel_length = 0;
	// 		var timer = setInterval(carousel_right,5000);
	// 		var slide = get_class("slide_div");
	// 		slide.children[0].style.display="block";
	// 		function carousel_right(parameter){
	// 			var aa = true;
	// 		if(carousel_length==0){
	// 			slide.children[carousel_length+1].style.display="block"
	// 		}
	// 		if(carousel_length==slide.children.length-2){
	// 			carousel_length=0; 
	// 			aa = false; 
	// 			for(i=0;i<slide.children.length-1;i++){
	// 				if(i!=0){
	// 				slide.children[i].style.display="none";
	// 				}
	// 			}
	// 			return ;
	// 		}
	// 		if(carousel_length<slide.children.length && carousel_length>0){
	// 			slide.children[carousel_length+1].style.display="block"
	// 			}
	// 		if(aa==true){
	// 			carousel_length++;
	// 			}
	// 		}
	// 	//幻灯片
	// }else{
	// 		var slide = get_class("slide_div");
	// 		removeClass(slide, "visible-sm")
	// 		removeClass(slide, "visible-md")
	// 		removeClass(slide, "visible-lg")
	// 		slide.style.display="none";
	// 	}
	}
   
	function shownav() {
	var masking = get_class("masking")
        masking.style.display = "block";
	var mobile_nav = get_class("mobile_nav")
	    mobile_nav.style.right = "0";
	}
	function hiddennav(){
	var masking = get_class("masking")
        masking.style.display = "none";
	var mobile_nav = get_class("mobile_nav")
	    mobile_nav.style.right = "-100%";
	}
	function if_ie() {
			if (!!window.ActiveXObject || "ActiveXObject" in window)
			return true;
			else
			return false;
		}// 判断当前游览器是否=IE 如果是返回真 ，不是则返回假
	function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
       }  
    }
	function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
    }   
    function get_class(className){  
            var children = document.getElementsByTagName('*');  
            var elements = new Array();  
            for (var i=0; i<children.length; i++){  
            var child = children[i];  
            var classNames = child.className.split(' ');  
            for (var j=0; j<classNames.length; j++){  
            if (classNames[j] == className){elements.push(child);  break;}}}
            if(elements.length===1){
             return elements[0];
            }else{
             return elements;
            }   
           }//取classname[]返回数组