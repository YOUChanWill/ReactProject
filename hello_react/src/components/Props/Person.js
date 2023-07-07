import {Component} from "react";
import PropTypes from "prop-types";

export default class Person extends Component{
    // 增加限制
    static propTypes = {
        name:PropTypes.string.isRequired,
        sex:PropTypes.string,
        age:PropTypes.number
    }
    // 默认值
     static defaultProps = {
        sex:'null',
        age:18
    }
    render() {
        const {name,sex,age} = this.props
        return(
            <ul>
                <li>姓名:{name}</li>
                <li>性别:{sex}</li>
                <li>年龄:{age+1}</li>
            </ul>
        )
    }
}

