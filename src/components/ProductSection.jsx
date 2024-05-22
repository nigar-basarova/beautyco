import React from 'react'
import Card from './Card'
import  CardTwo from'./CardTwo'
// import  CardTwo from './CardTwo'
const ProductSection = () => {
  return (
    <div>

        <div className="product-three">
            <div className="row">
                <div className="col-12 col-md-4">
                <Card kartinShekli= "/assets/images/product1.svg" kartinBashligi= "Clean" kartinParaqrafi ="Lorem ipsum dolor sit amet" kartinButtonu= " Product details" />
              
                </div>
           
                <div className="col-12 col-md-4">
                <Card kartinShekli= "/assets/images/product2.svg" kartinBashligi= "Tone " kartinParaqrafi ="Lorem ipsum dolor sit amet" kartinButtonu= " Product details"  />
              
                
                </div>
                <div className="col-12 col-md-4">
                <Card kartinShekli= "/assets/images/product3.svg" kartinBashligi= "Soft " kartinParaqrafi =" Lorem ipsum dolor sit amet" kartinButtonu= " Product details"/>
              
                




                </div>
                <div className="product-two">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            
<CardTwo kartinBashligii= 'Best selling creams'kartinParaqrafii= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 'kartinButtonui = 'Shop now' kartinSheklii= './assets/images/productbig1.svg' />
                        </div>
                        <div className="col-12 col-md-6">
                            
                        <CardTwo kartinBashligii= 'Best selling creams'kartinParaqrafii= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 'kartinButtonui = 'Shop now' kartinSheklii= './assets/images/productbig1.svg' />

                        </div>




                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductSection