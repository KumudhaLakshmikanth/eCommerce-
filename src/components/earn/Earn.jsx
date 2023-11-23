import React from 'react'

function Earn() {
  return (
    <div className='earn p-5'>
        <div className="row align-items-center">
            <div className='col-12 cpl-sm-12 col-md-6'>
                <div className='earn-text'>
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt=""  width={140}/>
                    <h1 className='heading text-900'>Earn free money <br />with Ciseco</h1>
                    <p className='fs-4 text-secondary'>With Ciseco you will get freeship & savings combo...</p>
                    <div className="d-flex gap-4 mt-5">
                        <button className='main-btn p-3 primary-color rounded-5'>Saving combo</button>
                        <button className='main-btn p-3 bg-white text-dark border rounded-5'>Discover More</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6'>
                <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo3.4210c497.png&w=1080&q=75" alt=""  className='w-100'/>
            </div>
        </div>
    </div>
  )
}

export default Earn