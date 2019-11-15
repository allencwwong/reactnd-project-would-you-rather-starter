import React from 'react';

class QuestionDetails extends React.Component {
    render() {
        const qid = this.props.location;
        console.log(this.props);
        console.log(this.state);
        return <div>Question Detail Page</div>;
    }
}

export default QuestionDetails;
