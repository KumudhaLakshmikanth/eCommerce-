import React from 'react'
import './offer.css'
import { Container } from 'react-bootstrap'

function Offer() {
  return (
    
        <div className='p-lg-5 p-2'>
          <div className="offer-container p-3">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6">
            <img src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromo2.b3b05f98.png&w=750&q=75" alt="" className='w-100 mb-3' />
            </div>
            <div className="col-12 col-sm-12 col-md-6">
                <div className="offer-text">
                    <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg" alt="" width={140} className=' mb-5' />
                    <h1 className="heading text-900">Special offer <br />
                    in kids products</h1>
                    <p className="fs-5 text-secondary">Fashion is a form of self-expression and autonomy at a <br />particular period and place.</p>
                <button className="main-btn bg-primary-color mt-4 rounded-5">Discover More</button>
            </div>
        </div>
      </div>
      </div>
    </div>

  )
}

export default Offer