import React from 'react';
import './index.css';

function Loadcorrectanswernumber(props) {
    return <div><h1>Correct Answer {props.correctAnswer} </h1></div>
}

function Loadwronganswernumber(props) {
    return <div><h1>Wrong Answer {props.wrongAnswer} </h1></div>

}

class DisplaySummary extends React.Component {
    render() {
        return <table>
            <tr>
                <td><Loadcorrectanswernumber correctAnswer={this.props.correctAnswer} /> </td>
                <td><Loadwronganswernumber wrongAnswer={this.props.wrongAnswer} /> </td>
            </tr>
        </table>
    }
}

export default DisplaySummary;

