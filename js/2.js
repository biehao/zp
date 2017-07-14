var arr = [];
var str = "";
var aLi = $('li');
var len = aLi.length;
var sx = $('#sx');
var op = $('#op');
for (var i = 0 ; i < 20 ; i ++ ) {
//	        	$('img').eq(i).attr('src','img/l'+(i+1)+'.jpg')
	var random1 = Math.ceil(Math.random()*1000+1);
	var random2 = Math.ceil(Math.random()*399+1);
	arr.push({L:random1,T:random2});
	$('li').eq(i).css({
		left:arr[i].L,
		top:arr[i].T
	})
};
sx.on('click',function (){
	for (var i = 0 ; i < len ; i ++ ) {
            aLi.eq(i).css('left',(i%5)*200);
            aLi.eq(i).css('top',(Math.floor(i/5))*100);
    }
})
op.on('click',function(){
	arr = [];
	for (var i = 0 ; i < 20 ; i ++ ) {
		var random1 = Math.ceil(Math.random()*1000+1);
		var random2 = Math.ceil(Math.random()*399+1);
		arr.push({L:random1,T:random2});
		$('li').eq(i).css({
			left:arr[i].L,
			top:arr[i].T
		})
	};
})
