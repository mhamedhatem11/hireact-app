import React, { Component } from 'react'
import {Link} from "react-router-dom"
 class DataDProps extends Component {
  render() {
    return (
       
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-3">
        <h5><span className='text-danger bg-dark py-2'>Master Pizza <img src= {this.props.img} width='75px' height='75px'/></span></h5>
          <div className="image">
            <img className="image--img " src= {this.props.img} width='170px' height='250px' />
              <div className="image--ovrly">
                <div className="image--title"><span className="text-info">*</span></div>
                  <p className="image--text">  PIZZA hot</p>   
              
              
              
              </div><Link to="/About" className='btn btn-danger mt-2 mb-5'>Click Me<img src='/Pizza hut/pngwing.com (73).png ' width='40px' height='30px'/></Link>
              </div>
              </div>
              
    )
  }
}
export default DataDProps