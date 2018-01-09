import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import uuid from 'uuid';



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
            }]
        };
    }
    onChangeHandle(event) {
        console.log(event.target.value);
        this.setState({
            todoText: event.target.value
        });
    }
    addTodo(event) {
        event.preventDefault();
        const todo = {
            text: this.state.todoText,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className = {style.TodoApp}>
                <Title title = 'Apka Webpack+React!' counter = {this.state.data.length} />
                <TodoList list = {this.state.data} removeTodo = {this.removeTodo.bind(this)} />
                <TodoForm onSubmitHandle = {this.addTodo.bind(this)} onChangeHandle = {this.onChangeHandle.bind(this)} />
            </div>
        );
    }
}

export default App;