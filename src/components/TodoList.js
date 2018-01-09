import React from 'react';
import Todo from '../components/Todo';

const TodoList = props => {
    const mapped = props.list.map(item => <Todo key = {item.id} text = {item.text} onClick = {() => props.removeTodo(item.id)} />);
    return <ul>{mapped}</ul>
}

export default TodoList;