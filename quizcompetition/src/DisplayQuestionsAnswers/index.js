import React from 'react';
import quizquestionandanswers from '../data.js'
import Loadanswers from '../Loadanswers/index.js';

function DisplayQuestionHeader(props) {
    return <div>
        <h1>Question : {props.index} of {props.total}</h1>
    </div>
}

function Loadquestions(props) {
    return <div>
        <h3>{props.question}</h3>
    </div>
}


class DisplayQuestionsAnswers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: quizquestionandanswers,
            index: 1,
            correctanswer: 0,
            wronganswer: 0
        }

    }
    returnoutput = (value) => {
        if (this.state.data[this.state.index].correctanswer === value) {
            this.props.getResults(1, 0);
        } else {
            this.props.getResults(0, 1);
        }
        this.setState({ "index": this.state.index + 1 })
    }
    render() {
        return <div>
            <DisplayQuestionHeader index={this.state.index} total={this.state.data.length} />
            <span>
                {
                    this.state.data.map(
                        e => <div>{e.index === this.state.index ? <div><Loadquestions question={e.question} /> <Loadanswers answer={e.answer} returnoutput={this.returnoutput} /></div> : null}</div>
                    )
                }
            </span>
        </div>
    }
}

export default DisplayQuestionsAnswers