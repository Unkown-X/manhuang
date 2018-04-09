window.onload = function(){
	common();

	//视频播放按钮
	var video2 = document.getElementsByClassName('video2')[0];
	var video1 = document.getElementsByClassName('video1')[0];
	video2.onmouseover = function(){
		video2.style.cursor = 'pointer';
		video2.style.transform = 'scale(1.1)';
		video2.style.opacity = '0';
	}
	video2.onmouseout = function(){
		video2.style.transform = 'scale(0.8)';
		video2.style.opacity = '1';
	}

	var top = document.getElementsByClassName('top');
	var a = document.getElementsByClassName('btn')[0].children;
	var border_big = document.getElementsByClassName('border_big');
	var ins = document.getElementsByClassName('btn')[0].getElementsByTagName('ins');
	var circle = document.getElementsByClassName('btn')[0].getElementsByClassName('circle');
	var pic = document.getElementsByClassName('pic');
	var wid = window.innerWidth;
	// console.log(wid);
	for(var i=0;i<a.length;i++){
		a[i].index = i;
		// a[i].style.width = wid/3+'px'; 
		a[i].onmouseover = function(){
			border_big[this.index].style.display = 'block';
			ins[this.index].style.display = 'none'; 
			top[this.index].style.display = 'none';
			circle[this.index].style.display = 'block';
			pic[this.index].style.transform = 'scale(1.2)';
		}
		a[i].onmouseout = function(){
			border_big[this.index].style.display = 'none'; 
			ins[this.index].style.display = 'block';
			top[this.index].style.display = 'block';
			circle[this.index].style.display = 'none';
			pic[this.index].style.transform = 'scale(1)';
		}
		a[i].onclick = function(){
			nuWa();
		}
	}

	function nuWa(){
		var start = document.getElementsByClassName('start')[0];
		var mh_logo = document.getElementsByClassName('mh_logo')[0];
		var slogan = document.getElementsByClassName('slogan')[0];
		var btn = document.getElementsByClassName('btn')[0];
		start.style.background = 'transparent';
		start.style.height = "100%";
		mh_logo.style.position = 'fixed';
		mh_logo.style.top = '75px';
		slogan.style.display = 'none';
		video1.style.display = 'none';
		video2.style.display = 'none';
		btn.style.display = 'none';
		//女娲卷内容
		var box1_01 = document.getElementsByClassName('box1_01')[0];
		var box1_02 = document.getElementsByClassName('box1_02')[0];
		var box1_03 = document.getElementsByClassName('box1_03')[0];
		var box1_04 = document.getElementsByClassName('box1_04')[0];
		box1_01.style.display = 'block';
		box1_02.style.display = 'block';
		box1_03.style.display = 'block';
		box1_04.style.display = 'block';
		window.onscroll = function(){
			checkTop();
		}
		var newScrollTop = 0;
		function checkTop(){
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			var box1_01 = document.getElementsByClassName('box1_01')[0].children;
			var lu = box1_01[0];
			var txt01 = box1_01[1];
			var cloud = box1_01[2];
			console.log(scrollTop);
			// 不周山各元素位置获取
			var lu_B = parseInt(lu.style.bottom);
			var lu_L = parseInt(lu.style.left);
			var txt01_L = parseInt(txt01.style.left);
			var cloud_R = parseInt(cloud.style.right);
			var cloud_T = parseInt(cloud.style.top);
			//令丘之山各元素位置声明
			var box1_02 = document.getElementsByClassName('box1_02')[0].children;
			var stone_l = box1_02[0];
			var stone_r = box1_02[1];
			var txt02 = box1_02[2];
			var fire = box1_02[3];
			//令丘之山各元素位置获取
			var stone_l_L = parseInt(stone_l.style.left);
			var stone_r_R = parseInt(stone_r.style.right);
			var txt02_T = parseInt(txt02.style.top);
			var fire_T = parseInt(fire.style.top);
			var fire_R = parseInt(fire.style.right);
			//补天石各元素位置声明
			var box1_03 = document.getElementsByClassName('box1_03')[0].children;
			var tree_l = box1_03[0];
			var tree_r = box1_03[1];
			var txt03 = box1_03[2];
			//补天石各元素位置获取
			var tree_l_L = parseInt(tree_l.style.left);
			var tree_r_R = parseInt(tree_r.style.right);
			var txt03_T = parseInt(txt03.style.top);
			//天地浩劫各元素位置声明
			var box1_04 = document.getElementsByClassName('box1_04')[0].children;
			var txt04 = box1_04[0];
			//天地浩劫各元素位置获取
			var txt04_L = parseInt(txt04.style.left);
			//判断语句
			if(scrollTop<184&& newScrollTop<=scrollTop){
				lu.style.bottom = lu_B + 10 + 'px';
				lu.style.left = lu_L + 10 + 'px';
				txt01.style.left = txt01_L - 10 + 'px'; 
				cloud.style.top = cloud_T + 10 + 'px';
				cloud.style.right = cloud_R + 10 + 'px';
			}else if(scrollTop<184&& newScrollTop>scrollTop){
				lu.style.bottom = lu_B - 10 +'px';
				lu.style.left = lu_L - 10 +'px';
				txt01.style.left = txt01_L + 10 + 'px';
				cloud.style.top = cloud_T - 10 + 'px';
				cloud.style.right = cloud_R - 10 + 'px';
			}else if(scrollTop==0){
				lu.style.bottom = -193 +'px';
				lu.style.left = -180 +'px';
				txt01.style.left = 800 + 'px';
				cloud.style.top = -66 + 'px';
				cloud.style.right = -45 + 'px';
			}else if(scrollTop>=184&&scrollTop<1084&&newScrollTop<=scrollTop){
				lu.style.bottom = 0 +'px';
				lu.style.left = 0 +'px';
				txt01.style.left = 560 + 'px';
				cloud.style.top = 26 + 'px';
				cloud.style.right = 0 + 'px';
				//令丘之山
				stone_l.style.left = stone_l_L + 0.2 + 'px';
				stone_r.style.right = stone_r_R + 0.3 + 'px';
				txt02.style.top = txt02_T + 0.2 + 'px';
				fire.style.top = fire_T + 0.1 + 'px';
				fire.style.right = fire_R + 0.1 + 'px';
			}else if(scrollTop>=184&&scrollTop<1084&&newScrollTop>scrollTop){
				lu.style.bottom = 0 +'px';
				lu.style.left = 0 +'px';
				txt01.style.left = 560 + 'px';
				cloud.style.top = 26 + 'px';
				cloud.style.right = 0 + 'px';
				//令丘之山
				stone_l.style.left = stone_l_L - 0.2 + 'px';
				stone_r.style.right = stone_r_R - 0.3 + 'px';
				txt02.style.top = txt02_T - 0.2 + 'px';
				fire.style.top = fire_T - 0.1 + 'px';
				fire.style.right = fire_R - 0.1 + 'px';
			}else if(scrollTop>=1084&&scrollTop<1984&&newScrollTop<=scrollTop){
				stone_l.style.left = -180 + 'px';
				stone_r.style.right = -280 + 'px';
				txt02.style.top = 470 + 'px';
				fire.style.top = 50 + 'px';
				fire.style.right = 70 + 'px';
				//补天石
				tree_l.style.left = tree_l_L + 2 + 'px';
				tree_r.style.right = tree_r_R + 2 +'px';
				txt03.style.top =  txt03_T - 5 + 'px';
			}else if(scrollTop>=1084&&scrollTop<1984&&newScrollTop>scrollTop){
				stone_l.style.left = -180 + 'px';
				stone_r.style.right = -280 + 'px';
				txt02.style.top = 470 + 'px';
				fire.style.top = 50 + 'px';
				fire.style.right = 70 + 'px';
				//补天石
				tree_l.style.left = tree_l_L - 2 + 'px';
				tree_r.style.right = tree_r_R - 2 +'px';
				txt03.style.top =  txt03_T + 5 + 'px';
			}else if(scrollTop>=1984&&scrollTop<2884&&newScrollTop<=scrollTop){
				tree_l.style.left = 0 + 'px';
				tree_r.style.right = 0 +'px';
				txt03.style.top = 280 + 'px';
				//天地浩劫
				txt04.style.left = txt04_L + 7 + 'px';
			}else if(scrollTop>=1984&&scrollTop<2884&&newScrollTop>scrollTop){
				tree_l.style.left = 0 + 'px';
				tree_r.style.right = 0 +'px';
				txt03.style.top = 280 + 'px';
				//天地浩劫
				txt04.style.left = txt04_L - 7 + 'px';
			}else if(scrollTop>2884){
				txt04.style.left = 534+ 'px';
			}
			newScrollTop = scrollTop;
		}
	}
}