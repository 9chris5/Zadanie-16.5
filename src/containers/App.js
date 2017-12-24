import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';



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
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        console.log(data);
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className = {style.TodoApp}>
                <Title title = 'Apka Webpack+React!' counter = '(0)' />
                <TodoList list = {this.state.data.map(item => <Todo key = {item.id} text = {item.text} onClick = {() => this.removeTodo(item.id)} />)} />
            </div>
        );
    }
}

export default App;