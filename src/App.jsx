import React, {useState, useCallback}    from "react";
import './App.css';
import {InputChat, SubmitChat, ChatList} from "./components";


function App() {
  const [chat, setChat]             = useState("");
  const [chatList, setChatList]     = useState([]);

  const inputChat = useCallback((event) => {
    setChat(event.target.value)
  }, [setChat])

  const addChatList = useCallback((chat) => {
    setChatList([...chatList, chat])
  });

  return (
    <div className="App">
      <h1>チャットサンプル</h1>

      <ChatList chatList={chatList} />

      <InputChat 
        cols     = "250"
        rows     = "15"
        message  = {chat} 
        onChange = {inputChat}
      />

      <SubmitChat
        label   = "投稿"
        chat    = {chat}
        onClick = {addChatList}
      />
    </div>
  );
}

export default App;