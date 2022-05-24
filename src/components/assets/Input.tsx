import React from "react";

type InputProps = {
    text: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props:InputProps) => {
    return(
        <input type="number" onChange={(event) => props.handleChange(event)} value={props.text}/>
    )
}

export default Input;