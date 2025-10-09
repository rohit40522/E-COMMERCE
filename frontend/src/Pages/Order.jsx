import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/shopContext'
import Title from '../Components/Title';
import axios from 'axios';

const Order = () => {
  const { backendUrl, token, products, currency, allOrderItem } = useContext(ShopContext);
  const [orderData, setSortedData] = useState([]);


  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });

      if (response.data.success) {
        let allOrderItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrderItem.push(item);
          });
        });

        // Corrected this line: Call reverse() on the array before updating the state
        setSortedData(allOrderItem.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    loadOrderData();
  });


  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'My '} text2={'Orders'} />
      </div>

      <div>
        {
          orderData.slice(1, 4).map((item, index) => (
            <div key={index} className='py-4 border-t text-gray-600 flex flex-col md:flex-row md:tems-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div >
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-2 text-base text-gray-600'>
                    <p className='text-md'>{currency} {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-500'>{new Date(item.date).toDateString()} </span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-500'>{item.paymentMethod} </span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-blue-500 '></p>
                  <p className='text-sm text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border border-white px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'>Track Order</button>
              </div>

            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Order
