import React      from "react";
import {Chat}     from "./index";

const ChatList = (props) => {

    return (
        <div>
            {props.chatList.map((chat, index) => {
                return <Chat chat={chat} key={index} />
            })}
        </div>
    );
};

export default ChatList;