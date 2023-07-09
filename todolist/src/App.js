import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import './App.css'
import {Component} from "react";


export default class App extends Component{

    // 初始化状态
    state = {todos:[
        {id:'001',name:'YYY',done:true},
        {id:'002',name:'ZZZ',done:false},
        {id:'003',name:'XXX',done:false},
        {id:'004',name:'AAA',done:true},
        ]}

    // 接收的参数是todo对象
    addTodo = (todoObj)=>{
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        this.setState({todos:newTodos})
    }

    updateTodo = (id,done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id === id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }

    checkAllTodo = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map(todoObj =>{
            return {...todoObj,done}
        } )
        this.setState({todos: newTodos})
    }

    deleteTodo = (id)=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }

    clearDone = ()=>{
        const {todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }


    render() {
        const {todos} = this.state
        return (
            <div className={"todo-container"}>
                <div className={"todo-wrap"}>
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
                </div>
            </div>
        );
    }
}

