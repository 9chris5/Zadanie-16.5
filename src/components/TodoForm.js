import React from 'react';

const TodoForm = props =>
    <form onSubmit = {props.onSubmitHandle}>
        <input type = "text" onChange = {props.onChangeHandle} />
        <input type = "submit" value = "Add" />
    </form>
export default TodoForm;