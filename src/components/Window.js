
import React from "react"
import Frame from './Frame.js'
import getColor from "../logic/ColorGetter.js"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        color: 88888
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = function(){

  };
  render(){
    let currColor  = getColor(this.state.color);
    return (
      <div  style={{backgroundColor:currColor}} className="App-header">
        <Frame handleClick={this.handleClick} currColor={currColor}/>        
        <h1 className="maksimpetrushin">by maksim petrushin</h1>
      </div>
  );
}
}

