import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";
import Demo from "./components/Demo/Demo";

class App extends Component{
  render(){
    return (
        <div>
          <Hello/>
          <Welcome/>
          <Demo/>
        </div>
    )
  }
}
// 暴露App组件
export default App;
