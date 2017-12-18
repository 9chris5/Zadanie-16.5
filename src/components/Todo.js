import React from 'react';

const Todo = props => 
    <li key = {props.id}>{props.text}</li>

export default Todo;