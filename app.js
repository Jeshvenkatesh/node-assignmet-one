const http = require('http');

const routes = require('./routes');

const port = 3000;
const hostname = "localhost";

const server = http.createServer(routes);

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})