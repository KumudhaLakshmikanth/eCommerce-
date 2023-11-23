import React, { useState } from 'react'
import './sellers.css'
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SellersData=[
    {
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=750&q=75',
        title:"travel pet carrier",
        desc:"Dark pink 2023 ",
        tag:"sold out",
        price:3423 ,
        rating:4 ,
    },
    {
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=750&q=75',
        title:"travel pet carrier",
        desc:"Dark pink 2023 ",
        tag:"sold out",
        price:3423 ,
        rating:4 ,
    },
    {
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=750&q=75',
        title:"travel pet carrier",
        desc:"Dark pink 2023 ",
        tag:"sold out",
        price:3423 ,
        rating:4 ,
    },
    {
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=750&q=75',
        title:"travel pet carrier",
        desc:"Dark pink 2023 ",
        tag:"sold out",
        price:3423 ,
        rating:4 ,
    },
    {
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.a3e1e5fb.png&w=750&q=75',
        title:"travel pet carrier",
        desc:"Dark pink 2023 ",
        tag:"sold out",
        price:3423 ,
        rating:4 ,
    },
]

function Sellers() {
    const [slidsToShow, setSlidesToShow]=useState(4);
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth<600){
                setSlidesToShow(1)
            }
            else if (window.innerWidth<900){
                setSlidesToShow(2)
            }
            else{
                setSlidesToShow(4)
            }
        };

        handleResize();
        window.addEventListener('resize',handleResize)
        return()=>{
            window.removeEventListener('resize',handleResize)
        }
    })
    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:slidsToShow,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000
    }

    return(
        <div className="sellers-container" style={{overflow:'hidden'}}>
            <div className='fs-1 mb-5'>Best Sellers.<span>Best selling of the month</span></div>
            <div className="row">
                <Slider {...settings}>
                    {SellersData.map((item,index)=>(
                        <div key={index} className='col-12 col-sm-12 col-md-6 col-lg-3 p-2 '>
                            <div className="sellers-card border p-3 rounded-4">
                                <div className="seller-card-header">
                                    <img src={item.image} alt={item.title} className='w-100'/>
                                    <div className="card-extra">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <small className="p-1 rounded-5 bg-white text-center">
                                                    {item.tag}
                                                </small>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <div className='fav'><i class="bi bi-heart"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="seller-card-body">
                                    <h1 className="fs-5">{item.title}</h1>
                                    <h6 className="fs-5">{item.desc}</h6>
                                    <div className="row mt-4">
                                        <div className='col-6'>
                                            <p className='fs-5'>&#8377;{item.price}</p>
                                    
                                        </div>
                                        <div className="col-6">
                                            <h1 className='fs-5'>
                                            <i class="bi bi-star-fill text-warning"></i>{item.rating}<small>rating</small>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </Slider>

            </div>
        </div>
    )
  
}

export default Sellers