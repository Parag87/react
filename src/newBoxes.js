import React  from 'react';
import './boxnew.css';
import NewBox from './newBox';

export default class NewBoxes extends  React.Component{
    constructor(){
        super();
        this.state={counter:0};
        this.go = this.go.bind(this);
        this.generatBox = this.generatBox.bind(this);
    }
    go(){
        const start = +this.num.value;
        this.num.value = "";
        this.setState({counter:start});

    }
    generatBox(){
        return <NewBox />;
    }
    render(){
      return (
            <div className="formElement">
              <input type="text" ref={node => this.num =node} />
              <button onClick={this.go}>Go</button>
              {
                Array(this.state.counter).fill(null).map((_,i) => {
                  return  <NewBox key={i} />
                })
              }
            </div>
      )
    }
}
