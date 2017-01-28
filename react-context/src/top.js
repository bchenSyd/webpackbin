import React, {Component, PropTypes} from 'react'
import Middle from './middle'

class Top extends Component{

  static childContextTypes = {
    number: PropTypes.number.isRequired
  }
  
  constructor() {
    super()
    this.state= { number: 0 };
  }

  test(){
     this.state.number +=10;
    // Captain Call: I'm re-rendering, all my children components, 
    // please check if you should re-render yourselves!
     this.forceUpdate()   
  }


  getChildContext () {
    return { number: this.state.number };
  }

  render() {
      bin.log('top re-render')
          return <div> 
                    <h2>Top updates its context -> Middle -> Middle2 -> Bottom display context value</h2>
                    <button onClick={this.test.bind(this)} >Incriment Top State Value</button>
                    <Middle />
                </div>;    
      }
  
}



export default Top