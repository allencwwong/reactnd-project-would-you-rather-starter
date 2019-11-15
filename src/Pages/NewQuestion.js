import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { handleSaveQuestion } from './../actions/questions';

class NewQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
    };

    handleChangeOption = (e, optionNumber) => {
        let options = {
            optionOne: this.state.optionOne,
            optionTwo: this.state.optionTwo,
        };
        options[optionNumber] = e.currentTarget.value;
        this.setState({
            ...options,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.optionOne !== '' && this.state.optionTwo !== '') {
            this.props.dispatch(
                handleSaveQuestion(
                    this.state.optionOne,
                    this.state.optionTwo,
                    this.props.authUser,
                ),
            );
        }
        this.props.history.push('/');
    };

    render() {
        let handleChangeOption = this.handleChangeOption,
            handleSubmit = this.handleSubmit;
        console.log(this.state);
        console.log(this.props.authUser);
        return (
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Card>
                    <Card.Header>Would You Rather?</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Control
                                    placeholder="Option One"
                                    onChange={(e) =>
                                        handleChangeOption(e, 'optionOne')
                                    }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="Option Two"
                                    onChange={(e) =>
                                        handleChangeOption(e, 'optionTwo')
                                    }
                                />
                            </Col>
                        </Row>
                        <Form.Group as={Row}>
                            <Col>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    authUser: state.authUser,
});

export default connect(mapStateToProps)(NewQuestion);
