import React from 'react'

const Story = () => {
  return (
    <div>
        <div className="container p-5 mt-5 ">
            <div className="story d-flex justify-content-center alighn-items-center">
                <button>About us</button>
               
            </div>
            <h1 className='d-flex justify-content-center py-5 p-5'>The beautiful story</h1>
            <p className='p d-flex justify-content-center text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        
            <div className=" our-story d-flex justify-content-center ">
                <button className=''>Our story</button>
                <button className='ourstory'>Contact us <img className='p-1 d-flex justify-content-center' src="assets/icons/arrow.svg" alt="" /></button>
               
            </div>
            <div className="best-sellers d-flex justify-content-center">
                <button className='best-sellers '>Best sellers</button>
            </div>
              <div className='trusted-products'>
              <h4 className='p-5 text-center'>The most trusted products by our customers</h4>
              </div>
            
        </div>
    </div>
  )
}

export default Story