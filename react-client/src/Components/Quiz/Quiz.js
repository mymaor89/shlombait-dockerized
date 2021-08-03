import React from "react";
import { quizData } from "./quizData";
import "./quizStyles.css";
class Quiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    answers: [],
    disabled: true,
    isEnd: false
  };

  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: quizData.questions[this.state.currentQuestion].question,
        options: quizData.questions[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    console.log("test");
    const { myAnswer, answers } = this.state;
    answers.push(myAnswer);
    this.setState({
      answers: answers,
      myAnswer: null
    });

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData.questions[this.state.currentQuestion].question,
          options: quizData.questions[this.state.currentQuestion].options
        };
      });
    }
  }
  //check answer
  checkAnswer = (answer) => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.questions.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    var rows = [];
    if (isEnd) {
      for (var i = 0; i < this.state.answers.length; i++) {
        if (quizData.questions[i].bad_option.includes(this.state.answers[i])) {
          rows.push(
            <li className="ui floating message options" key={i}>
              {quizData.questions[i].diagnose}
            </li>
          );
        }
      }
      if (rows.length === 0) {
        rows.push(
          <li className="ui floating message options" key={i}>
            {quizData.ideal}
          </li>
        );
      }
      return (
        <div className="result">
          <h3>תודה על השיתוף </h3>
          <div>
            מסקנות השאלון
            <ul>{rows}</ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="quiz">
          <h1 className="question">{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion + 1}  out of ${
            quizData.questions.length
          }`}</span>
          <div className="optionsContainer">
            {options.map((option) => (
              <p
                key={option.id}
                className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
                onClick={() => this.checkAnswer(option)}
              >
                {option}
              </p>
            ))}
          </div>
          {currentQuestion < quizData.questions.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.questions.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
      );
    }
  }
}

export default Quiz;
