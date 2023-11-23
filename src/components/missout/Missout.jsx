import React from 'react'
import './missout.css'

function Missout() {
  return (
    <div className="miss-out container-fluid p-lg-5 p-2">
        <div className="miss-out-container p-lg-5">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
                <div className="miss-out-text p-2">
                   <h1 className='heading'>Dont miss out on specila offers</h1>
                   <p className='fs-5 text-black'>register to receiver news about lates deals,savings,discount</p>
                   
                   <p className='fs-5 mb-4'><span className='p-1 px2 bg-primary rounded-5 text-white'>01</span>savings combo</p>

                   <p className='fs-5 mb-4'><span className='p-1 px2 bg-primary rounded-5 text-white'>01</span>savings combo</p>

                   <p className='fs-5 mb-4'><span className='p-1 px2 bg-primary rounded-5 text-white'>01</span>savings combo</p>

                
                </div>
                
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo3.4210c497.png&w=1080&q=75" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Missout