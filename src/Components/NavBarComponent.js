import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaGithub, FaAws } from 'react-icons/fa';

class NavBar extends React.Component {
    state = {
        show: true
    }

    render() {
        let infoAlert;
        if (this.state.show) {
            infoAlert = <Container>
                <br />
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>Serverless Text-To-Speech Application with Amazon Polly</Alert.Heading>
                    <p>
                        Amazon Polly is an AWS resource that converts text to speech.
                        Hover buttons and text area to view tips!
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.setState({ show: false })} variant="outline-success">
                            Got it
                        </Button>
                    </div>
                </Alert>
            </Container>
        }
        return (
            <div className="NavBar">
                <Navbar bg="dark" variant="dark">
                    <Container style={{
                        width: "100%",
                        paddingRight: "15px",
                        paddingLeft: "15px",
                        marginRight: "auto",
                        marginLeft: "auto",
                    }}>
                        <Navbar.Brand href="./"><FaAws /> Text-To-Speech</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => this.setState({ show: true })}>Show Help</Nav.Link>
                            <Nav.Link href="https://github.com/kwaku104/Text-To-Speech-App" target="_blank" style={{
                                paddingRight: "0"
                            }}><FaGithub /></Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {infoAlert}
                <br />
            </div>
        )
    }
}

export default NavBar;