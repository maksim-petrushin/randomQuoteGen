import React from 'react'

export default class Frame extends React.Component{
    constructor(props){
        super(props);        
    }

    render(){
        return (
        <div className="frameBox">
            <h1 className="quote">Hello asd!</h1>
            <h1 className="author">-Maksim</h1>
            <button className="generate"></button>
            <button className="twitter"></button>
        </div>);
    }
}