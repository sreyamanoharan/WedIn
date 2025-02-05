import React, { useState } from "react";
import '../Styles/Form.css'

const TransparentForm = () => {
  const [name, setName] = useState("");

  const invitation = (e) => {
    e.preventDefault();
    alert(`Invitation sent to ${name}`);
  };

  return (
    <div>
    <div className="heading">
    <p>Are You Attending?</p>
    </div>
    <div className="form-container" style={{backgroundImage:URL}}>
      <form className="transparent-form">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" />

        <button onClick={invitation}>Are You Attending</button>
      </form>
    </div>
    </div>
  );
};

export default TransparentForm;
