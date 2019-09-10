import React from "react";

import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

class Footer extends React.Component{

    render(){
        return(
            <footer className="container-fluid bg-light">

                <div className="row ">

                    <div className="col-8 col-sm-4 p-2">
                        <div className="footer-content-box" >
                            1355 Market St, Suite 900 <br/>
                            San Fransisco, CA 94103
                        </div>                     
                    </div>

                    <div className="col-4 mt-3">
                        <div className="footer-content-box icons" >
                            <a href="http://facebook.com"><img src={facebook} className="icon p-1"></img></a>
                            <a href="http://twitter.com"><img src={twitter} className="icon p-1"></img></a>
                            <a href="http://instagram.com"><img src={instagram} className="icon p-1"></img></a>
                        </div>
                    </div>

                    <div className="col-8 col-sm-4 p-2">
                        <div className="footer-content-box" >
                            +15 (123) 456-7890 <br/>
                            grupp.3@gmail.com
                        </div>
                    </div>

                </div>
            </footer>
        )
    }

}

export default Footer;
