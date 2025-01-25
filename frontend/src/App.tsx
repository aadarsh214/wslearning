
import { useEffect, useState } from 'react'
import './App.css'


export default function App(){
  const [ws, setWs] = useState<WebSocket>();
  function sendMessage(){
    ws.send("ping")
  }

  useEffect(() =>{
    const ws = new WebSocket('ws://localhost:8080/');
    setWs(ws);
    ws.onmessage = (event) => {
      console.log(event.data)
    }
  },[])


  return (
    <div>
     <input type="text" placeholder="Message.." />
     <button onClick={sendMessage}>send</button>
    </div>
  )
}