import React, { Component } from 'react';
import Questions from './Questions';

class Question extends Component {
    
    render() { 
        return (
            {this:state.questions.map((result, index) => (
                <div key={index}>
                    <span className="result">{result.question}</span>
                    <p className="difficulty">{result.difficulty}</p>

                    <div className="answers">
                        {[...result.incorrect_answers, result.correct_answer].map(
                            (answer) => (
                                <button onClick={this.handleAnswerChosen} key={answer}>{answer}</button>
                            )
                        )}                            
                       
                    </div>
                </div>

            ))}
        );
    }
}
 
export default Question;