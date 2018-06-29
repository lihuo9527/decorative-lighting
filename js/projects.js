window.onload=function(){
  var masking = get_class("masking")
	  masking.style.height = document.documentElement.clientHeight + "px";
  var mobile_nav = get_class("mobile_nav")
	  mobile_nav.style.height = document.documentElement.clientHeight + "px";

  var ulr="http://solostore.oss-cn-shanghai.aliyuncs.com/images/projects/";
  var data=[
    [ulr + "1.jpg",ulr +"2.jpg",ulr +"3.jpg",ulr +"4.jpg",ulr +"5.jpg",ulr +"16.jpg",ulr +"17.jpg",ulr +"20.jpg",ulr +"21.jpg"],
    [ulr + "27.jpg",ulr +"28.jpg",ulr +"29.jpg",ulr +"30.jpg",ulr +"31.jpg",ulr +"32.jpg",ulr +"33.jpg"],
    [ulr +"25.jpg",ulr +"26.jpg",ulr +"23.jpg",ulr +"24.jpg"],
    [ulr + "6.jpg",ulr +"7.jpg",ulr +"8.jpg",ulr +"9.jpg",ulr +"10.jpg",ulr + "11.jpg",ulr +"14.jpg",ulr +"15.jpg"]
  ]
  var img_container = document.getElementById("projects-container");
  var tab = location.href.split("?")[1] ;
    if(!tab) tab=1;
    for(i=0;i<data[tab-1].length;i++){
    //    console.log(i)
       var a = document.createElement('a')
       var img = document.createElement('img')
       img.src = data[tab-1][i];
       a.appendChild(img)
       img_container.appendChild(a)
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