$(function(){

//日期控件
function pickTime() {
	//按周
	var datetime = $dp.cal.getDateStr();

	//获取星期几，控件提供的方法
	var dstart = -$dp.cal.getP("w", "w");
	var dend = dstart + 6;

	//计算一周的开始日期和结束日期，这个方法文档说返回的是字符串，但是实际中返回的是控件定义的时间对象，所以后面得自己转换成字符串
	var datestart = $dp.$DV(datetime, {
		d : dstart
	});
	var dateend = $dp.$DV(datetime, {
		d : dend
	});
	$(".ByWeek").val(dateToString(datestart)+" 至 "+dateToString(dateend));
};

/**
 控件返回的时间对象转换成字符串输出
 控件的时间对象有y,M,d,H,m,s属性，分别返回年，月，日，时，分，秒
 */
function dateToString(date){
	var strdate = "";
	strdate = strdate + date.y + "-";
	var M = date.M >= 10 ? date.M : ("0" + date.M);
	strdate = strdate + M;
	var d = date.d >= 10 ? date.d : ("0" + date.d);
	strdate = strdate + "-" + d;
	return strdate;
};
	
	
function year(){
	var today=new Date();
	var h=today.getFullYear();
	var m=today.getMonth()+1;
	var d=today.getDate();
	m= m<10?"0"+m:m;   //  这里判断月份是否<10,如果是在月份前面加'0'
	d= d<10?"0"+d:d;   //  这里判断日期是否<10,如果是在日期前面加'0'
	return h;
}
document.getElementById("choseY").value = year();//获取文本id并且传入当前年份

function mouth(){
	var today=new Date();
	var h=today.getFullYear();
	var m=today.getMonth()+1;
	var d=today.getDate();
	m= m<10?"0"+m:m;   //  这里判断月份是否<10,如果是在月份前面加'0'
	d= d<10?"0"+d:d;   //  这里判断日期是否<10,如果是在日期前面加'0'
	return h+"-"+m;
}
document.getElementById("choseM").value = mouth();//获取文本id并且传入当前月份


/*以下代码是实现自动显示当前日期的功能函数*/
function today(){
	var today=new Date();
	var h=today.getFullYear();
	var m=today.getMonth()+1;
	var d=today.getDate();
	m= m<10?"0"+m:m;   //  这里判断月份是否<10,如果是在月份前面加'0'
	d= d<10?"0"+d:d;   //  这里判断日期是否<10,如果是在日期前面加'0'
	return h+"-"+m+"-"+d;
}
document.getElementById("choseD").value = today();//获取文本id并且传入当前日期

});

$(function(){
function getStart(){  
  var now = new Date();   
  var nowTime = now.getTime() ;  
  var day = now.getDay();  
  var oneDayLong = 24*60*60*1000 ;   
  var MondayTime = nowTime - (day-1)*oneDayLong  ; 
  var monday = new Date(MondayTime);  
  var year = monday.getFullYear();  
  var month = monday.getMonth()+1;  
  var day =  monday.getDate();  
  var day2 = monday.getDate()+6;  
  
  month= month<10?"0"+month:month;   //  这里判断月份是否<10,如果是在月份前面加'0'
  day= day<10?"0"+day:day;   //  这里判断日期是否<10,如果是在日期前面加'0'
  
  var startTime = year + '-' + month +'-'+day;  
	
  return startTime;  
}  
document.getElementById("start").value = getStart();//获取文本id并且传入本周第一天
   

function getEnd(){  
  var now = new Date();   
  var nowTime = now.getTime() ;  
  var day = now.getDay();  
  var oneDayLong = 24*60*60*1000 ;   
  var MondayTime = nowTime - (day-1)*oneDayLong  ;  
  var monday = new Date(MondayTime);  
  var year = monday.getFullYear();  
  var month = monday.getMonth()+1;  
  var day =  monday.getDate();  
  var day2 = monday.getDate()+6;  
  
  month= month<10?"0"+month:month;   //  这里判断月份是否<10,如果是在月份前面加'0'
  day2= day2<10?"0"+day2:day2;   //  这里判断日期是否<10,如果是在日期前面加'0'
  
  var endTime = year + '-' + month +'-'+day2;  
	
  return endTime;  
}  
document.getElementById("end").value = getEnd();//获取文本id并且传入本周最后一天    
	
});

