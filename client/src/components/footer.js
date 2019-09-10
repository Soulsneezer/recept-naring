import React from "react";

import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

class Footer extends React.Component{

    render(){
        return(
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-4">
                        <div className="footer-content-box" >
                            1355 Market St, Suite 900 <br/>
                            San Fransisco, CA 94103
                        </div>                     
                    </div>
                    <div className="col-4 order-3 order-sm-2">
                        <div className="footer-content-box icons" >
                            <img src={facebook} className="icon"></img>
                            <img src={twitter} className="icon"></img>
                            <img src={instagram} className="icon"></img>
                        </div>
                    </div>
                    <div className="col-4 order-sm-2">
                        <div className="footer-content-box" >
                            +15 (123) 456-7890 <br/>
                            grupp.3@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;