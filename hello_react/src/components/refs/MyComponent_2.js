import {Component} from "react";
import React from "react";

export default class MyComponent_2 extends Component{
    // 调用后返回一个容器。可以存储被ref所标识的节点,只能用于一个
    myRef = React.createRef();
    myRef1 = React.createRef();
    showData = ()=>{
        alert(this.myRef.current.value)
    }
    showData2 = ()=>{
        alert(this.myRef1.current.value)
    }
    render() {
        return (
            <div>
                <input ref={this.myRef} type={"text"} placeholder={"点击按钮提示"}/>&nbsp;
                <button ref={"button100"} onClick={this.showData}>点击</button>&nbsp;
                <input ref={this.myRef1} onBlur={this.showData2} type={"text"} placeholder={"点击按钮提示"}/>
            </div>
        );
    }
}
