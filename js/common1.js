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

}