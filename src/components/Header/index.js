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
        <h4 style={{ color: "#224f8f" }}>Maveric Connect</h4>
        </td>
      </tr>
     
    </div>
  );
};

export default Header;
