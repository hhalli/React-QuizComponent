import React, {Component} from 'react';

class QuizEnd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        )
    }
}

export default QuizEnd;