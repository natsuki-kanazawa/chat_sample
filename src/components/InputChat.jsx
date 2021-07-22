import React from "react";

const InputChat = (props) => {

    return (
        <textarea
            cols      = {props.cols}
            rows      = {props.rows}
            onChange  = {props.onChange}
        >
            {props.message}
        </textarea>
    );
};

export default InputChat;