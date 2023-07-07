import {Component} from "react";
import PropTypes from "prop-types";

function Person01(props){
    const {name,sex,age} = props
    return(
        <ul>
            <li>姓名:{name}</li>
            <li>性别:{sex}</li>
            <li>年龄:{age}</li>
        </ul>
    )
}
// 增加限制
Person01.propTypes = {
    name:PropTypes.string.isRequired,
    sex:PropTypes.string,
    age:PropTypes.number
}
// 默认值
Person01.defaultProps = {
    sex:'null',
    age:18
}
export default Person01

