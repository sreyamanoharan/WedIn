import React, { useState } from 'react'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    
  return (
    <div>
        <form onSubmit={handleLogin}>

     
        <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='sumbit'>Login</button>
        </form>
    </div>
  )
}

export default Login