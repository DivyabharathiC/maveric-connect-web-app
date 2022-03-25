import React from "react";
import images from "../../images/maveric-logo-updated.png";
const Header = () => {
  return (
    <div className="App-header">

      <tr>
        <td>
        <img src={images} alt="Maveric" />
        </td>
        <td>
        <h4> Maveric connect</h4>
        </td>
      </tr>
     
    </div>
  );
};

export default Header;
