import React from 'react';
import ReactTooltip from 'react-tooltip';
import './App.css'


class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      val:''
    }
  }

  topPos=()=>{
    this.setState({val:'top'}) 
  }
  bottomPos=()=>{
    this.setState({val:'bottom'})
  }
  leftPos=()=>{
    this.setState({val:'left'})
  }
  rightPos=()=>{
    this.setState({val:'right'})
  }
  
  render(){
  return (
    <div className="app" >
    <div className='header'>
    <h1 className='heading'>React ToolTip</h1>    
     </div>
     <h3>Please select the below options to change the position of tooltip</h3>
      <button className='btn' onClick={this.topPos} value='bottom'>top</button>
      <button className='btn' onClick={this.bottomPos}>bottom</button>
      <button className='btn' onClick={this.leftPos}>left</button>
      <button className='btn' onClick={this.rightPos}>right</button>
      
      <h1 className="hover" 
      data-offset="{'top':100, 'bottom':100, 'left':100, 'right':100}" 
      data-tip="thank you <br /> for hovering over me"
      >Hover over me</h1>
      
      <ReactTooltip multiline={true} place={this.state.val}/>
      <h1>{this.state.val}</h1>
      </div>

  )

  }
}

export default App

