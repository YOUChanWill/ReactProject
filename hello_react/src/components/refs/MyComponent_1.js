import {Component} from "react";

export default class MyComponent_1 extends Component{
    showData = ()=>{
        const {input1} = this
        alert(input1.value)
    }
    showData2 = ()=>{
        const {input2} = this
        alert(input2.value)
    }
    render() {
        return (
            <div>
                <input ref={currentNode=> this.input1 = currentNode} type={"text"} placeholder={"点击按钮提示"}/>&nbsp;
                <button ref={"button100"} onClick={this.showData}>点击</button>&nbsp;
                <input ref={currentNode=> this.input2 = currentNode} onBlur={this.showData2} type={"text"} placeholder={"点击按钮提示"}/>
            </div>
        );
    }
}
