import React, { Component } from 'react'
import DataD from '../DataDrink/DataD'
import DataDProps from '../DataDrink/DataDProps'

 class DataDMapping extends Component {
     constructor(){
         super()
         this.state =
                {DataD : DataD}
     }
  render() {

    const members = this.state.DataD.map(member =><DataDProps 
        key={member.id}
        img={member.img}
        
        />)

    return (
        <div className='container'>
        <div className='row'>
        {members}
        </div>
        </div>
    )
  }
}
export default DataDMapping