import React from 'react';
import  images from '../../images/maveric-logo-white.png';
const Footer = () => {
    return ( 
        <div>
            <td>
             <img src={images} alt="Maveric" />
             </td>
           <p className='App-footer'>@Copyright, Maveric Systems Ltd 2022</p> 
          
           </div> 
     );
}
 
export default Footer;