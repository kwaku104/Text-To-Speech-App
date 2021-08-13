import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

class Post extends React.Component {
    state = {
        postId: "",
        tableData: [],
        error: false
    }

    API_ENDPOINT = ''

    handleErrorClose = () => {
        this.setState({
            postId: this.state.postId,
            tableData: this.state.tableData,
            error: false
        })
    }

    onSubmit = () => {
        if (this.state.postId === "") {
            this.setState((oldState) => {
                return {
                    ...oldState,
                    error: true
                }
            })
        } else {
            axios.get(`${this.API_ENDPOINT}?postId=${this.state.postId}`)
                .then(res => {
                    this.setState({
                        postId: this.state.postId,
                        tableData: res.data,
                        error: this.state.error
                    })
                    // res.data.forEach(element => {

                    // });
                })
            // console.log(this.state.postId);
        }
    }

    render() {
        let errorAlert;

        const searchRenderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                This button searches for posts based on id provided or *
            </Tooltip>
        );

        if (this.state.error) {
            errorAlert = <Container>
                <Alert variant="danger" onClose={this.handleErrorClose} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Enter a post ID or * to display all posts
                    </p>
                </Alert>
            </Container>

        } else {
            errorAlert = null
        }
        return (
            <div className="Post">
                <Container>
                    <Row className="g-2">
                        {/* <Col md></Col>
                        <Col md></Col> */}
                        <Col md>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Provide post ID which you want to retrieve or * to return all posts:"
                                    aria-label="Provide post ID"
                                    aria-describedby="basic-addon2"
                                    className="postId"
                                    onChange={_id => this.setState({ postId: _id.target.value })}
                                    type="text"
                                    value={this.state.postId}
                                />
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={searchRenderTooltip}
                                >
                                    <Button
                                        variant="outline-secondary"
                                        id="button-addon2"
                                        className="searchButton"
                                        onClick={this.onSubmit}>
                                        Search
                                    </Button>
                                </OverlayTrigger>
                            </InputGroup>
                        </Col>
                    </Row>
                    {errorAlert}
                    <Table responsive striped bordered hover variant="dark">
                        {/* <thead>
                        
                    </thead> */}
                        <thead>
                            <tr>
                                <th>Post ID</th>
                                <th>Voice</th>
                                <th>Post</th>
                                <th>Status</th>
                                <th>Player</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tableData.map(tdata => {
                                return <tr>
                                    <td>{tdata['id']}</td>
                                    <td>{tdata['voice']}</td>
                                    <td>{tdata['text']}</td>
                                    <td>{tdata['status']}</td>
                                    <td>{typeof tdata['url'] !== "undefined" ? <audio controls><source src={tdata['url']} type='audio/mpeg'></source></audio> : ""} </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )

    }
}

export default Post;