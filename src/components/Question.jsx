import React, { Component } from 'react';
import Questions from './Questions';

class Question extends Component {
    
    handleAnswerChosen = (answer, correct_answer) => {
        console.log("i chose an alternative");
        if(answer === correct_answer){
            this.setState({ score: this.state.score + 1 });
        }
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

            </div>

        );
    }
}
 
export default Question;