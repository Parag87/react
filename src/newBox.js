import React  from 'react';

export default class NewBox extends  React.Component{
    constructor(){
        super();
        this.state = {color:''};
        setInterval(() => {
          const obj = NewBox.getColors();
          const str = `rgba(${obj.r},${obj.g},${obj.b},${obj.a})`;
          this.setState({color:str});
        },100)
    }
  static getColors(){
    return {
      r:NewBox.generatorColor(),
      g:NewBox.generatorColor(),
      b:NewBox.generatorColor(),
      a:Math.random(0,1)};
  }
  static generatorColor(){
    return Math.floor(Math.random() * 255);
  }
  render(){
    return (
     <div style={{backgroundColor:this.state.color}} className="boxNew"></div>
    )
  }
}
