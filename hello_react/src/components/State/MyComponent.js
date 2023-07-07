import {Component} from "react";

export default class MyComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {isClick:true}
        this.changeState = this.changeState.bind(this)
    }
    render() {
        const {isClick} = this.state;
        return <h1 onClick={this.changeState}>{isClick ? '' : '别'}点我！！！</h1>
    }
    changeState(){
        const isClick = this.state.isClick;
        this.setState({isClick: !isClick})
    }
}


