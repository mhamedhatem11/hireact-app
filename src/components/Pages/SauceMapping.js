import React, { Component } from 'react'
import DataS from'../DataSauce/DataS'
import DataSProps from '../DataSauce/DataSProps'
 class SauceMapping extends Component {
   constructor(){
     super()
     this.state = 
              {DataS : DataS}
   }
  render() {

    const members = this.state.DataS.map(member =><DataSProps 
      key={member.id}
      img={member.img}
      
      />)

      

  return(
      <div className='container'>
      <div className='row'>
      {members}
      
      </div>
      </div>

      )
    }
}

export default SauceMapping