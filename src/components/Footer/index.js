import React from "react";
import images from "../../images/maveric-logo-white.png";
const Footer = () => {
  return (
    // <div className='App-footer'>
    //     <tr>
    //     <td align='left'>
    //      <img src={images} alt="Maveric" />
    //      </td>
    //     <td align='center'>
    //    <p>@Copyright, Maveric Systems Ltd 2022</p>
    //    </td>
    //    </tr>
    //    </div>

    <div  className="App-FooterImage">
      <img src={images} alt="Maveric" />

      <div className="App-footer">
        <p>@Copyright, Maveric Systems Ltd 2022</p>
      </div>
    </div>
  );
};

export default Footer;
