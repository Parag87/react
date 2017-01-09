import React from 'react'
import './timer.css'

export default class Timer extends React.Component{
    constructor(props){
      super(props);
      this.state = {counter:0};
      this.timer = null;
      this.go = this.go.bind(this);
    }

    go(){
        const start = +this.num.value;
        this.num.value = "";
        this.setState({counter:start});
        const timer = setInterval(() => {
        const counter =  this.state.counter - 1;
          if(counter < 0){
            clearInterval(timer);
          }
          else{
            this.setState({counter});
          }
        },1000)
    }

    render(){
      return (
        <div className="timer">
          <h1>Timer</h1>
          <input type="text" ref={node => this.num =node}/>
          <button onClick={this.go}>Go</button>
          <div className="count">{this.state.counter}</div>
        </div>
      )
    }

}
