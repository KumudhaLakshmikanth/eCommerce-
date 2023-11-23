import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './explore.css'

function Explore() {
  return (
    <div className='explore-tabs d-flex justify-content-center flex-column align-items-center'>
        <Tabs defaultActiveKey="products" id="all-products"   className='bg-white border my-tabs'>
            <Tab title="Women" eventKey="women">
                women all ecom products
            </Tab>

            <Tab title="Men" eventKey="men">
                men all ecom products
            </Tab>

            <Tab title="Kids" eventKey="kids">
                women all ecom products
            </Tab>

            <Tab title="Sports" eventKey="sports">
                women all ecom products
            </Tab>

            <Tab title="beauty" eventKey="beauty">
                women all ecom products
            </Tab>

            <Tab title="jewles" eventKey="jewls">
                women all ecom products
            </Tab>
            
        </Tabs>
    </div>
  )
}

export default Explore