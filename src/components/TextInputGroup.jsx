import Form from 'react-bootstrap/Form';

const TextInputGroup = () => {
    return (
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Label for text input</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
            <Form.Text className="text-muted">
                Input text help text
            </Form.Text>
        </Form.Group>
    )
}

export default TextInputGroup;