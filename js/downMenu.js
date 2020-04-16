

function openlist(evt, cityName) {
    var i, tablinks;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btn1");
	console.log("btn1:"+tablinks.length);
    for (i = 0; i < tablinks.length; i++) {
		console.log("tablinks[i].className:"+tablinks[i].className);
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";	
	// var lens=document.getElementById("open").length;
	// console.log(lens);
}

// function OPEN(){
// 	try{
// 		console.log("开始咯");
// 		document.getElementById("open").clicked();
// 	}catch(e){
// 		alert(e);
// 	}
// }	

	


function ON(event,num){
	var acc = document.getElementById(num);
	

	
	if(acc.style.display=="none"){//样式设置为block时
		   //搜索到
		  acc.style.display="block";
	}
	else{
		
		console.log(222);
		acc.style.display="none";
	}
	
	// if(acc.style.display=="block"){
	// 	   //搜索到
	// 	  acc.style.display="none";
	// }
	// else{
		
	// 	console.log(222);
	// 	acc.style.display="block";
	// }
	
	
	  
}
