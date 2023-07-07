import {Component} from "react";

export default class MyComponent extends Component{
    showData = ()=>{
        const {input1} = this.refs
        alert(input1.value)
    }
    showData2 = ()=>{
        const {input2} = this.refs
        alert(input2.value)
    }
    render() {
        return (
            <div>
                <input ref={"input1"} type={"text"} placeholder={"点击按钮提示"}/>&nbsp;
                <button ref={"button100"} onClick={this.showData}>点击</button>&nbsp;
                <input ref={"input2"} onBlur={this.showData2} type={"text"} placeholder={"点击按钮提示"}/>
            </div>
        );
    }
}
