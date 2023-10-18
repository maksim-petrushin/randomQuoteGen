
import React from "react"
import getRandomCategory from "../logic/CategorySelector"
import getMyAPIKey from "../APIkey.js"
import Frame from './Frame.js'
import getColor from "../logic/ColorGetter.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevColor: "#000000",
      colorValue: "#000000",
      color: "#000000",
      quote: "",
      author: "",
      animbg: "",
      anim: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = function () {
    const newColor = getColor();
    this.setState((state)=>({
      prevColor: state.color,
      colorValue: newColor,
      animbg:" going-bg",
      anim:" going"
    }))
    const r = document.querySelector(':root');
    r.style.setProperty('--initial-val', this.state.colorValue);
    r.style.setProperty('--final-val', newColor);
    const myAPIKey = getMyAPIKey();
    const myCategory = getRandomCategory();
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + myCategory, {
		method: 'GET',
		headers: {
			'X-Api-Key': myAPIKey
		},
	})
		.then(response => response.json())
		.then(response => this.setState((state)=> ({
      quote:response[0].quote,
      author:response[0].author,
      color: state.colorValue,
      anim:"",
      animbg:""})))
		.catch(err => console.error("ASD" + err));
  };


  render() {
    let currColor = this.state.color;
    return (
      <div style={{ backgroundColor: currColor }} className={"App-header"+this.state.animbg}>
        <Frame handleClick={this.handleClick} currColor={currColor} quote={this.state.quote} author={this.state.author} anim={this.state.anim} animbg={this.state.animbg}/>
      </div>
    );
  }
}

