import React, { useState } from "react";
import '../Styles/Form.css'
import Axios from "../api/axios";

const TransparentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber,setPhoneNumber]=useState('')
  const [isAttending,setIsAttending]=useState(true)

  function clearForm(){
    firstName('')
    lastName('')
    phoneNumber('')
  
  }


  const invitation = (e) => {
  console.log('hiiii');
  setIsAttending(true)

    e.preventDefault();
    Axios.post('/participation',{first_name:firstName, last_name:lastName,phone_number:phoneNumber,attending:isAttending}).then((res)=>{
      console.log('sucess',res);
      
    })
    clearForm()
  };

  return (
    <div>
    <div className="heading">
    <p>Are You Attending?</p>
    <h6>Please Fill-up the form to notify that you're attending. Thanks </h6>
    </div>
    <div className="form-container">
      <form className="transparent-form">
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        <label htmlFor="name" >Second Name </label>
        <input type="text" id="name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <label htmlFor="number">Phone Number</label>
        <input type="number" id="number" onChange={(e)=>setPhoneNumber(e.target.value)}></input>

        <button onClick={invitation}>Yes I am Attending</button>
      </form>
    </div>
    </div>
  );
};

export default TransparentForm;
