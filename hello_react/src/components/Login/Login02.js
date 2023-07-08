import {Component} from "react";

export default class Login02 extends Component{

    state = {
        username:'',
        password:''
    }

    saveFormData = (dataType)=>{
        return (event) =>{
            this.setState({[dataType]:event.target.value})
        }

    }

    handleSubmit = (event)=>{
        event.preventDefault() // 阻止表单提交
        const {username,password} = this.state
        alert(`输入的用户名是${username},密码是${password}`)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    用户名:<input onChange={this.saveFormData('username')} type={"text"} name={"username"} />
                    密码:<input onChange={this.saveFormData('password')} type={"password"} name={"password"} />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
