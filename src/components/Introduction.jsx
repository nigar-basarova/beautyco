import React from 'react'

const Introduction = () => {
  return (
    <div className='intro'>
        <div className="container d-flex">

        <div className="intro-left-side">

<h1 className=''> Hydrated skin in 3 easy steps</h1>
<p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis Cursus mi quis viverra ornare.

</p>
<form className="d-flex gap-2" role="search">
<button className="btn-second btn-outline text-white " type="submit"> Shop now</button>
 <button className="btn-first btn-outline " type="submit">    Our story
            </button>
          </form>
          <p>Trusted by the world's best companies</p>
          

        
        <img className='p-3' src="assets/images/logos/logo1.svg" alt="" />
          <img className='p-3' src="assets/images/logos/logo2.svg" alt="" />
          <img className='p-3'  src="assets/images/logos/logo3.svg" alt="" />
        
          
            </div>

            <div className="intro-right-side">
<img src="assets/images/man.svg" alt="" />

            </div>

    
        </div>
    </div>
  )
}

export default Introduction