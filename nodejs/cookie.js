var http = require('http');
var cookie = require('cookie');

http.createServer(function(request, response){
    console.log(request.headers.cookie)
    if(request.headers.cookie !== undefined){
        var cookies = cookie.parse(request.headers.cookie);
        console.log(cookies.yummy_cookie);
    }
    response.writeHead(200, {
        'Set-Cookie' :[
            'yummy_cookie = choco',
            // 이러한 형태의 쿠키는 session cookie로 사용자가 브라우저를 닫으면 사라짐.
            `Permanent=cookies; Max-age=${60*60*24*30}`
            // permanent cookie는 host가 설정한 expire date까지 지속적으로 남아있음.
        ]
    })
    response.end('Cookie!!')
}).listen(3000);