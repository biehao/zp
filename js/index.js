moveTime();
setInterval(moveTime, 1000)

function moveTime() {
	var myTime = new Date();
	var str = '';
	str = myTime.getFullYear() + "年 " + (myTime.getMonth() + 1) + '月' + myTime.getDate() + '日 ' + weeks() + " " + myTime.getHours() + "点 " + myTime.getMinutes() + "分 " + myTime.getSeconds() + '秒';
	h2.innerHTML = str;

	function weeks() {
		if(myTime.getDay() === 0) {
			return "星期天"
		} else if(myTime.getDay() === 1) {
			return "星期一"
		} else if(myTime.getDay() === 2) {
			return "星期二"
		} else if(myTime.getDay() === 3) {
			return "星期三"
		} else if(myTime.getDay() === 4) {
			return "星期四"
		} else if(myTime.getDay() === 5) {
			return "星期五"
		} else if(myTime.getDay() === 6) {
			return "星期六"
		}
	}
}