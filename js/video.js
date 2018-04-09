window.onload = function(){
	common();
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

