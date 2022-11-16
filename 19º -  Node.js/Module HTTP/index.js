http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plane' });
    response.end("Hello World!");
}).listen(3000, (err) => {
    if(err) {
        console.log(err)
    }else {
        console.log("Servidor Rodando na Porta 3000")
    }
})