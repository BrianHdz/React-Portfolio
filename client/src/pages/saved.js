import React, { Component, useState } from 'react';
import logo from "../logo.svg";
import "../App.css";

import Navbar from "../components/Navbar";
import { Col, Row, Container } from "../components/Grid";
import BoxResults from '../components/BoxResults';
import Footer from "../components/Footer";


import API from "../utils/searchApi";

class Saved extends Component {

    state = {
        getBooks: [],
    }

    componentDidMount() {
        API.getBooks()
            .then(getBooks => this.setState({
                getBooks: getBooks
            })).catch(
                err => console.log(err)
            )
    }

    render() {
        return (
            <div className="App">

                <Navbar />
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Projects</h2>
                </div>
                <p className="App-intro">
                    You found the secret message! Nothing gets by you.
            </p>
<br></br>
                <Container fluid>

                    <Row>
                        <Col size="md-12 sm-12">
                            <div className="justify-content-center">
                                <h3>A few works in progress...</h3>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="md-3 sm-12"></Col>
                        <Col size="md-6 sm-12" className="justify-content-center">
                            <BoxResults books={this.state.getBooks} />
                        </Col>
                        <Col size="md-3 sm-12"></Col>
                    </Row>



                </Container>
                <Footer />
            </div>
        );
    }
}

export default Saved;