import React, { Component } from 'react';
import Questions from './Questions';

class Question extends Component {
    handleAnswerChosen(answer, correct_answer) {
        if(answer === answer.correct_answer){
            this.setState({score: this.state.score++});
        }
    }

    handleNextQuestion() {
        console.log("going to the next question");
        this.props.history.push(this.setState(this.state.question++));
    }

    render() {
        const { question } = this.props;
        console.log(question); 
        return (
            
            <div>
                <span className="result">{question.question}</span>
                <p className="difficulty">{question.difficulty}</p>

                <div className="answers">
                    {[...question.incorrect_answers, question.correct_answer].map(
                        (answer) => (
                            <button onClick={this.handleAnswerChosen} key={answer}>{answer}</button>
                        )
                    )}                            
                       
                </div>

                <button onClick={this.handleNextQuestion}>Next question</button>

            </div>

        );
    }
}
 
export default Question;