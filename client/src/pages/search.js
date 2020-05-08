import React, { Component, useEffect, useState } from 'react';

import Me from "../Me405KB.png";
import "../App.css";


import { Col, Row, Container } from "../components/Grid";
import BoxResults from '../components/BoxResults';
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import API from "../utils/searchApi";
import "./search.css";



// export default function Search() {
class Search extends React.Component {

    // Allow state changes for the form input values and books.
    state = {
        value: "",
        books: []
    }
    // console.log(state)
    // Imported & Defined our model {Book} as a queriedBook.
    queriedBook = bookData => {
        // console.log(queriedBook(bookData))
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }


    // Handles specific component mounting.
    componentDidMount() {
        this.queryBook();
    }

    // Function to Find book user is looking for.
    queryBook = query => {
        // Run call to API to query book info.
        API.searchBooks(query)
            .then(res => this.setState({
                books: res.data.items.map(
                    bookData => this.queriedBook(
                        bookData
                    ))
            }))
            // Error handling
            .catch((err) => console.log(err));
        // Successful results. Show 10 books.
        console.log(query)
        // This is the Title of the first Book in the search.
        // console.log(res.data.items[0].volumeInfo.title)
    }


    // Grab SearchBar Input to and call it data
    handleInputChange = event => {
        var name = event.target.name
        var value = event.target.value
        this.setState({ [name]: value })
        //console.log(value)
    }


    // Prevent form from restarting page upon submit
    handleFormSubmit = event => {
        event.preventDefault();
        this.queryBook(this.state.search);
    }

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


                    <br></br><br></br><br></br><br></br><br></br>

                </Container>
                <Footer />
            </div>

        );
    }
}

export default Search;




// Testing-----------------------------------------------------
// 
// queryBook = (event) => {
//     event.preventDefault();

//     var userData = { search: formObject }
//     console.log(userData)


//     // Run call to API for book info.
//     API.searchBooks(userData.search)
//         .then(function (res) {
//             console.log(res.data.items)
//             // Error handling
//             if (res.data.items.length === 0) {

//                 console.log("We didn't find anything.");
//             }
//             // Successful results. Show 10 books.
//             console.log(res.data.items[0].volumeInfo)
//             // This is the Title of the first Book in the search.
//             console.log(res.data.items[0].volumeInfo.title)
//         })
//         .catch((err) => console.log(err));
// }