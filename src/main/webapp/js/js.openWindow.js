function openwindow(url,width,height){
	var iUrl=url; //转向网页的地址;
	var name=""; //网页名称，可为空;
	var iWidth=width; //弹出窗口的宽度;
	var iHeight=height; //弹出窗口的高度;
	var iTop = (window.screen.availHeight-30-iHeight)/2; //获得窗口的垂直位置;
	var iLeft = (window.screen.availWidth-10-iWidth)/2; //获得窗口的水平位置;
	window.open(iUrl,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no');
}

function openURL(url){
	var iUrl=url; //转向网页的地址;
	window.location.href=iUrl
}