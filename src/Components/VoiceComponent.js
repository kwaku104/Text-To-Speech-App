import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import FloatingLabel from 'react-bootstrap-floating-label';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class Voice extends React.Component {
    state = {
        voice: "Joanna",
        text: "",
        show: false,
        postId: "",
        error: false,
        loader: false
    }

    API_ENDPOINT = "";

    handleErrorShow = () => {
        this.setState({
            voice: this.state.voice,
            text: this.state.text,
            show: this.state.show,
            postId: this.state.postId,
            error: true,
            loader: this.state.loader
        })
    }

    handleErrorClose = () => {
        this.setState({
            voice: this.state.voice,
            text: this.state.text,
            show: this.state.show,
            postId: this.state.postId,
            error: false,
            loader: this.state.loader
        })
    }

    handleShow = () => {
        this.setState({
            voice: this.state.voice,
            text: this.state.text,
            show: true,
            postId: this.state.postId,
            error: this.state.error,
            loader: false
        })
    }

    handleClose = () => {
        this.setState({
            voice: this.state.voice,
            text: this.state.text,
            show: false,
            postId: this.state.postId,
            error: this.state.error,
            loader: this.state.loader
        })
    }

    onSubmit = () => {
        if (this.state.text === "") {
            this.setState({
                voice: this.state.voice,
                text: this.state.text,
                show: this.state.show,
                postId: this.state.data,
                error: true,
                loader: this.state.loader
            })
        } else {
            axios
                .post(this.API_ENDPOINT, this.state)
                .then((response) => {
                    this.setState({
                        voice: this.state.voice,
                        text: this.state.text,
                        show: this.state.show,
                        postId: response.data,
                        error: this.state.error,
                        loader: this.state.loader
                    })
                    // console.log(response.data)
                    this.handleShow()
                    // console.log(this.state.isOpen)
                })
            console.log(`Voice selected is: ${this.state.voice} and Text entered is: ${this.state.text}`)
        }
    }

    render() {
        let errorAlert;
        let loading;
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                This button coverts text entered in the box below to speech
            </Tooltip>
        );

        const voiceRenderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Select a voice to be used for the speech
            </Tooltip>
        );

        const textAreaRenderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Enter text to be converted to speech
            </Tooltip>
        );

        if (this.state.error) {
            errorAlert = <Container>
                <Alert variant="danger" onClose={this.handleErrorClose} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Enter text to be converted to speech
                    </p>
                </Alert>
            </Container>

        } else if (this.state.loading) {
            loading = <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
        }



        return (
            <div className="Voice">
                <Container>
                    <Row className="g-2">
                        <Col md>
                        </Col>
                        <Col md>
                            <OverlayTrigger
                                placement="left"
                                delay={{ show: 250, hide: 400 }}
                                overlay={voiceRenderTooltip}
                            >
                                <Form>
                                    <Form.Group>
                                        <Form.Control as='select' className="voiceSelected" onChange={e => this.setState({ voice: e.target.value })} type="text" value={this.state.voice}>
                                            <option value="Joanna">Joanna [English]</option>
                                            <option value="Maja">Maja [Polish]</option>
                                            <option value="Seoyeon">Seoyeon [Korean]</option>
                                            <option value="Enrique">Enrique [Spanish]</option>
                                            <option value="Marlene">Marlene [German]</option>
                                            <option value="Mathieu">Mathieu [French]</option>
                                            <option value="Cristiano">Cristiano [Portuquese]</option>
                                            <option value="Liv">Liv [Norwegian]</option>
                                            <option value="Mizuki">Mizuki [Japanese]</option>
                                            <option value="Carla">Carla [Italian]</option>
                                            <option value="Carmen">Carmen [Romanian]</option>
                                            <option value="Tatyana">Tatyana [Russian]</option>
                                            <option value="Astrid">Astrid [Swedish]</option>
                                            <option value="Filiz">Filiz [Turkish]</option>
                                            <option value="Gwyneth">Gwyneth [Welsh]</option>
                                            <option value="Karl">Karl [Icelandic]</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </OverlayTrigger>
                        </Col>
                        <Col md>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button className="sayButton" variant="outline-secondary" id="button-addon2" onClick={this.onSubmit}>
                                    {loading}
                                    Convert
                                </Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Container>
                {errorAlert}
                <Container>
                    <Row className="g-2">
                        <Col md>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={textAreaRenderTooltip}
                            >
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <label>Enter Text to be converted to speech:</label>
                                        <Form.Control as="textarea" rows={5} className="postText" onChange={e => this.setState({ text: e.target.value })} type="text" value={this.state.text} />
                                    </Form.Group>
                                </Form>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Copy post ID</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{this.state.postId}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={() => { navigator.clipboard.writeText(this.state.postId) }}>
                                    Copy ID
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </Container>
            </div>
        )

    }
}


export default Voice;