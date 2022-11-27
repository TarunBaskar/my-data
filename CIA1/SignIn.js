
import React, { Component,useState } from 'react'
function SignIn() {
    const initValues={username:'',email:'',password:''};
    const[formValues,setformValues]=useState(initValues);
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);


     const handleChange=(event) =>{
         const{id,value}=event.target;
         setformValues({...formValues,[id]:value})
         
     }
    const handleSubmit=(event)=>{
        event.preventDefault();
       setFormErrors( validate(formValues));
       setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        
        const reg1= new RegExp("[A-Za-z]");
        const reg2= new RegExp("[0-9]");
        const reg3= new RegExp("[A-Z]");
        const reg4= new RegExp("[!@#$&]");
        if(!values.username)
             errors.username="username is empty";
        else if(values.username.length<5)
               errors.username="username is below 5 character";
               
        else if(!values.email)
             errors.email="email is required";
        else if(values.email.length<5)
               errors.username="username is below 5 character";
        else if(!values.password)
             errors.email="password is required";
        else if((reg1.test(values.password))&(reg2.test(values.password) &(reg3.test(values.password)) &(reg4.test(values.password))))
             errors.password=<p style={{color:'green'}}>Password is VeryStrong </p>;
        else if((reg1.test(values.password))&(!reg2.test(values.password) &(!reg3.test(values.password)) &(!reg4.test(values.password))))
        
              errors.password=<p style={{color:'red'}}>Password is weak </p>;
         else if((reg1.test(values.password))&&(reg2.test(values.password) &(!reg3.test(values.password)) &(!reg4.test(values.password))))

              errors.password=<p style={{color:'orange'}}>password is Good</p>;
         else if((reg1.test(values.password))&&(reg2.test(values.password) &&(reg3.test(values.password)) &(!reg4.test(values.password))))

              errors.password=<p style={{color:'lightgreen'}}>password is Strong</p>;
        

                return errors;
    }
    return ( 
        <>
    <body style={{backgroundColor:"red"}}>
        <h1 style={{textAlign:"center"}}>User Registration form</h1>
        <div className='container' style={{border:'5px soild black',padding:'20px',backgroundColor:"yellow",borderRadius:5}}>
           
            <div >
            
            <form>
        
            <div className='row' >
                <label>Username</label>
                <input type="text" id="username" placeholder='Type usename here' value={formValues.username} onChange={handleChange} onMouseLeave={handleSubmit}/> 
            </div>
            <p style={{color:"red"}}>{formErrors.username}</p>
            <div className='row' >
                <label>Email</label>
                <input type="email" id="email" placeholder='Type email  here' value={formValues.email} onChange={handleChange} onMouseLeave={handleSubmit}/> 
            
            </div>
            <p style={{color:"red"}}>{formErrors.email}</p>
            <div className='row' >
                <label>Password</label>
                <input type="password" id="password" placeholder='Type password  here' value={formValues.password} onChange={handleChange}  onMouseLeave={handleSubmit}/> 
            
            </div>
        
            <p style={{color:"red"}}>{formErrors.password}</p>
        </form>
        
        </div>
        </div>
        </body>
        </>
     );
}

export default SignIn;