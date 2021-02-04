import React, {Component} from 'react'

class ClearBurguer extends Component{
    render(){
        return(
            <button onClick={(e)=> this.props.clearBurger(e)}>Clear Burguer Stack</button>
        )
    }
}

export default ClearBurguer