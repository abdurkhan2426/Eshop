import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/navbar'
import Sales from '../components/icons/Sales'
import ArrowRightIcon from '../components/icons/ArrowRightIcon'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'



const Home = () => {
    const data = useLoaderData();

    const navigation = useNavigation()
    console.log(navigation)

    if(navigation.state === 'loading') return <Loading />




    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };

    //   console.log(data)

  return (
    <>
        <div className="bg-[url('/sale.png')] bg-cover bg-center">
        {/* <Sales> */}
 
          <NavBar />


          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='flex flex-row-reverse items-center'>
          <h3 className='text-white mx-2 font-bold'>SHOP NOW</h3>
            <button className='rounded-full bg-orange-400 text-white p-2'><ArrowRightIcon /></button>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
 
          
              {/* </Sales> */}

    </div>

    <div className='mx-10 my-5'>
        <div className='flex flex-row'>
            <div className='text-lg'>Selected just for you</div>
            <div className='flex-1'></div>
            <button className='font-bold text-xs rounded-full border-2 px-4 py-2'>SHOW MORE</button>
        </div>




    </div>

    {/* <div className='flex flex-row'>
        {data?.map((item) => (
        <div className='w-500'>
          <img src={item.images[0]} />
        </div>
      ))}
        </div> */}

    <div className='w-3/4 m-auto'>
        <div className=''>
            <Slider {...settings}>
                {data.map((item) => (
                    <NavLink to={`/${item.id}`}>
                    <button className='px-2 cur'>
                        <div>
                            <img className='w-100 h-100' src={item.images[0]} />
                        </div>

                        <div>
                            <p className='text-xs'>{item.title}</p>
                            <p className='text-md'>${item.price}</p>
                        </div>
                    </button>
                    </NavLink>
                ))}
            </Slider>
        </div>

    </div>

    

    <p className='text-center text-lg my-5'>Why Should Choose us?</p>

    <div className='flex flex-row w-3/4 m-auto'>
        <div className='flex-1 h-20 w-20 '>
            <img className='w-12 p-2 rounded-md h-12 bg-slate-200' src='/delivery.png'/>
            <p className='text-sm my-2'>Free Shipping</p>
            <p className='text-xs hidden sm:block my-2'>Lorem ipsum is simply dummy text of the printing industry.</p>
        </div>
        <div className='flex-1 h-20 w-20 '>
            <img className='w-12 p-2 rounded-md h-12 bg-slate-200' src='/pay.png'/>
            <p className='text-sm my-2'>Easy Payments</p>
            <p className='text-xs hidden sm:block my-2'>Lorem ipsum is simply dummy text of the printing industry.</p>

        </div>
        <div className='flex-1 h-20 w-20'>
            <img className='w-12 p-2 rounded-md h-12 bg-slate-200' src='/insurance.png'/>
            <p className='text-sm my-2'>Money-Back Gaurantee</p>
            <p className='text-xs hidden sm:block my-2'>Lorem ipsum is simply dummy text of the printing industry.</p>
        </div>
        <div className='flex-1 h-20 w-20'>
            <img className='w-12 p-2 rounded-md h-12 bg-slate-200' src='/wood-board.png'/>
            <p className='text-sm my-2'>Finest Quality</p>
            <p className='text-xs hidden sm:block my-2'>Lorem ipsum is simply dummy text of the printing industry.</p>
        </div>
    </div>

    <p className='mt-20 mb-10 text-2xl text-center'>Products in today</p>


    <div className='w-3/4 m-auto'>
        <div className=''>
            <Slider {...settings}>
                {data.map((item) => (
                    <NavLink>
                    <button className='px-2'>
                        <div>
                            <img className='w-100 h-100' src={item.images[0]} />
                        </div>

                        <div>
                            <p className='text-xs'>{item.title}</p>
                            <p className='text-md'>${item.price}</p>
                        </div>
                    </button>
                    </NavLink>
                ))}
            </Slider>
        </div>

    </div>



    </>
  )
}

export default Home