import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client"; 

function ChatBot() {
  const [chats,setChats]=useState([]);
  const socket = io(process.env.REACT_APP_BACKEND_URL);

  useEffect(()=>{
    socket.on("connect", () => {
        const user=localStorage.getItem("user")!=""?localStorage.getItem("user"):"Guest";
    
        const newChat=`Hello ${user}, let's start your golden journey!`;
    
        setChats([...chats,newChat]);
        console.log("We are connected to the chatbot server");
      });
  },[])

 

  socket.on("Answer",(obj)=>{
    const reply=obj.Reply;
    console.log(reply)
    setChats([...chats,reply]);
    console.log(chats)
    // console.log("We got the data");
  })

  const utility=()=>{
    const chat=document.getElementById("chat");
    if(!chat.value){
        return;
    }
    else{
        //call socket.io
        socket.emit("Question",chat.value)

    }
  }
  return (
    <div className='chatBot'>
        <input width={"100%"} id="chat"></input>
        <button type='submit' onClick={()=>utility()}/>
    </div>
  )
}

export default ChatBot;