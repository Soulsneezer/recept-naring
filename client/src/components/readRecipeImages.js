import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

class ReadRecipeImages extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   imageUrl: ["../images/ReadRecipeImages/test.jpg", "image2"]
    // };

    // imageUrlHandler = event => {
    //   this.setState({
    //     imageUrl: event.target.imageUrl[0]
    //   });
    // };
  }
  render() {
    return (
      <img className='testImg' src='../images/ReadRecipeImages/test.jpg' />
    );
  }
}

export default ReadRecipeImages;
