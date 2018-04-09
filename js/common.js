//加载js
function common(){
	//客服鼠标悬停二级菜单出现，移出菜单消失
	var service = document.getElementsByClassName('service')[0];
	var service1 = document.getElementsByClassName('service1')[0];
	service.onmouseover = function(){
		service1.style.display = 'block';
	}
	service.onmouseout = function(){
		service1.style.display = 'none';
	}
	//畅游全服务鼠标悬停二级菜单出现，移出菜单消失
	var all_servive = document.getElementsByClassName('all_servive')[0];
	var all_servive1 = document.getElementsByClassName('all_servive1')[0];
	all_servive.onmouseover = function(){
		all_servive1.style.display = 'block';
	}
	all_servive.onmouseout = function(){
		all_servive1.style.display = 'none';
	}
	//畅游全游戏鼠标悬停二级菜单出现，移出菜单消失
	var all_game = document.getElementsByClassName('all_game')[0];
	var all_game1 = document.getElementsByClassName('all_game1')[0];
	all_game.onmouseover = function(){
		all_game1.style.display = 'block';
	}
	all_game.onmouseout = function(){
		all_game1.style.display = 'none';
	}
	//内容顶部导航栏鼠标悬停时二级菜单出现，移出菜单消失
	var content_top_nav = document.getElementsByClassName('content_top_nav')[0];
	var content_top_nav1 = document.getElementsByClassName('content_top_nav1');
	content_top_nav.onmouseover = function(){
		for(var i=0;i<content_top_nav1.length;i++){
			content_top_nav1[i].style.display = 'block';
		}
	}
	content_top_nav.onmouseout = function(){
		for(var i=0;i<content_top_nav1.length;i++){
			content_top_nav1[i].style.display = 'none';
		}	
	}

	//合作媒体下拉菜单
	dropdown();
	function dropdown(){
		var left_Df = document.getElementsByClassName('left_Df')[0];
		var media_partners = document.getElementsByClassName('media_partners')[0];
		var click_num = 0;
		var childrens = media_partners.children;
		var h = childrens.length*48;
		left_Df.onclick = function(){

			click_num++;
			if(click_num%2==0){
				media_partners.style.height = 0;
				media_partners.style.padding = '0 8px';
				setTimeout(function(){
					media_partners.style.display = 'none';
				},1000);
			}else{
				media_partners.style.display = 'block';
				setTimeout(function(){
					media_partners.style.height = h+'px';
					media_partners.style.padding = '8px 8px 0 8px';
				},200);
				
			}	
		}
	}
	
	//右侧预约栏
	appointment();
	function appointment(){
		var open = document.getElementById('open');
		var close = document.getElementById('close');
		var open_close = document.getElementsByClassName('open_close')[0];
		close.onclick = function(){
			open_close.style.right = '-210px';
			close.style.display = 'none';	
		}
		open.onclick = function(){
			open_close.style.right = '0';
			close.style.display = 'block';
		}
		var get_code = document.getElementsByClassName('get_code')[0];
		get_code.onclick = function(){
			Tips();
		}
		//验证码生成
		var code= '';
		function Tips(){
			var arr = ['a','z','g','s','d','j','k','c','t','p'];
			for(var i=0;i<2;i++){
				var num = Math.round(Math.random()*9);
				code += arr[num] + num;
			}
			alert('验证码为：'+code);
		}
		var appoint = document.getElementsByClassName('appoint')[0];
		var phone_num = document.getElementById('phone_num');
		var check_code = document.getElementById('check_code');
		appoint.onclick = function(){
			if(phone_num.value == ''|| check_code.value == ''){
				alert('请输入正确手机号和验证码！');
			}else if(check_code.value != code){
				alert('验证码错误，请输入正确的验证码！');
			}else{
				alert('预约成功！');
			}
		}
	}

	//回到顶部按钮
	backTop();
	function backTop(){
		var return_top = document.getElementsByClassName('return_top')[0];
		window.onscroll = function(){
			checkTop();
		}
		function checkTop(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			console.log(scrollTop);
			if(scrollTop < 55){
				return_top.style.display = 'none';
			}else{
				return_top.style.display = 'block';
			}
		}
	}
}
