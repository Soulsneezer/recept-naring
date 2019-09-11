import React from "react";

import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import placeholder from "../images/placeholder.png";
import contact from "../images/contact.png";

class Footer extends React.Component{

    render(){
        return(
            <footer className="container-fluid bg-light">

            <div className="row ">

                <div className="col-8 col-sm-5 p-2 box">
              
                        <a href="http://googlemaps.com" className="d-inline-block align-top pt-2 pr-2 "><img src={placeholder} className="icon"></img></a>
                        <p className="d-inline-block">1355 Market St, Suite 900 <br/>
                        San Fransisco, CA 94103</p>

                        <div className="d-sm-none">
                            <a href="http://eniro.se" className="d-inline-block align-top pt-2 pr-4"><img src={contact} className="icon"></img></a>                       
                            <p className="d-inline-block pr-4">+15 (123) 456-7890 <br/>
                            grupp.3@gmail.com</p>                            
                        </div>
                                 
                </div>

                <div className="col-4 col-sm-2 mt-3 pl-5 pl-sm-0 box ">
                    <div className="icons" >
                        <a href="http://facebook.com"><img src={facebook} className="icon"></img></a>
                        <a href="http://twitter.com"><img src={twitter} className="icon"></img></a>
                        <a href="http://instagram.com"><img src={instagram} className="icon"></img></a>
                    </div>
                </div>

                <div className="col-8 col-sm-5 p-2 d-none d-sm-block box">
                    <a href="http://eniro.se" className="d-inline-block align-top pt-2 pr-3"><img src={contact} className="icon"></img></a>                       
                    <p className="d-inline-block">+15 (123) 456-7890 <br/>
                    grupp.3@gmail.com</p>                            
                </div>

            </div>
        </footer>

        )
    }

}

export default Footer;

/*


        <footer className="container-fluid bg-light">

                <div className="row ">

                    <div className="col-8 col-sm-4 p-2">
                        <div className="footer-content-box" >
                            <a href="http://googlemaps.com"><img src={placeholder} className="icon"></img></a>
                            1355 Market St, Suite 900 <br/>
                            San Fransisco, CA 94103
                        </div>                     
                    </div>

                    <div className="col-4 mt-3">
                        <div className="footer-content-box icons" >
                            <a href="http://facebook.com"><img src={facebook} className="icon"></img></a>
                            <a href="http://twitter.com"><img src={twitter} className="icon"></img></a>
                            <a href="http://instagram.com"><img src={instagram} className="icon"></img></a>
                        </div>
                    </div>

                    <div className="col-8 col-sm-4 p-2">
                        <div className="footer-content-box" >
                            <div className="row">
                                <div className="col-2 icon-box">
                                    <a href="http://eniro.se"><img src={contact} className="icon"></img></a>
                                </div>
                                <div className="col-10 text-box">
                                    +15 (123) 456-7890 <br/>
                                    grupp.3@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>


.footer-content-box .icon{
  width:30px;
  height:30px;
  cursor:pointer;
}

.icon-box{

  border:solid black 1px;

  display:inline-block;
}
.text-box{

  border:solid black 1px;
  
  display:inline-block;
}

@media (max-width: 576px)  {
  .footer-content-box{
    height:50px;
  }
  .footer-content-box.icons .icon{
    display:block;
  }
}






            */