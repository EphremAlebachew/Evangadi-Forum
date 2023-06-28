import React from "react";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { youtube } from "react-icons-kit/feather/youtube";
import "./Footer.css";
import "../../css/bootstrap.css";

import logo from "../../Images/logo1.png";

 function Footer() {
  return (
  <footer>
    <div className="row ms-1">
        <div className=" col-lg-4 col-md-4">
        <div className="model66">
            <img src={logo} />
          </div>
        <div className="Icon">
            <a href="https://www.facebook.com/EthiopiansNetwork">
              <Icon icon={facebook} size={25} />
            </a>
            <a href="https://www.instagram.com/evangaditech/">
              <Icon icon={instagram} size={25} />
            </a>
            <a href="https://www.youtube.com/c/weareethiopians">
              <Icon icon={youtube} size={25} />
            </a>
          </div></div>

        <div className=" col-lg-4 col-md-4">
        <h5 className="model67">Useful Link</h5>
        <div className="model64"><ul className="model72" >
        <li className="pt-2"><a href="#">How it works</a>  </li>
        <li className="pt-2"><a href="https://www.evangadi.com/legal/terms/">Terms of Service</a> </li>
        <li className="pb-1 pt-2"><a href="https://www.evangadi.com/legal/privacy/">Privacy policy</a> </li>
        </ul></div></div>

        <div className=" col-lg-4 col-md-4  ">
       <div className="model68">Contact Info</div>
       <h5 className="model65  "><ul className="model71">
        <li className="model70 p1-2 pt-2">  Evangadi Networks</li>
        <li className="pt-2">support@evangadi.com</li>
          <li className="model69  pt-2" >+1-202-386-2702</li></ul></h5></div>
    </div></footer>
  );
}
export default Footer; 
 