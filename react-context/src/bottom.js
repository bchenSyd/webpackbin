import React, {Component, PropTypes} from 'react'
class Bottom extends Component {
    static contextTypes= {
        number: React.PropTypes.number.isRequired
    }
    
    //shouldComponentUpdate returns `true` by default,
    //so render gets called and new vDom gets returned everytime;
    render () {
        bin.log('bottom re-render')
        return <h1>display from bottom :   {this.context.number}</h1>
    }
}
export default Bottom