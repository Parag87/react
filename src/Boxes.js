import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  getColors(){
    return {
      r:this.generatorColor(),
      g:this.generatorColor(),
      b:this.generatorColor(),
      a:Math.random(0,1)};
  }
  generatorColor(){
    return Math.floor(Math.random() * 255);
  }
    render(){
          return (
              <div>
                <h1>Boxes</h1>
                {
                  Array(10).fill(null).map((_,i) => {
                    return  <Box key={i} colors={this.getColors()} />
                  })
                }
              </div>
          )
    }
}
