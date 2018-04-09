 window.onload = function(){
 	common();
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
    }

 		//轮播图
 		Carousel();
        function Carousel(){
        	// 功能的相关参数设置
        var List = document.getElementById('banner'); // 轮播图对象
        var dots = document.getElementsByClassName('trigger')[0].getElementsByTagName('a'); // 焦点元素的对象集合
        var index = 1;      // 用于保存当轮播的图片的序号
        var int;        // 用于保存自动轮播定时器的ID
        var animat = false; // 用于表示当前动画是否在执行
        
        // 调用自动轮播方法
        autoPlay();

        // 调用显示焦点图样式的方法
        showDot();

        // 使用JS绑定下一张图片的事件
        document.getElementById('next').onclick = function(){
            next();
        }

        // 使用JS绑定上一张图片的事件
        document.getElementById('pre').onclick = function(){
            pre();
        }

        // 使用JS绑定点击焦点图事件
        for(var i=0; i<dots.length; i++){
            dots[i].onclick = function(){
                // 只有动画在执行，就不调用动画函数
                if(animat){
                    return;
                }
                var new_index = this.getAttribute('index'); // 获取用户点击的那焦点的序号
                // alert(new_index);
                var offset = (index - new_index) *712;     // 通过new_index与index的差得到图片位置距离
                index = new_index;
                animation(offset);
            }
        }

        // 使用JS绑定当鼠标移动到轮播窗口就停止自动轮播
        document.getElementById('box').onmouseover = function(){
            clearInterval(int);
        }

        // 使用JS绑定当鼠标移出到轮播窗口就重新开始自动轮播
        document.getElementById('box').onmouseout = function(){
            autoPlay();
        } 

         // 播放下一张图片的函数
        function next(){
            // 只有动画在执行，就不调用动画函数
            if(animat){
                return;
            }

            var temp_index = index;
            var offset = -712;
            // animation(-1000)
            index = (++index > 6)? 1: index;
            animation(offset, temp_index);    // 调用动画函数
        }

 
        function pre(){

            if(animat){
                return;
            }
  
            var temp_index = index;
            var offset =  712;
            index = (--index < 1)? 6: index;
            animation(offset, temp_index);    // 调用动画函数
        }
        // animation();
        // 
        // 自动播放的方法
        function autoPlay(){
            int = setInterval(function(){
                        next();
                    }, 3000);
        }

        // 动画函数
        function animation(offset ,temp_index){
           
            if(animat){
                // 当animat是true时直接退出动画函数不让函数执行。
                return;
            }

            animat = true;  // 当开始执行动画时animat设置为true，表示当前已经有动画在执行
                                  // 总移动距离
            var newLeft = parseInt(List.style.left) + offset;       // 移动的终点值
            var time = 500;                             // 位移总时长；
            var interval = 10;                          // 位移间隔时间
            var speed = offset/(time/interval);         // 每次位移的距离；

            go();
            // go方法就是一帧的动画
            function go(){
                var left = parseInt(List.style.left);       // 当前图片容器的左边定位距离
                tempLeft = left+speed;  // 下一帧出现的位置是原来的位置加上每帧移动的距离
                List.style.left = tempLeft+'px';    //使用元素出现在下一帧的位置
                showDot();
                // 判断当前位置是否到达终点位置
                if((speed < 0 && tempLeft > newLeft ) || (speed > 0 && tempLeft < newLeft )){
                    // 如果未到达，就继续执行帧动画
                    setTimeout(function(){
                        go();               // 自己调用自己，叫做自调函数
                    },interval);            // 每隔帧单位时间执行回自己。
                }else{
                    // 如果已经到达，就不再执行帧动画
                    // 并且图片移动的最终状态应该回归终点位置
                    if(temp_index == 6 && index == 1){
                        List.style.left = -712+'px';
                    }else if(temp_index==1&& index ==6){
                        List.style.left = -3560+'px';
                    }else{
                        List.style.left = newLeft+'px';
                    }
                    

                    // 当动画结束时重新让animat这个变量变成false表示当明已经无动画在执行
                    animat = false;
                    // 执行显示焦点图的方法 
                }
            }
        }

        // 显示当前图片焦点图的函数
        function showDot(){
            // 清除掉所有焦点的样式
            for(var i=0; i<dots.length; i++){
                dots[i].className = '';
            }

            dots[index-1].className = 'on';
        }
    }
    //鼠标悬停更改right_Bf_L内容
    right_Bf_L();
    function right_Bf_L(){
    	var list_name = document.getElementsByClassName('list_name');
	    for(var i=0;i<list_name.length;i++){
	    	list_name[i].index = i;
	    	list_name[i].onmouseover=function(){
	    		turnBg(this.index);
	    	}
	    }
	    function turnBg(x){
	    	for(var j=0;j<5;j++){
	    		list_name[j].className = 'list_name';	
	    	}
	    	list_name[x].className = 'list_name new';
	    	var info = document.getElementsByClassName('info');
	    	for(var z=0;z<info.length;z++){
	    		info[z].style.zIndex = '1';
	    	}
	    	info[x].style.zIndex = '2';
	    }
    }
    //鼠标悬停更改right_Cf_L内容
    right_Cf_L();
    function right_Cf_L(){
		var select = document.getElementsByClassName('select')[0].getElementsByTagName('li');
	    for(var i=0;i<select.length;i++){
	    	select[i].index = i;
	    	select[i].onmouseover = function(){
	    		trunSelect(this.index);
	    	}
	    }
	    function trunSelect(x){
	    	for(var j=0;j<4;j++){
	    		select[j].className = '';
	    	}
	    	select[x].className = 'color_on';
	    	var Cf_L_bg = document.getElementsByClassName('Cf_L_bg');
	    	for(var z=0;z<Cf_L_bg.length;z++){
	    		Cf_L_bg[z].style.zIndex = '1';
	    	}
	    	Cf_L_bg[x].style.zIndex = '2';
	    }
    }
    //鼠标悬停更改right_Cf_R内容
    right_Cf_R();
    function right_Cf_R(){
    	var occupation = document.getElementsByClassName('occupation')[0].getElementsByTagName('li');
	    for(var i=0;i<occupation.length;i++){
	    	occupation[i].index = i;
	    	occupation[i].onmouseover = function(){
	    		trunSelect(this.index);
	    	}
	    }
	    function trunSelect(x){
	    	for(var j=0;j<4;j++){
	    		occupation[j].className = '';
	    	}
	    	occupation[x].className = 'default';
	    	var picture = document.getElementsByClassName('picture');
	    	for(var z=0;z<picture.length;z++){
	    		picture[z].style.zIndex = '1';
	    	}
	    	picture[x].style.zIndex = '2';
	    }
    }
    //鼠标悬停更改right_Df_L内容
    right_Df_L();
    function right_Df_L(){
    	var right_Df_L = document.getElementsByClassName('right_Df_L')[0].getElementsByTagName('li');
	    for(var i=0;i<right_Df_L.length;i++){
	    	right_Df_L[i].index = i;
	    	right_Df_L[i].onmouseover = function(){
	    		trunSelect(this.index);
	    	}
	    }
	    function trunSelect(x){
	    	for(var j=0;j<4;j++){
	    		right_Df_L[j].className = '';
	    	}
	    	right_Df_L[x].className = 'game_bg';
	    	var bg_list = document.getElementsByClassName('bg_list');
	    	for(var z=0;z<bg_list.length;z++){
	    		bg_list[z].style.zIndex = '1';
	    	}
	    	bg_list[x].style.zIndex = '2';
	    }
    }
    //雪花制造
    var bg = document.getElementsByClassName('bg')[0];
    var int = setInterval(function(){
        var snow_num = document.getElementsByClassName('snow');
        console.log(snow_num.length);
        if(snow_num.length>1000){
            for(var c=0;c<snow_num.length;c++){
                snow_num[c].remove();
            }
        }
        Snow();
    },1000)
    function Snow(){
        var q = Math.round(Math.random()*40)+30;//随机生成雪花的数量
            for(var i=0;i<q;i++){
                var x = Math.round(Math.random()*1500)+100;
                var snow_div = document.createElement('div');
                snow_div.className = 'snow';
                snow_div.style.left = x + 'px';
                snow_div.style.top = 0 + 'px';
                bg.appendChild(snow_div);
            }
        var snow = document.getElementsByClassName('snow');
            for(var j=0;j<snow.length;j++){
                var t = Math.floor(Math.random()*3)+3;//过渡时间
                snow[j].style.transition = t+'s';      
            }
        setTimeout(function(){
            for(var z=0;z<snow.length;z++){
                var y = Math.round(Math.random()*200)+700;
                snow[z].style.top = y +'px'; 
            }
        },800);
    }
}