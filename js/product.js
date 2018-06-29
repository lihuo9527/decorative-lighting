window.onload=function(){
  var masking = get_class("masking")
	  masking.style.height = document.documentElement.clientHeight + "px";
  var mobile_nav = get_class("mobile_nav")
	  mobile_nav.style.height = document.documentElement.clientHeight + "px";
  var previous_page = document.getElementById("previous-page")
  var before_one_page = document.getElementById("before-one-page")
  var next_page=document.getElementById("next-page")
  var ulr="http://solostore.oss-cn-shanghai.aliyuncs.com/images/product/";
  var data=[
      [ulr + "1.jpg",ulr +"2.jpg",ulr +"3.jpg",ulr +"4.jpg",ulr +"5.jpg",ulr +"6.jpg",ulr +"7.jpg",ulr +"8.jpg",ulr +"9.jpg",ulr +"10.jpg",ulr +"11.jpg",ulr +"12.jpg",ulr +"13.jpg",ulr +"14.jpg",ulr +"15.jpg",ulr +"16.jpg",ulr +"17.jpg",ulr +"18.jpg",ulr +"19.jpg",ulr +"20.jpg",ulr +"21.jpg",ulr +"22.jpg",ulr +"23.jpg",ulr +"24.jpg",ulr +"25.jpg",ulr +"26.jpg",ulr +"27.jpg",ulr +"28.jpg",ulr +"29.jpg",ulr +"30.jpg",ulr +"31.jpg",ulr +"32.jpg",ulr +"33.jpg",ulr +"34.jpg",ulr +"35.jpg",ulr +"36.jpg",ulr +"37.jpg",ulr +"38.jpg",ulr +"39.jpg",ulr +"40.jpg"],
      [ulr + "41.jpg",ulr +"42.jpg",ulr +"43.jpg",ulr +"44.jpg",ulr +"45.jpg",ulr +"46.jpg",ulr +"47.jpg",ulr +"48.jpg",ulr +"49.jpg",ulr +"50.jpg"],
      [ulr + "51.jpg",ulr +"52.jpg",ulr +"53.jpg",ulr +"54.jpg",ulr +"55.jpg",ulr +"56.jpg",ulr +"57.jpg",ulr +"58.jpg",ulr +"59.jpg",ulr +"60.jpg",ulr +"61.jpg",ulr +"62.jpg"],
      [ulr +"63.jpg",ulr +"64.jpg",ulr +"65.jpg",ulr +"66.jpg"],
      [ulr +"67.jpg",ulr +"68.jpg",ulr +"69.jpg",ulr +"70.jpg",ulr +"71.jpg",ulr +"72.jpg",ulr +"73.jpg",ulr +"74.jpg",ulr +"75.jpg",ulr +"76.jpg",ulr +"77.jpg",ulr +"78.jpg",ulr +"79.jpg",ulr +"80.jpg",ulr +"81.jpg",ulr +"82.jpg",ulr +"83.jpg",ulr +"84.jpg",ulr +"85.jpg",ulr +"86.jpg",ulr +"87.jpg",ulr +"88.jpg",ulr +"89.jpg",ulr +"90.jpg",ulr +"91.jpg",ulr +"92.jpg",ulr +"93.jpg",ulr +"94.jpg",ulr +"95.jpg",ulr +"96.jpg",ulr +"97.jpg",ulr +"98.jpg",ulr +"99.jpg",ulr +"100.jpg",ulr +"101.jpg",ulr +"102.jpg",ulr +"103.jpg",ulr +"104.jpg",ulr +"105.jpg",ulr +"106.jpg",ulr +"107.jpg",ulr +"108.jpg",ulr +"109.jpg",ulr +"110.jpg",ulr +"111.jpg",ulr +"112.jpg",ulr +"113.jpg",ulr +"114.jpg",ulr +"115.jpg",ulr +"116.jpg",ulr +"117.jpg",ulr +"118.jpg",ulr +"119.jpg",ulr +"120.jpg",ulr +"121.jpg",ulr +"122.jpg",ulr +"123.jpg",ulr +"124.jpg",ulr +"125.jpg",ulr +"126.jpg",ulr +"127.jpg",ulr +"128.jpg",ulr +"129.jpg",ulr +"130.jpg",ulr +"131.jpg",ulr +"132.jpg",ulr +"133.jpg",ulr +"134.jpg",ulr +"135.jpg",ulr +"136.jpg",ulr +"137.jpg",ulr +"138.jpg",ulr +"139.jpg",ulr +"140.jpg",ulr +"141.jpg",ulr +"142.jpg",ulr +"143.jpg",ulr +"144.jpg",ulr +"145.jpg",ulr +"146.jpg"],
      [ulr + "147.jpg",ulr +"148.jpg",ulr +"149.jpg",ulr +"150.jpg",ulr +"151.jpg",ulr +"152.jpg",ulr +"153.jpg",ulr +"154.jpg",ulr +"155.jpg",ulr +"156.jpg",ulr +"157.jpg",ulr +"158.jpg",ulr +"159.jpg"],
      [ulr + "160.jpg",ulr +"161.jpg",ulr +"162.jpg",ulr +"163.jpg",ulr +"164.jpg",ulr +"165.jpg",ulr +"166.jpg",ulr +"167.jpg",ulr +"168.jpg",ulr +"169.jpg",ulr +"170.jpg",ulr +"171.jpg",ulr +"172.jpg",ulr +"173.jpg",ulr +"174.jpg",ulr +"175.jpg",ulr +"176.jpg",ulr +"177.jpg",ulr +"178.jpg",ulr +"179.jpg",ulr +"180.jpg",ulr +"181.jpg",ulr +"182.jpg",ulr +"183.jpg",ulr +"184.jpg",ulr +"185.jpg",ulr +"186.jpg",ulr +"187.jpg",ulr +"188.jpg"],
      [ulr +"189.jpg",ulr +"190.jpg",ulr +"191.jpg",ulr +"192.jpg",ulr +"193.jpg",ulr +"194.jpg",ulr +"195.jpg",ulr +"196.jpg",ulr +"197.jpg",ulr +"198.jpg",ulr +"199.jpg",ulr +"200.jpg"],
      [ulr +"201.jpg",ulr +"202.jpg",ulr +"203.jpg",ulr +"204.jpg",ulr +"205.jpg",ulr +"206.jpg",ulr +"207.jpg",ulr +"208.jpg",ulr +"209.jpg",ulr +"210.jpg",ulr +"211.jpg",ulr +"212.jpg",ulr +"213.jpg",ulr +"214.jpg",ulr +"215.jpg",ulr +"216.jpg",ulr +"217.jpg",ulr +"218.jpg"],
      [ulr +"219.jpg",ulr +"220.jpg",ulr +"221.jpg",ulr +"222.jpg",ulr +"223.jpg",ulr +"224.jpg",ulr +"225.jpg",ulr +"226.jpg",ulr +"227.jpg",ulr +"228.jpg",ulr +"229.jpg",ulr +"230.jpg",ulr +"231.jpg",ulr +"232.jpg",ulr +"233.jpg",ulr +"234.jpg"],
      [ulr + "235.jpg",ulr + "236.jpg",ulr + "237.jpg",ulr + "238.jpg",ulr + "239.jpg",ulr + "240.jpg",ulr + "241.jpg",ulr + "242.jpg",ulr + "243.jpg",ulr + "244.jpg",ulr + "245.jpg",ulr + "246.jpg",ulr + "247.jpg",ulr + "248.jpg",ulr + "249.jpg",ulr + "250.jpg",ulr + "251.jpg"],
      [ulr + "252.jpg",ulr + "253.jpg",ulr + "254.jpg",ulr + "255.jpg",ulr + "256.jpg",ulr + "257.jpg"],
      [ulr + "258.jpg",ulr + "259.jpg",ulr + "260.jpg",ulr + "261.jpg",ulr + "262.jpg"],
      [ulr + "263.jpg",ulr + "264.jpg",ulr + "265.jpg",ulr + "266.jpg",ulr + "267.jpg",ulr + "268.jpg",ulr + "269.jpg",ulr + "270.jpg",ulr + "271.jpg",ulr + "272.jpg",ulr + "273.jpg",ulr + "274.jpg",ulr + "275.jpg",ulr + "276.jpg",ulr + "277.jpg",ulr + "278.jpg",ulr + "279.jpg",ulr + "280.jpg",ulr + "281.jpg",ulr + "282.jpg",ulr + "283.jpg",ulr + "284.jpg",ulr + "285.jpg",ulr + "286.jpg"],
      [ulr + "287.jpg",ulr + "288.jpg",ulr + "289.jpg",ulr + "290.jpg",ulr + "291.jpg",ulr + "292.jpg",ulr + "293.jpg",ulr + "294.jpg",ulr + "295.jpg",ulr + "296.jpg"],
      [ulr + "297.jpg",ulr + "298.jpg",ulr + "299.jpg",ulr + "300.jpg",ulr + "301.jpg",ulr + "302.jpg",ulr + "303.jpg",ulr + "304.jpg",ulr + "305.jpg",ulr + "306.jpg",ulr + "307.jpg",ulr + "308.jpg",ulr + "309.jpg",ulr + "310.jpg",ulr + "311.jpg",ulr + "312.jpg",ulr + "313.jpg",ulr + "314.jpg",ulr + "315.jpg",ulr + "316.jpg",ulr + "317.jpg",ulr + "318.jpg",ulr + "319.jpg",ulr + "320.jpg",ulr + "321.jpg",ulr + "322.jpg",ulr + "323.jpg",ulr + "324.jpg",ulr + "325.jpg",ulr + "326.jpg",ulr + "327.jpg",ulr + "328.jpg",ulr + "329.jpg",ulr + "330.jpg",ulr + "331.jpg",ulr + "332.jpg",ulr + "333.jpg",ulr + "334.jpg",ulr + "335.jpg",ulr + "336.jpg",ulr + "337.jpg",ulr + "338.jpg",ulr + "339.jpg",ulr + "340.jpg",ulr + "341.jpg",ulr + "342.jpg",ulr + "343.jpg",ulr + "344.jpg",ulr + "345.jpg",ulr + "346.jpg",ulr + "347.jpg",ulr + "348.jpg",ulr + "349.jpg",ulr + "350.jpg",ulr + "351.jpg",ulr + "352.jpg",ulr + "353.jpg",ulr + "354.jpg",ulr + "355.jpg"]



  ]
  var img_container = document.getElementById("img-container");
  var tab = location.href.split("?")[1] ;
  var page = Number(location.href.split("?")[2]);
  var j = 0;
//   console.log(tab + ":" + page)
    if(!tab) tab=1,page=1;
    if(!page) page=1;   
    before_one_page.innerHTML = "当前页面：" + page;
    var select = document.getElementById("select");
        select.value = select.children[tab-1].value;
    for(i=0;i<data[tab-1].length;i++){
        if(page !=1 ){
          if(i<(page-1)*20){
              continue;
          }
        }
    //    console.log(i)
       var a = document.createElement('a')
       var img = document.createElement('img')
       img.src = data[tab-1][i];
       var href = img.src.split("/")
       if(tab!=16){
          a.href=ulr +"big_"+ href[href.length-1];
          a.target="_blank";
       } 
       a.appendChild(img)
       
       if(j>=20){
          if(page!=1) j++;
           break;
       } 
       img_container.appendChild(a)
       j++;
   } 
   next_page.onclick=function(){
    if(data[tab-1].length-(page-1)*20-j>0){
          window.location.href = location.href.split("?")[0] + "?" + tab + "?" + (page+1)
       }else{
           alert("目前已经是最后一页啦！")
       }
   
   }
   previous_page.onclick=function(){
       if(page>1){
         window.location.href = location.href.split("?")[0] + "?" + tab + "?" + (page-1)
       }else{
           alert("目前已经是第一页啦！")
       }
   }
   select.onchange=function(){
       for(i=0;i<select.children.length;i++){
         if(this.children[i].value===this.value){
           window.location.href = location.href.split("?")[0] + "?" + (i+1);
           break;
         }
       }
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