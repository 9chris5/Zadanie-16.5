import React from 'react';

const Todo = props => 
    <li onClick = {props.onClick}>{props.text}</li>

export default Todo;