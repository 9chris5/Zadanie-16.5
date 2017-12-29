import React from 'react';

const TodoForm = props =>
    <form>
        <input type = {props.text} value = "New task" />
        <input type = "submit" value = "Add" onClick = {props.onClick}/>
    </form>
export default TodoForm;