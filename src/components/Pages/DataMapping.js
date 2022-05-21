import React, {Component} from 'react'
import Data from '../DataHome_Srction/Data'
import DataProps from '../DataHome_Srction/DataProps'




class DataMapping extends Component{

    constructor(){
        super()
        this.state = 
           { Data : Data}
        
    }

    render() {
        const members = this.state.Data.map(member =><DataProps 
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

export default DataMapping