import React, { useContext, useEffect, useState } from 'react'
import { assets, products } from '../assets/assets'
import { useParams, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../Context/shopContext';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData  = async () => {

    products.find((item) =>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }

    })
  }

  useEffect(() =>{
    fetchProductData();
  }, [productId, products])


  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {/* <img src={assets.about_img} alt="about" /> */} 
            {
              productData.image.map((item, index)=>{
                <img onClick={()=>setImage(item)} src={item} key={index} alt="image" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0' />
              })
            }

          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>

        {/* Product information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-3 text-xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-3 text-gray-500 md:w-4/3'>{productData.description}</p>
          
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item) =>(
                  <button className={`border py-1.5 px-3 bg-gray-200 ${item === size ? 'border-orange-500 bg-gray-300' : ''}`} key={item} onClick={()=>setSize(item)} >{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-2 cursor-pointer text-sm active:bg-gray-500 active:text-aqua-500'>Add to Cart</button>
          <hr className='mt-6 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/*-- comment and review section --*/}
      <div className='mt-20'>
        <div className='flex gap-2 mb-5'>
          <p className='border border-gray-300 p-5 py-3 text-sm'>Description</p>
          <p className='border border-gray-300 p-5 py-3 text-sm'>Reviews {(122)}</p>
        </div>
        <div className='flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500'>
          <p>An e-coommerce website is an application that facilitates the buying and selling of products online</p>
          <p>E-commerce websites typically display thr products or services slong with the detailed data</p>
        </div>
      </div>
      {/* display related products */}
      <div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
