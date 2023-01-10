import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled from 'styled-components'
import { setToken } from '../lib/auth'

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #1c92d2, #f2fcfe);
  h1{
    font-size: 4.5vw;
    margin-top: 5%;
    color: #f2fcfe;
  }
  form{
    display: flex;
    flex-direction: column;
  }
`
const Login = () => {
  const [loginData , setLoginData] = useState({
    identifier : '',
    password : ''
  })
  const handleFormSubmission = async (e: FormEvent) => {
    e.preventDefault();
    const login = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: loginData.identifier,
        password: loginData.password
      })
    })
    const res = await login.json()
    console.log(res,"api data sent")
    setToken(res)
  }
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({...loginData, [e.target.name]: e.target.value})
  }
  console.log(loginData,"your creds")
  return (
    <LoginBlock>
      <h1>Welcome</h1>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor='identifier'>Username</label>  
        <input onChange={handleChange} id='identifier' placeholder='Enter username' name='identifier' required/>
        <input onChange={handleChange} id='password' type='password'  placeholder='Enter password' name='password' required/>
        <label htmlFor='password'>Password</label>
        <input type="submit" value="Sign in"/>
      </form>
    </LoginBlock>
  )
}

export default Login
