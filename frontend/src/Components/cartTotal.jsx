import React from 'react'
import { ShopContext } from '../Context/shopContext';
import Title from './Title';
import { useContext } from 'react';


const CartTotal = () => {

    const { currency, deliveryFee, getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"Cart"} text2={"Total"} />
        </div>

        <div className='flex flex-col gap-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount() === 0 ? 0: getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>shipping Fee</p>
                <p>{currency} {deliveryFee}</p>
                
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0: getCartAmount()+deliveryFee}.00</b>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotal

