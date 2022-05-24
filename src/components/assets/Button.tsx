import React from 'react';


type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, a: number, b: number) => void;
    a: number;
    b: number;
    text: string;
}


export const Button = (props:ButtonProps) => {
	return(
		<button onClick={(event) => props.handleClick(event, props.a, props.b )}>{props.text}</button>
	)
}