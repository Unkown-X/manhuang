/*
	加载模块
 */
var http = require('http');
var fs = require('fs');
/*
	创建服务器
 */
var server = http.createServer(function(req,res){
	//判断用户访问的地址
	if(req.url == '/' && req.method == 'GET'){
		server(__dirname+'/index.html','text/html;charset=utf-8');
	}else if (req.url.substr(0,7) == '/images' && req.url.substr(-4) == '.jpg'||req.url.substr(0,7) =='/images' && req.url.substr(-4) == '.png') {
		//加载图片
		fs.stat(__dirname+req.url,function(err,stat){
			//判断是否出错或者路径并不是文件而是文件夹
			if(err || !stat.isFile()){
				res.writeHead(404);
				res.end('Not Found!');
				return;
			}
			server(__dirname+req.url,'application/jpg'||__dirname+req.url,'application/png');
		});
	}else if (req.url.substr(0,4) == '/css' ) {
		//加载css
		// fs.stat(__dirname+req.url,function(err,stat){
		// 	//判断是否出错或者路径并不是文件而是文件夹
		// 	if(err || !stat.isFile()){
		// 		res.writeHead(404);
		// 		res.end('Not Found!');
		// 		return;
		// 	}
			server(__dirname+req.url,'text/css');
		// });
	}else if (req.url.substr(0,3) == '/js') {
		//加载js
		fs.stat(__dirname+req.url,function(err,stat){
			//判断是否出错或者路径并不是文件而是文件夹
			if(err || !stat.isFile()){
				res.writeHead(404);
				res.end('Not Found!');
				return;
			}
			server(__dirname+req.url,'text/javascript');
		});
	}else if(req.url.substr(-5) =='.html'){
		server(__dirname+req.url,'text/html;charset=utf-8');
	}else{
		res.writeHead(404);
		res.end('Not Found!!!');
	}
	function server(path,type){
		res.writeHead(200,{'Content-Type':type});
		fs.createReadStream(path).pipe(res);
	}
});

/*
	监听服务器
 */
server.listen(8888,function(){
	console.log('服务器开启，端口为8888');
});