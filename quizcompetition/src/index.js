import React from 'react';
import ReactDOM from 'react-dom';
import DisplaySummary from './DisplaySummary';
import DisplayQuestionsAnswers from './DisplayQuestionsAnswers';

class Root extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            correctAnswer: 0,
            wrongAnswer: 0
        }
    }
    getResults = (right, wrong) => {
        this.setState({ "correctAnswer": this.state.correctAnswer + right, "wrongAnswer": this.state.wrongAnswer + wrong });

    }
    render() {
        return <div><DisplaySummary correctAnswer={this.state.correctAnswer} wrongAnswer={this.state.wrongAnswer} />  <DisplayQuestionsAnswers getResults={this.getResults} /></div>
    }
}
export default Root
ReactDOM.render(<Root />, document.getElementById("root"))