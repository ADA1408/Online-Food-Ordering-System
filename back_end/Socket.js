const socketIo = require('socket.io')

const initserver =(server) =>{
    const io = socketIo(server)

    io.on('connection',(socket)=>{
        console.log("A Client is connected")
        socket.on()
        socket.on('disconnect',()=>{
            console.log("Client is Disconnected")
        })
    })
    return io;
}

module.exports = initserver;