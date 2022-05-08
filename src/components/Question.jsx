import React, { Component } from 'react';
import Questions from './Questions';

class Question extends Component {
    state = {
        correct_answer: [],
        answer: [],
        questionScore: 0
    }
    
    // handleAnswerChosen = (answer, correct_answer) => {
    //     console.log("i chose an alternative");
    //     if(answer === correct_answer){
    //         this.setState({ score: this.state.score + 1 });
    //     }
    // }
    handleAnswerChosen = () => {
        console.log("i chose an alternative");
        const { score } = this.props;
        const { correct_answer, answer } = this.state;

        if(answer == correct_answer){
            this.setState({ score: score[questionScore = 1],
            questionScore: questionScore = 1 });
            // this.setState({ score: this.state.score + 1 });
        }
    }

    render(index) {
        const { question } = this.props;
        
        console.log(question); 
        return (
            
            <div className='teste'>
                <span className="result">{question.question}</span>
                <p className="difficulty">{question.difficulty}</p>

                <div className="answers">
                    {[...question.incorrect_answers, question.correct_answer].map(
                        (answer) => (
                            <button className='btn_ans' onClick={this.handleAnswerChosen} key={answer}>{answer}</button>
                        )
                    )}                            
                       
                </div>

            </div>

        );
    }
}
 
export default Question;