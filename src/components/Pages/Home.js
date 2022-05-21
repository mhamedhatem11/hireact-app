import React, { Component } from 'react'
import DataMapping from './DataMapping'
import {Link} from 'react-router-dom'


 class Home extends Component {
  render() {
    return (

      <div className="container-fliud ">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 ">
                    <h1><span className='text-danger bg-dark py-2'>Master Pizza <img src='/Pizza hut/pngwing.com (9).png' width='45px' height='45px'/></span></h1>
                    <img src='/Pizza hut/pngwing.com (7).png ' className="img-fluid border border-dark border border-4 bg-dark rounded-3 " width="100%"/>
                       

                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 mt-5  align-item-center justify-conten-center text-center">
                    <h4><span className=' mhamed text-danger bg-dark py-2 '>Master Pizza <img src='/Pizza hut/pp.png.png ' width='80px' height='80px'/></span></h4>
                    <Link to='/about'><img src='/Pizza hut/pp.png.png '  className="img-fluid mt-3 mb-3" width="100%"/></Link>
                    <h4><span className=' mhamed text-danger bg-dark py-2 '>Master Pizza <img src='/Pizza hut/pngwing.com (9).png' width='80px' height='80px'/></span></h4>
                    <h5 className='bg-dark text-danger'>WE Wish You Delicious Food</h5>
                    <h1 className='bg-dark text-danger'>Delavary</h1>
                    <h1 className='bg-dark text-danger'>25 Minute</h1>
                    
                  
                    <hr />
                    </div>
                    <p className='header bg-dark text-danger mt-4'>Pizza Menu <img src='/Pizza hut/pngwing.com (48).png' width='48px' height='48px'/></p>
                    <span className=' d-flex justify-content-end'><img src='/Pizza hut/pngwing.com (35).png' width='70px' height='60px'/></span>
               
               </div><DataMapping />
                    </div>
                    </div>
                    </div>
                     
              
      
      
      
    )
  }
}
export default Home