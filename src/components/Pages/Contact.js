import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function Contact () {

  
	const [name , setName] = useState('');
	const [age , setAge] = useState('');
	const [email , setEmail] = useState('');
	const [address , setAddress] = useState('');
	const [password , setPassword] = useState('');
	const [confPassword , setConfPassword] = useState('');

	// function to update state of name with
	// value enter by user in form
	const handleChange =(e)=>{
	setName(e.target.value);
	}
	// function to update state of age with value
	// enter by user in form
	const handleAgeChange =(e)=>{
	setAge(e.target.value);
	}
	// function to update state of email with value
	// enter by user in form
	const handleEmailChange =(e)=>{
	setEmail(e.target.value);
	}
	// set Address
	const handleAddressChange =(e)=>{
		setAddress(e.target.value);
		}


	// function to update state of password with
	// value enter by user in form
	const handlePasswordChange =(e)=>{
	setPassword(e.target.value);
	}
	// function to update state of confirm password
	// with value enter by user in form
	const handleConfPasswordChange =(e)=>{
	setConfPassword(e.target.value);
	}
	// below function will be called when user
	// click on submit button .
	const handleSubmit=(e)=>{
	if(password!=confPassword)
	{
		// if 'password' and 'confirm password'
		// does not match.
		alert("password Not Match");
	}
	else{
		// display alert box with user
		// 'name' and 'email' details .
		alert('A form was submitted with Name :"' + name +
		'" ,Age :"'+age +'" and Email :"' + email + '"');
	}
	e.preventDefault();

	}
return (

   <div className='chef'><img src='/Pizza hut/pngwing.com (75).png' width='150'/>
   <hr className='text-dark' />
   
	<div className="create">
  
  
	<form onSubmit={(e) => {handleSubmit(e)}}>
	{/*when user submit the form , handleSubmit()
		function will be called .*/}
		<label >
		Name:
		</label>
		<input type="text" value={name} required onChange={(e)=> {handleChange(e)}} />
			
		{ /*when user write in name input box , handleChange()
			function will be called. */}
		<label >
		Age:
		</label>
		<input type="text" value={age} required onChange={(e)=> {handleAgeChange(e)}} />
			
			{ /*when user write in age input box , handleAgeChange()
			function will be called. */}
			<label >
			Address:
			</label>
			<input type="address" value={address} required onChange={(e)=> {handleAddressChange(e)}} />	
			
	

			{/*when user write in age input box , handleAgeChange()
			function will be called. */}

		<label>
		Email:
		</label>
		<input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} />
				
		{/* when user write in email input box , handleEmailChange()
			function will be called.*/}
		<label>
		Password:
		</label>
		<input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} />
			
			{/* when user write in password input box ,
				handlePasswordChange() function will be called.*/}
		<label>
		Confirm Password:
		</label>
		<input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} />
			
				{/* when user write in confirm password input box ,
					handleConfPasswordChange() function will be called.*/}
		<input type="submit" value="Submit"/>
	</form>
  </div>
  
  
   <hr className='text-dark' />
   
   </div>
	
);
}

export default Contact;