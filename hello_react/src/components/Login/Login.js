import {Component} from "react";

export default class Login extends Component{
    handleSubmit = (event)=>{
        event.preventDefault() // 阻止表单提交
        const {username,password} = this
        alert(`输入的用户名是${username.value},密码是${password.value}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    用户名:<input ref={c => this.username = c} type={"text"} name={"username"} />
                    密码:<input ref={c => this.password = c} type={"password"} name={"password"} />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
