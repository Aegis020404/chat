import {useEffect, useState} from 'react'
import './App.css'
import {io, Socket} from "socket.io-client";
import MessageInput from "./MessageInput.tsx";
import Messages from "./Messages.tsx";

function App() {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<string[]>([])

    const sendMessage = (value: string) => {
        socket?.emit('message', value)
    };
    useEffect(() => {
        const newSocket = io('http://localhost/api:8001')
        setSocket(newSocket);
    }, [setSocket])
    const messageListener = (message: string) => {
        setMessages([...messages, message])
    }
    useEffect(() => {
    socket?.on('message',messageListener)
        return () => {
            socket?.off("message",messageListener)
        }
    }, [messageListener]);
    return (
        <div className='App'>
            <MessageInput onSend={sendMessage}/>
            <Messages messages={messages}/>
        </div>
    )
}

export default App
