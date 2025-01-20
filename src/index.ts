import { WebSocketServer } from 'ws'; 

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function(socket){
    console.log("New client connected");
    socket.send("Welcome to the server");  
    socket.on('message', (e)=>{
        console.log(e.toString());
    })
})