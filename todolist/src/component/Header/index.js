import React, {Component} from 'react';
import PropTypes from "prop-types";
import './index.css'

class Header extends Component {

    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }


    handleKeyUp = (event)=>{
        // 解构赋值获取keycode和target
        const {keyCode,target} = event
        // 判断是否回车按键
        if (keyCode !== 13) return
        if (target.value.trim() === ''){
            alert('输入不能为空')
            return;
        }
        // 准备todo对象
        const todoObj = {id:Date.now(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value = ''
    }
    render() {
        return (
            <div className={"todo-header"}>
                <input onKeyUp={this.handleKeyUp} type={"text"} placeholder={"输入任务名称"}/>
            </div>
        );
    }
}
export default Header;
