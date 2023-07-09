import React, {Component} from 'react';
import './index.css'

class Item extends Component {

    state = {mouse:false}
    handleMouse = (flag)=>{
        return()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handleDelete = (id)=>{
        if (window.confirm('确认删除吗')){
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
                <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <label>
                        <input type={"checkbox"} onChange={this.handleCheck} checked={done} />
                        <span>{name}</span>
                    </label>
                    <button onClick={() => this.handleDelete(id) } className={"btn btn-danger"} style={{display:mouse?'block':'none'}}>删除</button>
                </li>
        );
    }
}

export default Item;
