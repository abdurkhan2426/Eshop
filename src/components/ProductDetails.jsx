import React from 'react'
import { useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom'
import NavBar from './navbar';
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from '../Slices/cartSlice';

const ProductDetails = () => {

    const [quantity, setQuantity] = useState(1);
    const [dropDown, setDropDown] = useState(false);
    const [size, setSize] = useState("CHOOSE SIZE")
    const [color, setColor] = useState("Black")
    const [selectSize, setSelectSize] = useState(false)
    const dispatch = useDispatch();


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const productData = useLoaderData();
    console.log(productData);

    const { id, title, price, description, images } = productData;

    function addProductToCart(){
        if(size == "CHOOSE SIZE"){
            console.log("hello boy")
            if(!selectSize){
                setSelectSize(!selectSize)
            }
        }
        else{
            dispatch(addToCart(title, price, images, quantity, size, color));
            console.log("khan g de")
        }

    }

    function selectingSize(e){
        setSelectSize(!selectSize)
        setSize(e.target.value)
        setDropDown(!dropDown)
    }

  return (
    <>
        <NavBar />
        <Slider {...settings}>
            <img src={images[0]} alt="" />
            <img src={images[1]} alt="" />
            <img src={images[2]} alt="" />
        </Slider>
            <p className='text-xl ml-10 mb-2 mt-10'>{title}</p> 
            <p className='text-red-600 ml-10 text-xl'>${price}.99</p>

            <p className='ml-10 mb-2 mt-10'>Color:</p>
            
            <div className='flex flex-row'>
                <button onClick={(e) => setColor(e.target.value)} value={"Black"} autoFocus className='border-2  focus:outline m-2 ml-10 bg-black w-8 h-8'></button>
                <button onClick={(e) => setColor(e.target.value)} value={"Yellow"} className='border-2 focus:outline m-2 bg-yellow-400 w-8 h-8'></button>
                <button onClick={(e) => setColor(e.target.value)} value={"Blue"} className='border-2 focus:outline m-2 bg-blue-600 w-8 h-8'></button>
                <button onClick={(e) => setColor(e.target.value)} value={"White"} className='border-2 focus:outline m-2 bg-white w-8 h-8'></button>
            </div>

            <div className='flex flex-row'>
                <p className='ml-10 mb-2 mt-10'>Size:</p>
                <p className='ml-10 font-bold mb-2 mt-10'>See size table</p>
            </div>

            {/* <button className='border-2 ml-10 px-4 py-2 flex flex-row rounded-full'>
                <p className='pr-4'>CHOOSE SIZE</p>
                <img className='size-6' src="/right.png" alt="" />
            </button> */}

            <div class="relative ml-10 inline-block text-left">
            <div>
                <button onClick={() => setDropDown(!dropDown)} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                {size}
                <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                </button>
            </div>

            {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
            {dropDown && 
                <div class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900 outline-none", Not Active: "text-gray-700" --> */}
                    <button value={"S"} onClick={(e) => selectingSize(e)} class="block px-4 py-2 text-sm text-gray-700" >S</button>
                    <button value={"M"} onClick={(e) => selectingSize(e)} class="block px-4 py-2 text-sm text-gray-700" >M</button>
                    <button value={"L"} onClick={(e) => selectingSize(e)} class="block px-4 py-2 text-sm text-gray-700" >L</button>
                    <button value={'XL'} onClick={(e) => selectingSize(e)} class="block px-4 py-2 text-sm text-gray-700" >XL</button>
                    </div>
                </div>
            }
            {selectSize && 
                <p className='text-red-600'>* Please choose a size</p>
            }

            </div>


            <p className='ml-10 mb-2 mt-10'>Quantity:</p>

            <div className='flex flex-row'>
                <div className='border-2 w-24 ml-10 px-2 py-2 flex flex-row rounded-full'>
                    <button className='text-2xl' onClick={() => setQuantity(quantity - 1)}>-</button>
                    <p className='pt-2 mx-5'>{quantity}</p>
                    <button className='text-2xl' onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button onClick={() => addProductToCart()} className='bg-yellow-400 text-sm hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 font-bold p-3 rounded-full my-2 px-10 mx-5'>ADD TO CART</button>
                <button className='px-5 rounded-full border-2'>
                    <img  className='size-5' src="/heart.png" alt="" />
                </button>
            </div>
            
            




    </>
  )
}

export default ProductDetails