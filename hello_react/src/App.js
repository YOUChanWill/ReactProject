import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Wlecome from "./components/Welcome/Welcome";

class App extends Component{
  render(){
    return (
        <div>
          <Hello/>
          <Wlecome/>
        </div>
    )
  }
}
// 暴露App组件
export default App;
