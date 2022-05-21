import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class About extends Component {
  render() {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
            <div className='bg-dark text-ligth'> <h1> Dalivary In Metro <span className='text-danger'>10 Minute</span></h1>
            <p> in thisuniverse most pepole aree busy with their work ... and they dont have time to prepare food ,sothey depend on pizza,for example, which is natureally delicious ...and we are here to provide the best pizza ,<span className='text-danger'>just order it</span></p>
            </div>
           </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
            <img style={{maxWidth: '600px',height: '600px' }} src='/Pizza hut/pngwing.com (2).png ' className="img-fluid" width="100%"/>
            </div>
           
               <hr /> 
               </div>
               </div>
    )
  }
}
export default About