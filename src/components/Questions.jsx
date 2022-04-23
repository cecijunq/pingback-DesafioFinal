import React, { Component } from 'react';
import axios from "axios";
import Results from './Results';
 
class Questions extends Component {
    state = {
        questions: [], //para cada item do array, qro renderizar um item no html
        result: {},
        score: 0
    };
    //map em questions: terá acesso ao que há em cada objeto em cada loop/repetição
 
    componentDidMount() {
        axios
            .get("https://opentdb.com/api.php?amount=10&type=boolean")
            .then(({data}) => {
                this.setState({questions: data.results, result: data.results[0]})
            })
            .catch((error) => console.log("cai no erro"));
 
        // fetch(
        //     "https://opentdb.com/api.php?amount=10&type=boolean")
        //     .then((response) => response.json())
        //     .then(({results}) =>
        //         this.setState({questions: results}))
        //     //fala que questions será igual ao array results (terá os mesmos valores)
        //     .catch((error) => console.log("cai no erro"));
    }
 
    handleAnswerChosen() {
        if(button.question.correct_answer){
            let score = this.state.score;
            score++;
        }
    }


    handleNextQuestion() {
        this.setState({result: result + 1})
    }
 
    render() {
        return (
            <>
                <h2>Questions</h2>

               
                {this.state.questions.map((question, index) => (
                    <div key={index}>
                        <span className="question">{question.question}</span>
                        <p className="difficulty">{question.difficulty}</p>
 
                        <div className="answers">
 
                            {[...question.incorrect_answers, question.correct_answer].map(
                                (answer) => (
                                    <button key={answer}>{answer}</button>
                                )
                            )}                            
                           
                        </div>
                    </div>
                ))}
 
                <h3>Score: {this.state.score}</h3>
            </>
 
        );
    }
}
 
export default Questions;
 
//a cada loop, terá acesso a um objeto de questions, que é a question
