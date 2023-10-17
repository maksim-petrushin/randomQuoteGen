import React from 'react'

export default class Frame extends React.Component{
    constructor(props){
        super(props);           
    }
    
    render(){
        return (
        <div className="frameBox" >
            <div className="topPart">
                <h1 className="quote" style={{color:this.props.currColor}}>Hello asd!</h1>
                <h1 className="author" style={{color:this.props.currColor}}>-Maksim</h1>
            </div>
            <div className="bottomPart">
                <button className="generate" onClick={this.props.handleClick}>New quote</button>
                <button className="twitter">Tweet</button>
            </div>
        </div>);
    }
}