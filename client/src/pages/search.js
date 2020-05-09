import React from 'react';
import Me from "../Me405KB.png";
import "../App.css";
import "./search.css";

import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// export default function Search() {
class Search extends React.Component {

    render() {
        return (
            <div className="App" >
                <Navbar />
                <div className="App-header">
                    <img src={Me} className="App-logo" alt="logo" />
                    <h2>Welcome to my Porfolio Works</h2>
                </div>
                <p className="App-intro">
                    You found the secret message! Nothing gets by you.
            </p>
                <Container fluid>
                    <Row>
                        <Col size="md-3 sm-12"></Col>
                        <Col size="md-6 sm-12" className="justify-content-center">
                            {/* <SearchBar
                            handleInputChange= {this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            search={this.state.search}
                            /> */}
                        </Col>
                        <Col size="md-3 sm-12"></Col>
                    </Row>

                    <br></br>

                    <Row><Col size="md-12 sm-12">
                        <div className="justify-content-center">
                            <h3>About Me</h3>
                        </div></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="md-2 sm-12"></Col>
                        <Col size="md-8 sm-12">
                            {/* <BoxResults
                                books={this.state.books} /> */}

                            <h7>Welcome to my page! I've just finished the Full Stack Web Developing Bootcamp at UCI. I've enjoyed
                            the chance develop and strengthen my skills to build a more secure future for my family and myself. I'll be
                            looking for a job in this new career field starting in summer of 2020. I've been in the automotive
                            field as a diagnostic mechanic for the past 10 years. It feels scary to leave as I've grown comfortable
                            here but I know this will lead to a stronger career as long as I put in the time and effort to make it. </h7>
                            <br></br><br></br>
                            <h7>When I'm not at work or school. I'm usually binge watching something, checking out new wines & whiskey,
                            hiking, trying to learn to cook a new recipe with my wife. I also like to play video games, go mountain biking,
                            and snowboarding. I used to spend all my money modifying my car, but 7 years ago decided it was too expensive
                            for my income. If I wanted to get a house with my wife, that would have to be put on hold. Since then, I've
                            found a side quest. Instead of modifying cars, I'd like to get a private pilot license. That will be a useful
                            skill. Everyone has a modified car. How many people can fly a plane?</h7>
                        </Col>
                        <Col size="md-2 sm-12"></Col>
                    </Row>

                    <Row>
                        <Col size="md-1 sm-12"></Col>
                        <Col size="md-4 sm-12">



                        </Col>
                        <Col size="md-2 sm-12"></Col>
                        <Col size="md-4 sm-12">



                        </Col>
                        <Col size="md-1 sm-12"></Col>
                    </Row>


                    <br></br><br></br><br></br><br></br><br></br>

                </Container>
                <Footer />
            </div>

        );
    }
}

export default Search;
