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
    <h6>Please Fill-up the form to notify that you're attending. Thanks </h6>
    </div>
    <div className="form-container">
      <form className="transparent-form">
        <label htmlFor="name">First Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="name">Second Name </label>
        <input type="text" id="name" />
        <label htmlFor="number">phone</label>
        <input type="number" id="number"></input>

        <button onClick={invitation}>Are You Attending! Yes I am Attending</button>
      </form>
    </div>
    </div>
  );
};

export default TransparentForm;
