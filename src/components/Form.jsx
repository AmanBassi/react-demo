import TextInputGroup from './TextInputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyForm = () => {
    return (
        <div>
            <h2>My Form</h2>
            <Form>
                <TextInputGroup />
                <TextInputGroup />
                <TextInputGroup />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default MyForm;