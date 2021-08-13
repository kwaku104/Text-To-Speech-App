import React from 'react';
import Form from 'react-bootstrap/Form';


const voice = () => {
    return (
        <div className="Voice">
            <Form.Group>
                <Form.Label>Voice: </Form.Label>
                <Form.Control as='select'></Form.Control>
                <option>Hello</option>
                <option>There</option>
                <option>Three</option>
            </Form.Group>
        </div>
    )
}

export default voice;