
import React from "react"
import getRandomCategory from "../logic/CategorySelector"
import getMyAPIKey from "../APIkey.js"
import Frame from './Frame.js'
import getColor from "../logic/ColorGetter.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 11881888,
      quote: "",
      author: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = function () {

    const myAPIKey = getMyAPIKey();
    const myCategory = getRandomCategory();
    fetch('https://api.api-ninjas.com/v1/quotes?category=' + myCategory, {
		method: 'GET',
		headers: {
			'X-Api-Key': myAPIKey
		},
	})
		.then(response => response.json())
		.then(response => this.setState({
      quote:response[0].quote,
      author:response[0].author,
      color: Math.floor(Math.random() * 16777215)}))
		.catch(err => console.error(err));
  };


  render() {
    let currColor = getColor(this.state.color);
    return (
      <div style={{ backgroundColor: currColor }} className="App-header">
        <Frame handleClick={this.handleClick} currColor={currColor} quote={this.state.quote} author={this.state.author}/>
        <h1 className="maksimpetrushin">by maksim petrushin</h1>
      </div>
    );
  }
}

