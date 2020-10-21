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
            `Permanent=cookies; Max-age=${60*60*24*30}`,
            // permanent cookie는 host가 설정한 expire date까지 지속적으로 남아있음.
            'Secure=Secure; Secure',
            // https일때만 request하게 함 -> http를 쓸 경우 cookie를 해킹하기 용이하므로
            'HttpOnly=HttpOnly; HttpOnly',
            // java script로 쿠키를 해킹하는 경우가 많으므로 이것 역시 유용함.
            'Path=Path; Path=/cookie',
            // 해당 path를 가진 주소에서만 cookie가 존재함.
            'Domain=Domain; Domain=o2.org'
            // ???.o2.org 와 같은 모든 종류의 sub domain에서도 살아남는다. / 해당 도메인에서는 항상 살아남음.
        ]
    })
    response.end('Cookie!!')
}).listen(3000);