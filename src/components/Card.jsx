import React from 'react'

const Card = ({kartinShekli, kartinBashligi, kartinParaqrafi, kartinButtonu })  => {
    // console.log(props)
  return (
    <div className='card border-0'>
        <img src={kartinShekli} className='products-img' alt="" />
       
        <div className="card-body">
            <h3 className='product-name'>{kartinBashligi} </h3>
            <p className='title-about text-secondary'> {kartinParaqrafi} </p>
            <button> {kartinButtonu} </button>
        </div>
      
        
        </div>
   
    
  )
}

export default Card