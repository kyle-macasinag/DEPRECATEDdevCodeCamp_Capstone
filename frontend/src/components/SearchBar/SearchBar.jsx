import React, {useState} from "react";
import { Col, Row, Container} from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [gym, setGym] = useState("jiu jitsu");


    const handleSubmit = (event) => {
        event.preventDefault();
        // props.searchParams({rating: rating})
    };

    return (
        <Container className= "border-box">
            <Row xs= {"auto"} className="justify-content-center">
                <Col sm={2}>
                    <div className="form-group">
                        <label htmlFor="gyms">Find a gym</label>
                        <span></span>
                        <select name="gyms" id="gyms" required="True" onChange={(e) => 
                        setGym(e.target.value)}>
                        </select>
                    </div>
                </Col>

                <Col sm={2}>
                    <div className="form-group">
                        <label htmlFor="zip">Around</label>
                        <span></span>
                        <input id="zip" type="text" placeholder="Zip" value={zipCode} onChange={(e) => 
                        setZip(e.target.value)}>
                        </input>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}
export default SearchBar