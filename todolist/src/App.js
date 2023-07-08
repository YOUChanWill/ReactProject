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
        {id:'003',name:'AAA',done:true},
        ]}
    render() {
        const {todos} = this.state
        return (
            <div className={"todo-container"}>
                <div className={"todo-wrap"}>
                    <Header/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

