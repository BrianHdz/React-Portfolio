import React, { Component } from 'react';
import projects from "../projects.json";
import logo from "../logo.svg";
import "../App.css";

import { Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import ProjectCard from '../components/BoxResults';
import Footer from "../components/Footer";

class Saved extends Component {

    state = {
        projects
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
                <Container>

                    <Wrapper>
                        <Title>A few works in progress...</Title>
                        {this.state.projects.map(item => (
                            <ProjectCard
                                id={item.id}
                                key={item.id}
                                image={item.image}
                                altText={item.altText}
                                caption={item.caption}
                                link={item.link}
                                live={item.live}
                            />
                        ))}
                    </Wrapper>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default Saved;
