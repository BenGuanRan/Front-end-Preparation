const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === '/') {
        res.setHeader('content-type', 'text/html;charset=utf8')
        // res.setHeader('content-length', 1)
        res.setHeader('Transfer-Encoding', 'chunked')
        res.write('开始')
        setTimeout(() => {
            res.write('<br/>第一次传输')
        }, 5000)
        setTimeout(() => {
            res.write('<br/>第二次传输')
            res.end()
        }, 6000)
    }
})

server.listen(8088, () => {
    console.log('http://localhost:8088');
})