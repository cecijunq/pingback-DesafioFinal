import React, { Component } from 'react';
import axios from "axios";
import Results from './Results';
import Question from './Question';
 
class Questions extends Component {
    state = {
        questions: [], //para cada item do array, quero renderizar um item no html
        question: {}, //é a pergunta atual
        questionIndex: 0,
        score: 0,
    };
    //map em questions: terá acesso ao que há em cada objeto em cada loop/repetição
 
    componentDidMount() {
        axios
            .get("https://opentdb.com/api.php?amount=10&type=boolean")
            .then(({data}) => {
                console.log("results", data);
                this.setState({ questions: data.results, question: data.results[0], score: 0 })
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

    handleNextQuestion = (index) => {
        console.log("moving to the next question");
        const { questions, questionIndex } = this.state;
        
        console.log(questionIndex + 1);
        this.setState({ question: questions[questionIndex + 1], questionIndex: questionIndex + 1 });
    }
    
 
    render() {
        return (
            <>
                <h2>Questions</h2>

                {console.log("Object.keys", Object.keys(this.state.question))}

                { Object.keys(this.state.question).length && <Question question={this.state.question} /> }

                <button onClick={this.handleNextQuestion}>Next question</button>

                <h3>Score: {this.state.score}</h3>

            </>
 
        );
    }
}
 
export default Questions;
 
//a cada loop, terá acesso a um objeto de questions, que é a question
