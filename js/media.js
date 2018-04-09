window.onload = function(){
	common();
	var news_list = document.getElementsByClassName('news_list')[0];
	var data = [
	'17173独家攻略：送给云灵的操作指南',
	'17173独家攻略：各职业新手天赋推荐',
	'孙渣：这可能是蛮荒第一只被阉割的神兽',
	'虫治先森：我竟穿越到了蛮荒大陆',
	'绵羊料理：在《蛮荒搜神记》捕获大章鱼做章鱼烧',
	'林跃然：蚩尤晏紫苏的爱恨情仇',
	'超人气Coser小小白：拓拔野COS照曝光',
	'新浪游戏评测：五行技能上古神兽游蛮荒',
	'多玩评测：80%内容已曝光 正式版本令人期待',
	'超萌漫画师梁阿渣：拓拔野，放开那只小神兽'
	];
	var num = 30;
	for(var i=0;i<data.length;i++){
		var event_info = document.createElement('li');
		var strong = document.createElement('strong');
		var a = document.createElement('a');
		var span = document.createElement('span');
		var div = document.createElement('div');
		num--;
		strong.innerHTML = '[活动]';
		a.innerHTML = data[i];
		a.href = 'javascript:;';
		span.innerHTML = '11/'+num;
		div.className = 'clear_float';
		event_info.appendChild(strong);
		event_info.appendChild(a);
		event_info.appendChild(span);
		event_info.appendChild(div);
		news_list.appendChild(event_info);
	} 
	function Tips (){
		var a = prompt("验证码为：PC9525");
		switch (a){
			case('PC9527'):
				alert('预约成功');
			break;

			default:
				alert('输入的验证码错误，请输入正确的验证码！');
		}

	}
}
