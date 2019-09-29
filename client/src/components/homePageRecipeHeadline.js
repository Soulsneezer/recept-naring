import React from "react";
import { Col, Row } from "react-bootstrap";

const HomePageRecipeHeadline = () => {
  return (
    <div className='recipeHeadline'>
      <Row className='m-0'>
        <Col>
          <h2 className='recipeHeadlineH2'>Ett urval utav våra recept</h2>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageRecipeHeadline;
