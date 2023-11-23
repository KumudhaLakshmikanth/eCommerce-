import React from 'react'
import './category.css'

const CategoryData=[
   {
    tag:"Explore new arrival",
    title:"Shop the latest from top brands",
    image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.fcd9d1db.png&w=384&q=75",
   },

   {
    tag:"Digital gift cards",
    title:"Give the gift of choice",
    image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.fcd9d1db.png&w=384&q=75",
   },

   {
    tag:"Sale colection",
    title:"up to 80% off retail",
    image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.fcd9d1db.png&w=384&q=75",
   },

   {
    tag:"Sale colection",
    title:"up to 80% off retail",
    image:"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.fcd9d1db.png&w=384&q=75",
   },


]

function Category() {
  return (
    <div className='category container-fluid py-5 p-3'>
      <h1 className="fs1 mb-5" color='primary'>Discover more. <span className='text-secondary'>Good things are waiting for you</span></h1>
      <div className="row justify-content-center">
        {
          CategoryData.map((item,index)=>(
            <div className='col-12 col-sm-12 col-md-4' key={index}>
                <div className={`categories-card categories-card${index}`}>
                  <div className="row align-items-center">
                    <div className="col-8">
                      <p className='fs-6'>{item.tag}</p>
                      <h2 className='fs-3'>{item.title}</h2>
                      <button className='btn bg-white rounded-5 p-2 mt-4'>Show me all</button>
                    </div>
                    <div className="col-4">
                    <img src={item.image} alt="" className='w-100' />
                    <p></p>
                  </div>
                  </div>
                  
                 
                </div>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Category