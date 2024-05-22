import React from 'react'

const CardTwo = ({kartinShekli, kartinBashligi, kartinParaqrafi, kartinButtonu })  => {
    // console.log(props)
  return (
    <div className='card border-0 container'>
        <img src={kartinShekli} className='products-img' alt="" />
       
        
      
      <div className="card-body">  
        <div className="card-two border-0 "> 
        <h3 className='product-name'>{kartinBashligi}</h3>
        <p className='title-about text-secondary'> {kartinParaqrafi} </p>
            <button> {kartinButtonu} </button>
            </div>

        </div>
        </div>
   
    
  )
}

export default Card