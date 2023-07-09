import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import PropTypes from "prop-types";

class List extends Component {

    static propTypes = {
        todos:PropTypes.func.isRequired,
        addTodo:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired,
    }

    render() {
        const {todos,updateTodo,deleteTodo} = this.props

        return (
            <ul className={"todo-main"}>
                {
                    todos.map( todo =>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}
export default List;
