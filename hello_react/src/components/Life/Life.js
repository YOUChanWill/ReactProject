import {Component} from "react";
import ReactDOM from "react-dom";

export default class Life extends Component{

    state = {opacity:1}

    death = ()=>{
        // 卸载组件
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // 组件挂载完成调用
    componentDidMount() {
        this.timer = setInterval(() =>{
            let {opacity} = this.state
            opacity -= 0.1
            if (opacity <= 0) opacity = 1
            this.setState({opacity})
        },200)
    }
    // 组件将要被卸载时调用
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.timer)
    }

    // 初始化渲染、状态更新之后
    render() {

        return (
            <div>
                <h1 style={{opacity:this.state.opacity}}>hihihihihih</h1>
                <button onClick={this.death}>display</button>
            </div>
        );
    }
}
