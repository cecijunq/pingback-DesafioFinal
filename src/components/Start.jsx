import React, { Component } from 'react';
 
class Start extends Component {
    state = {  }
 
    handleChangingPage = () => {
        console.log("changing the website page");
        this.props.history.push('/questions');
    }
 
    render() {
        return (
            <>
                <h2>Welcome</h2>
           
                <p>This is Pingback Trivia Game</p>
 
                <p>You will receive 10 questions. Can you answer all right?</p>
 
                <p>When you are ready, click on the button below</p>
 
                <button onClick={this.handleChangingPage}>START</button>
            </>
        );
    }
}
 
export default Start;