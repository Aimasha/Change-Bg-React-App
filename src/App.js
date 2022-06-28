import './App.css';
import React from "react"

class App extends React.Component{
  constructor(){
      super()
      this.state = {
          backgroundColor:"pink",
          colors: ["yellow", "red", "green", "purple", "blue", "pink", "brown"],
          hexStatus : false,
          simpleStatus: true
      }
  }



  handleClickColor = () => {
    // this.setState({simpleStatus: false})
     let string = "#"
     if(this.state.simpleStatus === true){
      let simpleColors = this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
      console.log(simpleColors)
      string = simpleColors
     }  else {
      const hexColors = "0123456789ABCDEF"
      for(let i=0;i < 6; i++){
        let index= Math.floor(Math.random()*16)
        string+=hexColors[index]
      }
     }
     this.setState({backgroundColor:string})
    }
       
    
    handleHex = () => {
      this.setState({simpleStatus: false})
    }
 
    handleSimple = () => {
      this.setState({simpleStatus: true})
    }
 
     

  render(){
    console.log(this.state.simpleStatus)
      const {backgroundColor} = this.state
      return(
      <div style={{backgroundColor:this.state.backgroundColor }} className='App'>
          <div  className='header'>
            <p className='blue'>Color Flipper</p>
            <p onClick={this.handleSimple}> Simple</p>
            <p onClick={this.handleHex}> Hex</p>
            </div>
            <div  className='main'>
              <h1>Background Color : <span style={{color:this.state.backgroundColor }}>{backgroundColor}</span></h1>
             
            </div>
            <button onClick={this.handleClickColor}>Click Me</button>
         
      </div>
      )
  }
}

export default App