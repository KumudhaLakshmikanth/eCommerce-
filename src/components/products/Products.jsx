import React from 'react'

const ProductsData=[
    {
        name:'Leather jacket',
        image:'https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=750&q=75',
        tag:'Mint green',
        price:'1226',
        rating:'4.5',
    }
]

function Products() {
  return (
    <div>
        <div className="row">
            {
                ProductsData.map((item,index)=>(
                    <div className='col-12 col-sm-12 col-md-3'>
                        <div className="product-card">
                            <div className="product-card-header">
                                <img src={item.image} alt="" />
                                <h4>{item.name}</h4>
                                <p>{item.tag}</p>

                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products