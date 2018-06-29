window.onload=function(){
  var masking = get_class("masking")
	  masking.style.height = document.documentElement.clientHeight + "px"
  var mobile_nav = get_class("mobile_nav")
	  mobile_nav.style.height = document.documentElement.clientHeight + "px"
  var tab = location.href.split("?")[1] ;

  console.log(tab)
  if(tab =="profile"){
    document.getElementById("profile").style.display="block";
  }else if(tab =="environment"){
    document.getElementById("environment").style.display="block";
  }else if(tab =="news"){
     var essay = location.href.split("?")[2]
     if(essay){
       essay =  essay.replace(/[^0-9]/ig,""); 
      //  console.log(essay)
      document.getElementById("essay").style.display="block";
      for(i=0;i<document.getElementById("essay").children.length;i++){
        if(essay==i+1){
           document.getElementById("essay").children[i].style.display="block";
        }else{
          document.getElementById("essay").children[i].style.display="none";
         }
       }
     }else{
       document.getElementById("news").style.display="block";
      }
  }else{
    document.getElementById("profile").style.display="block";
  }


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