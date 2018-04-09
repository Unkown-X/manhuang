window.onload = function(){
	common();
	var news_list = document.getElementsByClassName('news_list')[0];
	var events = [
					'送限量版礼包！第一届蛮荒摄影大赛',
					'10.27内测，福利活动一览',
					'本月开测 说说你都参与过哪些抽奖活动',
					'限期预约 赢iPhone 7 Plus',
					'绝版周边 天天领',
					'贴吧每日签到帖 每周必抽奖',
					'报名《蛮荒搜神记》玩家顾问团 领取先锋体验服激活码',
					'为燃情测试加油，转发微博赢机械键盘',
					'这里也有码！激活码媒体发放渠道汇总',
					'【蛮荒搜神记】新浪激活码发放中',
					'【蛮荒搜神记】17173激活码发放中'
	];
	var num = 30;
	for(var i=0;i<events.length;i++){
		var event_info = document.createElement('li');
		var strong = document.createElement('strong');
		var a = document.createElement('a');
		var span = document.createElement('span');
		var div = document.createElement('div');
		num--;
		strong.innerHTML = '[活动]';
		a.innerHTML = events[i];
		a.href = 'javascript:;';
		span.innerHTML = '11/'+num;
		div.className = 'clear_float';
		event_info.appendChild(strong);
		event_info.appendChild(a);
		event_info.appendChild(span);
		event_info.appendChild(div);
		news_list.appendChild(event_info);
	} 

	var li = document.getElementsByClassName('news_list')[0].getElementsByTagName('a');
	var h = 0;
	var add = 10;
	var off = setInterval(function(){
		for(var j=0;j<li.length;j++){
			h += add;
			li[j].style.color = 'hsl('+h+',100%,50%)';
		}
	},800);
	var cout = 0;
	document.getElementById('cool').onclick = function(){
		cout++;
		if(cout%2==0){
			off = setInterval(function(){
				for(var j=0;j<li.length;j++){
					h += add;
					li[j].style.color = 'hsl('+h+',100%,50%)';
					}
				},800);
		}else{
				clearInterval(off);
		}
	}
}
