import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class News extends Component {
  render() {
    return (
      <div className="container-fliud ">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
                        <p className="lead text-light  bg-dark">  <span className='text-danger mb-5 bg-dark'><h1>This Is Pizza ...</h1></span> neque perspiciatis! ipsum, dolor sit amet consectetur adipisicing elit. Error in provident quis earum enim sapiente sint obcaecati distinctio inventore deleniti, nihil voluptas eligendi repellendus ab modi facere id? Ad, modi totam molestiae iste animi voluptas molestias excepturi fugiat sed veniam sapiente architecto consequatur nam numquam error omnis dolore illum inventore quasi culpa aperiam aliquam eum assumenda expedita! Cumque iusto debitis suscipit veniam nemo officia incidunt voluptate assumenda, ipsam corporis aut neque, minima quis ut minus sunt quod deserunt eaque sequi vitae a expedita, dolorem vero perferendis? In eaque quos fugiat, accusamus error veritatis numquam non distinctio sequi maxime sunt enim.<Link to="/Wonderfull" class="btn btn-danger text-ligt mt-3 ms-3">Click Hear <img src='/Pizza hut/pngwing.com (51).png' width='50px' height='35px'/></Link></p>

                   </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
                    <img style={{maxWidth: '600px',height: '600px' }} src='/Pizza hut/pngwing.com (4).png ' className="img-fluid" width="100%"/>
                    </div>
                   
                       <hr /> 
                       <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
                        <p className="lead text-light  mb-5 bg-dark">  <span className='text-danger  bg-dark'><h1> How To Hot Pizza</h1></span>  ullam provident quasi, odio ut ducimus voluptas at eum amet illo aspernatur sit! Vero exercitationem suscipit aliquid neque perspiciatis! ipsum, dolor sit amet consectetur adipisicing elit. Error in provident quis earum enim sapiente sint obcaecati distinctio inventore deleniti, nihil voluptas eligendi repellendus ab modi facere id? Ad, modi totam molestiae iste animi voluptas molestias excepturi fugiat sed veniam sapiente architecto consequatur nam numquam error omnis dolore illum inventore quasi culpa aperiam aliquam eum assumenda expedita! Cumque iusto debitis suscipit veniam nemo officia incidunt voluptate assumenda, ipsam corporis aut neque, minima quis ut minus sunt quod deserunt eaque sequi vitae a expedita, dolorem vero perferendis? In eaque quos fugiat, accusamus error veritat.<Link to="/Contact" class="btn btn-danger mt-4 ms-5">Click Hear <img src='/Pizza hut/pngwing.com (51).png' width='50px' height='35px'/></Link></p>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
                    <img style={{maxWidth: '100%', height: '500px'}} src='/Pizza hut/pizza 8.jpg '/>
                    </div>
                    </div>
                    <hr />
                    <div class="row align-items-center justify-content-center">
                    <div class="col-md">
                   <img src="/Pizza hut/pngwing.com (6).png " className="img-fluid" />
                    </div>
                    <div class="col-md py-3 bg-dark">
            <h1 class="lead py-3 text-danger bg-dark"> Pizza Cheess</h1>
            <p class="lead text-light">This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maiores excepturi veniam qui corporis repellat exercitationem facere illo obcaecati tenetur.</p>
            <hr />
                </div>
                

                <hr />
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5">
                        <p className="lead text-light  mb-5 bg-dark">  <span className='text-danger bg-dark '><h1> How To Hot Pizza</h1></span>  ullam provident quasi, odio ut ducimus voluptas at eum amet illo aspernatur sit! Vero exercitationem suscipit aliquid neque perspiciatis! ipsum, dolor sit amet consectetur adipisicing elit. Error in provident quis earum enim sapiente sint obcaecati distinctio inventore deleniti, nihil voluptas eligendi repellendus ab modi facere id? Ad, modi totam molestiae iste animi voluptas molestias excepturi fugiat sed veniam sapiente architecto consequatur nam numquam error omnis dolore illum inventore quasi culpa aperiam aliquam eum assumenda expedita! Cumque iusto debitis suscipit veniam nemo officia incidunt voluptate assumenda, ipsam corporis aut neque, minima quis ut minus sunt quod deserunt eaque sequi vitae a expedita, dolorem vero perferendis? In eaque quos fugiat, accusamus error veritat.</p>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5">
                    <img style={{maxWidth: '100%', height: '500px'}} src='/Pizza hut/pngwing.com (9).png '/>
                    </div>
                  
                    
                        <hr className='m-3'/>
                    <img src='/Pizza hut/pizza 8.jpg ' class="img-fluid" width="100%" />
                    <hr className='m-3'/>
                    <img src='/Pizza hut/pizp.jpg ' class="img-fluid" width="100%" />   
                    <span className='text-danger mt-5 mb-5 text-center align-item-center bg-dark'>
                    <h2>Thank you for your shopping <img src='/Pizza hut/pngwing.com (9).png' width='45px' height='45px'/></h2>
                    </span>
              </div>  
             
              
                    
            </div>
                      
            </div>
            </div>
            
       
    )
  }
}
export default News