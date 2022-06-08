import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HomePage.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = ({ findGyms }) => {


    return (
      <div className="container">
        <Row>
        <Col></Col>
        <Col>
        <img src="https://thefightersguide.com/wp-content/uploads/2020/08/Landing-Page-BJJ-Gym.jpg" 
        alt="Jiu Jitsu Gym" 
        style={{"maxHeight":"20rem", 
        "maxWidth":"23rem", 
        "alignContent":"center"}}>

        </img>
        </Col>
        <Col></Col>
        </Row>
        <Row>
          <SearchBar searchParams={findGyms}/>
        </Row>
      </div>
    );
  };
  
  export default HomePage;