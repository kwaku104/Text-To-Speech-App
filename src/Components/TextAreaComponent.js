import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class Text extends React.Component {
    render() {
        return (
            <div className="Text">
                <Container>
                    <Row className="g-2">
                        <Col md>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

export default Text;