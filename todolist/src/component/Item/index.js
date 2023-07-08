import React, {Component} from 'react';
import './index.css'

class Item extends Component {
    render() {
        const {id,name,done} = this.props
        return (
                <li>
                    <label>
                        <input type={"checkbox"} defaultChecked={done}/>// 默认勾选，后续可改
                        <span>{name}</span>
                    </label>
                    <button className={"btn btn-danger"} style={{display:'none'}}>删除</button>
                </li>
        );
    }
}

export default Item;
