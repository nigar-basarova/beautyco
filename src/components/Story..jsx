import React from 'react'

const Story = () => {
  return (
    <div>
        <div className="container p-5 mt-5 ">
            <div className="story d-flex justify-content-center">
                <button>About us</button>
               
            </div>
            <h1 className='d-flex justify-content-center py-5 p-5'>The beautiful story</h1>
            <p className='p d-flex justify-content-center text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        
            <div className=" d-flex justify-content-center ">
                <button className='Ourstory'>Our story</button>
                <button className='Ourstory'>Contact us <img src="assets/icons/arrow.svg" alt="" /></button>
               
            </div>
        </div>
    </div>
  )
}

export default Story