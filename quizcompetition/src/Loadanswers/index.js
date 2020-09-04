import React from 'react';
import  './index.css';


class Loadanswers extends React.Component {
    nextQuestion =(e) => {
        this.props.returnoutput(e.target.getAttribute("data-index"))
    }
    render() {
        return <div>
        <ol>
            <li data-index ="1" onClick ={this.nextQuestion} >{this.props.answer.One}</li>
            <li data-index = "2" onClick ={this.nextQuestion}>{this.props.answer.Two}</li>
            <li data-index = "3" onClick ={this.nextQuestion}>{this.props.answer.Three}</li>
            <li data-index = "4" onClick ={this.nextQuestion}>{this.props.answer.Four}</li>
        </ol>
    </div>
    }
}

export default Loadanswers