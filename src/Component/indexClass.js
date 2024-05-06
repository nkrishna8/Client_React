import React, { Component, Fragment } from 'react'

export default class ComponentA extends Component {
    constructor(){
        super();
        console.log("PPPIN++");
        this.state ={
            title:'Physics'
        }
    } 
    
  render() {
    console.log(this.props);
    let data=this.props.data;
    const changeSub =() =>{
        // this.state.title == "Physics" ? this.setState({title:'Chemistry'}) : (this.state.title == "Chemistry") ? 
        // this.setState({title:'Physics'}) : "Choice Load";
        this.setState({title:'Chemistry'})
    }

    return (
      <>
        <h2>Kolkata</h2>
        <h3>Welcome {data}</h3>
        <h2>Your Choice : {this.state.title}</h2>
        <button onClick={changeSub}>Subject Change</button>
        <br></br>
        <button onClick={this.props.clickFun}>clickFun</button>
      </>
    )
  }
}

