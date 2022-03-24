import React from "react";
import images from "../../images/maveric-logo-updated.png";
const Header = () => {
  return (
    <div class="jumbotron">

      <tr>
        <td>
        <img src={images} alt="Maveric" />
        </td>
        <td>
        <h1 className="App-header" > Maveric connect</h1>
        </td>
      </tr>
     
    </div>
  );
};

export default Header;
