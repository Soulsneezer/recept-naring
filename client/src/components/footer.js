import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import placeholder from "../images/placeholder.png";
import contact from "../images/contact.png";

class Footer extends React.Component {
  render(){
    return(
      <React.Fragment>
      	<footer className="container-fluid bg-light mt-5 footer-component">
					<div className="row ">

						<div className="col-8 col-sm-5 p-2 box">    
              <a href="http://googlemaps.com" className="d-inline-block align-top pt-2 pr-2" aria-label="gå till googlemaps.com">
								<img src={placeholder} className="icon" alt="kartnålsikon"></img>
							</a>
              <p className="d-inline-block">1355 Market St, Suite 900 <br/> San Fransisco, CA 94103</p>
              <div className="d-sm-none">
                <a href="http://eniro.se" className="d-inline-block align-top pt-2 pr-4" aria-label="gå till eniro.se">
									<img src={contact} className="icon" alt="telefon samt brev ikon"></img>
								</a>                       
              	<p className="d-inline-block pr-4">+15 (123) 456-7890 <br/> grupp.3@gmail.com</p>                            
              </div>
            </div>
						
						<div className="col-4 col-sm-2 mt-3 pl-5 pl-sm-0 box ">
              <div className="icons" >
                <a href="http://facebook.com" aria-label="gå till facebook.com"><img src={facebook} className="icon" alt="facebook ikon"></img></a>
                <a href="http://twitter.com" aria-label="gå till twitter.com"><img src={twitter} className="icon" alt="twitter ikon"></img></a>
                <a href="http://instagram.com" aria-label="gå till instagram.com"><img src={instagram} className="icon" alt="instagram ikon"></img></a>
              </div>
            </div>

            <div className="col-8 col-sm-5 p-2 d-none d-sm-block box">
              <a href="http://eniro.se" className="d-inline-block align-top pt-2 pr-3" aria-label="gå till eniro.se">
								<img src={contact} className="icon" alt="telefon samt brev ikon"></img>
							</a>                       
              <p className="d-inline-block">+15 (123) 456-7890 <br/> grupp.3@gmail.com</p>                            
            </div>

          </div>
        </footer>
      </React.Fragment>
    )
  }
}

export default Footer;

