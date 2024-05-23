import React, { useEffect, useRef } from 'react'
import { ReactTyped } from "react-typed";

import emailjs from '@emailjs/browser';

const Footer = () => {
const NigarinYaratdigiForm= useRef(

const mesajiGonder=function (e) {

e.preventDefault() 

emailjs
.sendForm('service_h4wm5od', 'template_tly3b6v', NigarinYaratdigiForm.current, {
  publicKey: 'ryNz3ijZZY66kWFf0',
})
.then(
  () => {
    console.log('SUCCESS!');
  },
  (error) => {
    console.log('FAILED...', error.text);
  },

);
}
}
)

  return (
    <div>
        <div className="footer">
            <div className="row">
                <div className="left-footer">
                    <p>Join our newsletter to stay up to date on features and releases.</p>
  
                 
                 
                 
                 
                 
                 
                 
                   
    <div className="container d-flex">
        <form onSubmit ={mesajiGonder} className="" ref={NigarinYaratdigiForm}>
            <div className="form">
                <input type="textarea" placeholder=' name ' />
                <button className="btn-second btn-outline text-white mb-2 mb-sm-0" type="submit">Subscribe</button>
                
                
            </div>
            
        </form>
       
    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Footer