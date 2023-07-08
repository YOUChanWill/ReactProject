import React, {Component} from 'react';
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className={"todo-header"}>
                <input type={"text"} placeholder={"输入任务名称"}/>
            </div>
        );
    }
}
export default Header;
