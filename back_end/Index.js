const http=require('http');
const app = require('./app')
const initserver = require('./Socket')

const normalizedPort = val =>{
    const port = parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port >=0){
        return port;
    }
    return false;
}
const port = normalizedPort(process.env.PORT || '1000')

const errorhandel=(error)=>{
    if(error.syscall !== 'listen'){
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string'?'pipe : '+address : 'port '+port;
    switch (error.code){
        case 'EACCES':
            console.error(bind+" require elevated privillage");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind+" address already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = http.createServer(app);
const io = initserver(server);

server.on('error',errorhandel);
server.on('listening',()=>{
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe : '+address : 'port : '+port;
    console.log('Server Listening on '+bind);
})

server.listen(port);