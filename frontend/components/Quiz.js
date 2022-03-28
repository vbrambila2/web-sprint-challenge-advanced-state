import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  selectAnswer, 
  setQuiz,
  setMessage,
  fetchQuiz,
  postQuiz,
  postAnswer 
} from '../state/action-creators';

export function Quiz(props) {
  const { 
    quiz, 
    selectedAnswer,
    infoMessage,
    selectAnswer, 
    setQuiz,
    setMessage,
    fetchQuiz,
    postQuiz,
    postAnswer  
  } = props;

  useEffect(() => {
    fetchQuiz();
  }, [])

  console.log(quiz, "quiz");
  console.log(selectedAnswer, "selectedAnswer");
  console.log(infoMessage, "infoMessage");

  const onClickOne = () => {
    selectAnswer(quiz.answers[0].text)
    const buttonOne = document.querySelector(".answerOne");
    const buttonTwo = document.querySelector(".answerTwo");
    if (buttonTwo.classList.contains("selected")) {
      buttonTwo.classList.remove("selected")
      buttonOne.classList.add("selected")
    } else {
      buttonOne.classList.add("selected")
    }
  }

  const onClickTwo = () => {
    selectAnswer(quiz.answers[1].text)
    const buttonOne = document.querySelector(".answerOne");
    const buttonTwo = document.querySelector(".answerTwo");
    if (buttonOne.classList.contains("selected")) {
      buttonOne.classList.remove("selected")
      buttonTwo.classList.add("selected")
    } else {
      buttonTwo.classList.add("selected")
    }
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{ quiz ? quiz.question : '' }</h2>

            <div id="quizAnswers">
              <div className="answer answerOne">
                { quiz ? quiz.answers[0].text : '' }
                <button onClick={onClickOne}>
                  { selectedAnswer === quiz.answers[0].text ? 'SELECTED' : 'Select' }
                </button>
              </div>

              <div className="answer answerTwo">
                { quiz ? quiz.answers[1].text : '' }
                <button onClick={onClickTwo}>
                { selectedAnswer === quiz.answers[1].text ? 'SELECTED' : 'Select' }
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={selectedAnswer === null ? "disabled" : "" } >Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, {
  selectAnswer, 
  setQuiz,
  setMessage,
  fetchQuiz,
  postQuiz,
  postAnswer 
})(Quiz)