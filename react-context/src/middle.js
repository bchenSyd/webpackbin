import React,{Component} from 'react'
import Middle2 from './middle-2'
import ShallowEqual from './shallowEqual'

class Middle extends Component{
  
  //******************************************************************
  // this is the key! you must provide this although its not used
  // otherwise shouldCompnentUpdate
  // will return false and Bottom won't get updated
      static contextTypes= {
        number: React.PropTypes.number.isRequired
     }
  //******************************************************************
      shouldComponentUpdate(nextProps, nextState, nextContext) {
        var shouldUpdate = !ShallowEqual(this.props , nextProps) ||
               !ShallowEqual(this.state , nextState) ||
               !ShallowEqual(this.context ,nextContext)
        bin.log(`************ should update = ${shouldUpdate} this.context = ${JSON.stringify(this.context)} `)
        return shouldUpdate
      }
  
  
   render() {
     bin.log('middle re-render')
     return <Middle2 />
   }
}

export default Middle