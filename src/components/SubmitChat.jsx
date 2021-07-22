import React from "react";

const SubmitChat = (props) => {
    return (
        <button onClick={() => props.onClick(props.chat)}>
            {props.label}
        </button>
    );
};

export default SubmitChat;