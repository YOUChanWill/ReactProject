import {Component} from "react";

export default class MyComponent_1 extends Component{
    constructor(props) {
        super(props);
    }
    // 状态可以不写在构造器中
    state = {isClick:true}
    render() {
        const {isClick} = this.state;
        return <h1 onClick={this.changeState}>{isClick ? '' : '别'}点我！！！</h1>
    }
    // 自定义方法，赋值语句的形式+箭头函数
    changeState = () => {
        const isClick = this.state.isClick;
        this.setState({isClick: !isClick})
    }
}
