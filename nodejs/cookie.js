var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
    console.log(request.headers.cookie)
    if(request.headers.cookie !== undefined){
        var cookies = cookie.parse(request.headers.cookie);
        console.log(cookies.yummy_cookie);
    }
    response.end('Cookie!!')
}).listen(3000);