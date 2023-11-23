import React from 'react'
import './features.css'

const featuresData=[
    {
        title:"Filter & Discover",
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW1img.5d05ab6a.png&w=256&q=75',
        content:'Smart filtering and suggestions make it easy to find',
    },

    {
        title:"Add to bag",
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW2img.4553ec6b.png&w=256&q=75',
        content:'Easily select the correct items and add them to the cart',
    },

    {
        title:"Fast shipping",
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW3img.63a41796.png&w=256&q=75',
        content:'The carrier will confirm and ship quickly to you',
    },

    {
        title:"Enjoy the product",
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHIW4img.10d25987.png&w=256&q=75',
        content:'Have fun and enjoy your 5-star quality products',
    },
]
function Features() {
  return (
    <div className='features py-5 container-fulid p-5'>
        <div className="row">
            {
                featuresData.map((item,index)=>(
                    <div className='col-12 col-sm-12 col-md-3'>
                        <div className='features-card text-center mb-3'>
                            <div className="features-card-header">
                                <img src={item.image} alt="/" />
                            </div>
                            <div className="features-card-body w-100 d-flex flex-column align-items-center gap-4">
                                <div className="step p-1 rounded-5">
                                    step {index+1}
                                
                                </div>
                                <p className='fs-5 text-secondary w-100'>{item.content}</p>
                            </div>
                        </div>
                    
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features