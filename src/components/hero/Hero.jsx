import React from 'react'
import './hero.css'
import '../../App.css'

function Hero() {
  return (
    <div className='hero bg-girl' >

    <div className="container">
    <div className="row">
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 '>
            <div className="hero-left ">
                <p className='fs-4 text-main mt-5' >Summer Shopping Deals <i class="bi bi-cash-coin"></i> </p>
              <h1 className='heading text-900 ls-2'>Fashion Changes <span className='text-main'>STYLE</span> </h1>
              <p className='fs-6 text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quos quis obcaecati architecto voluptas. Voluptatibus, facilis possimus sequi excepturi rem eum dolorum numquam cumque pariatur dolorem nesciunt perspiciatis iure rerum?</p>
              <div className="main-btn fit-w rounded-5 text-center"><i class="bi bi-bag-heart-fill mx-2 "></i>Explore Deals</div>
            </div>
           
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 '>
            <div className="hero-right">
              <img className='w-100' src="" alt="" />
            </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Hero
