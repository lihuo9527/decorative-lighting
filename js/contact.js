window.onload=function(){
  var masking = get_class("masking")
	  masking.style.height = document.documentElement.clientHeight + "px"
  var mobile_nav = get_class("mobile_nav")
	  mobile_nav.style.height = document.documentElement.clientHeight + "px"
      
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