import {Component} from "react";

export default class Login01 extends Component{

    state = {
        username:'',
        password:''
    }

    saveUsername = (event)=>{
        this.setState({username:event.target.value})
    }

    // 保存用户名到状态中
    savePassword = (event)=>{
        this.setState({password:event.target.value})
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
                    用户名:<input onChange={this.saveUsername} type={"text"} name={"username"} />
                    密码:<input onChange={this.savePassword} type={"password"} name={"password"} />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
