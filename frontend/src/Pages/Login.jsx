import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/shopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmithandler = async (event) => {
    event.preventDefault()
    try {
      let response
      if (currentState === "Sign Up") {
        response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password })
      } else {
        response = await axios.post(`${backendUrl}/api/user/login`, { email, password })
      }
      
      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        navigate('/')
      } else {
        toast.error(response.data.message || 'Something went wrong!')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong!')
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  return (

    <form onSubmit={onSubmithandler} className="flex flex-col gap-4 items-center w-[80%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-xl">{currentState}</p>
        <hr className="border-nome h-[1.5px] w-8 bg-blue-500" />
      </div>
      {currentState === 'Login' ? '' : 
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="border border-gray-500 w-full px-3 py-1" />
      }
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="border border-gray-500 w-full px-3 py-1" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="border border-gray-500 w-full px-3 py-1" />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-right">Forgot Password?</p>
        {currentState === 'Login' ? 
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p> : 
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Already Have Account</p>}
      </div>
      <button className="cursor-pointer bg-blue-500 text-white py-2 px-8 mt-4">
        {currentState === 'Login' ? 'Log In' : "Sign Up"}
      </button>
    </form>
  )
}

export default Login
