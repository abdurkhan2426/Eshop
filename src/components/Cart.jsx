import React from 'react'
import { useState } from 'react';
import NavBar from './navbar'
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct, updateQuantity } from '../Slices/cartSlice';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    const cartArray = useSelector((state)=> state.cart.cartList)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    console.log(cartArray)

    function incQuantity(id, itemsQuantity){
        
        dispatch(updateQuantity(id, itemsQuantity))
    }

    function decQuantity(id, itemsQuantity){
        if(itemsQuantity > 0){
            dispatch(updateQuantity(id, itemsQuantity))
        }
    }

 

  return (
    <>
        <NavBar />
        <p className='ml-5 text-xl font-bold mt-10 mb-10'>SHOPPING CART</p>

        <div className='flex flex-row mx-4'>
            <p className='flex-none'>PRODUCT</p>
            <div className=' flex-1'></div>
            <p className='flex-none'>TOTAL</p>
        </div>

        <div className=' border-yellow-400 mx-4 border-2'></div>

        {cartArray.map((item) => (
            <div className='flex flex-row mx-4 m-2 '>
            <div className='size-52 mr-2'>
                <img src={item.images[0]} alt="" />
            </div>

            <div className='mx-2'>
                <p className='font-bold'>{item.title}</p>
                <p>${item.price}</p>
                <p className='text-sm'>Color:{item.color}</p>
                <p className='text-sm'>Size:{item.size}</p>
                
            </div>

            <div className='flex-1'></div>

            <div className=''>
                <p className='mb-5 ml-8'>${item.productQuantityPrice}</p>
                <div className='border-2 w-20 flex flex-row'>
                    <button className='text-2xl pl-1' onClick={() => decQuantity(item.id, item.quantity-1)}>-</button>
                    <p className='pt-1 mx-4'>{item.quantity}</p>
                    <button className='text-2xl pr-2' onClick={() => incQuantity(item.id, item.quantity+1)}>+</button>
                </div>
                <button onClick={() => dispatch(removeProduct(item.id))}>
                    <img className='size-5 mt-3 ml-7' src="/bin.png" alt="" />
                </button>
            </div>
        </div>
        ))}

        <div className=' border-yellow-400 mx-4 mt-10 border-2'></div>

        <div className='flex flex-row-reverse text-md mx-4 mt-10' >
            <p className=''>${totalPrice}</p>
            <p className='font-bold mr-5'>Subtotal</p>
        </div>

        <div className='flex my-10 flex-row-reverse font-bold text-md mx-4'>
            <a href='/Cart/CustomerInfoPage' className='ml-2 p-2 px-4 rounded-full border-2 bg-yellow-400 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300'>NEXT STEP</a>
            <a href='/'  className=' p-2 px-4 rounded-full border-2 hover:bg-slate-600 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-300'>CONTINUE SHOPPING</a>
        </div>

        
    </>
  )
}

export default Cart