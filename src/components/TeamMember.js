import React, {Component} from 'react'



class TeamMember extends Component{

  render() {

    return(
      
      
        
    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5">
     <div className="card mt-3">
     <div className='cardHeader'>
    <img style={{width: '240px', height: '400px', maxWidth: '100%'}} src = {this.props.img} />
     </div>
<div className="card-body bg-primary text-center align-item-center justify-content-center">
<h2>{this.props.name}</h2>
<h3>{this.props.position}</h3>
<h3>{this.props.phone}</h3>

</div>
</div>
</div>
 
          

  



    
    )
    
  }
}
 export default TeamMember