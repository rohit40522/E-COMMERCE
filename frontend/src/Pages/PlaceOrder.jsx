import React, { useState } from 'react'
import Title from '../Components/Title';
import CartTotal from '../Components/cartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/shopContext';
import axios from 'axios';
import { toast} from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, deliveryFee, products} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'', 
    phone:'', 
    street:'',
    city:'',
    state:'',
    zipCode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data, [name]:value}))

  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try{
      let orderItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      }

      switch(method){
        case 'cod':{
          const response = await axios.post(backendUrl+'/api/order/place', orderData, {headers:{token}});
          if(response.data.success){
            setCartItems({});
            navigate('/orders')
          }
          else{
            toast.error(response.data.message)
          }
          break;
        }
        case 'stripe' : {
          const response = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers:{token}})
          if(response.data.success){
            const {session_url} = sessionStripe.data
            window.location.replace(session_url)
          }
          else{
            toast.error(responseStripe.data.message)
          }
          break;
        }
        default:{
          break;
        }
      }

    }catch(error){
      console.log(error)
      toast.error(error.message)

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row gap-4 justify-between pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ----------left side ----------*/}
      <div className='flex flex-col gap-4 w-full  sm:max-w-[480px]'>
          
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'  Information'}/>
        </div>

        <div className='flex gap-3'>
          <input type="text" onChange={onChangeHandler} name='firstName' value={formData.firstName} placeholder='First name (Required)*' className='border border-gray-300 rounded py-2 px-4 w-full' required/>
          <input type="text" onChange={onChangeHandler} name='lastName' value={formData.lastName}  placeholder='Last name ' className='border border-gray-300 rounded py-2 px-4 w-full' />
        </div>
        <input type="tel" onChange={onChangeHandler} name='phone' value={formData.phone}  placeholder='Phone Number' className='border border-gray-300 rounded py-2 px-4 w-full' />
        <input type="text" placeholder='House No., Building Name' className='border border-gray-300 rounded py-2 px-4 w-full' />
        <input type="text" placeholder='Road Name, Area, Colony' className='border border-gray-300 rounded py-2 px-4 w-full' />


        <div className='flex gap-3'>
          <input type="text" onChange={onChangeHandler} name='city' value={formData.city}  placeholder='City' className='border border-gray-300 rounded py-2 px-4 w-full' />
          <input type="text" onChange={onChangeHandler} name='state' value={formData.state}  placeholder='State' className='border border-gray-300 rounded py-2 px-4 w-full' />
        </div>
        <div className='flex gap-3'>
          <input type="text" onChange={onChangeHandler} name='zipcode' value={formData.zipCode}  placeholder='Pincode' className='border border-gray-300 rounded py-2 px-4 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-2 px-4 w-full' />
        </div>
      </div>

      {/* ----------right side ----------*/}
      <div className=' '>
        <div className='mt-10 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-10'>
          <Title text1={'Payment'} text2={'  Method'}/>

          {/* ------------Payment Method Selection------------*/}
          <div  className='flex gap-3 flex-col lg:flex-row mt-3 border-0 focus:outline-none'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-4 h-4 border rounded-full ${method === 'stripe' ? 'bg-blue-500' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p  className={`min-w-4 h-4 border rounded-full ${method === 'razorpay' ? 'bg-blue-500' : ''}`}></p>
              <img src={assets.razorpay_logo} alt="" />
            </div>

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-blue-500' : ''}`}></p>
              <p className='text-blue-500 text-sm font-medium mx-4'>Cash on Delivery</p>
            </div>
          </div>

          <div className='w-full text-end mt-8 '>
            <button type='submit' className='bg-black text-white cursor-pointer p-3 pl-10 pr-10'>Place Order</button>
          </div>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
