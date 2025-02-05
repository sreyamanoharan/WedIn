import React, { useState } from 'react'

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
  return (
    <div>
        <form action="">
            <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" placeholder='your email' value={email} />
        </form>
    </div>
  )
}

export default Register