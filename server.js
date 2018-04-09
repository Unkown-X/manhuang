/*
	加载模块	
 */
const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req,res){
	var filename = './'+req.url;
	if(req.url == '/'&& req.method == 'GET'){
		filename = './index.html';
	}
	fs.readFile(filename,function(err,data){
		if (err) {
			res.write('404');
		}else{
			res.write(data);
		}
		res.end();
	})
});
server.listen(8080);
