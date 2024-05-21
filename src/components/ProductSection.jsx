import React from 'react'
import Card from './Card'

const ProductSection = () => {
  return (
    <div>

        <div className="product-three">
            <div className="row">
                <div className="col-12 col-md-4">
                <Card kartinShekli= "/assets/images/product1.png" kartinBashligi= "Clean" kartinParaqrafi ="Lorem ipsum dolor sit amet" kartinButtonu= " Product details" />
              
                </div>
           
                <div className="col-12 col-md-4">
                <Card kartinShekli= "/assets/images/product2.png" kartinBashligi= "Tone " kartinParaqrafi ="Lorem ipsum dolor sit amet" kartinButtonu= " Product details"  />
              
                
                </div>
                <div className="col-12 col-md-4">
                <Card kartinShekli= "/assets/images/product3.png" kartinBashligi= "Soft " kartinParaqrafi =" Lorem ipsum dolor sit amet" kartinButtonu= " Product details"/>
              
                
                </div>
                <div className="product-two">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Card/>
                        </div>
                        <div className="col-12 col-md-6">
                            <Card/>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductSection