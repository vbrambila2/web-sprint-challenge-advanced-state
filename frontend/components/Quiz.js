import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  selectAnswer, 
  fetchQuiz,
  postAnswer 
} from '../state/action-creators';

export function Quiz(props) {
  const { 
    quiz, 
    selectedAnswer,
    selectAnswer, 
    fetchQuiz,
    postAnswer  
  } = props;

  useEffect(() => {
    quiz ? null : fetchQuiz();
  }, [])

  const onClickOne = () => {
    const quizId = quiz.quiz_id;
    const answerId = quiz.answers[0].answer_id;
    const answerText = quiz.answers[0].text
    selectAnswer({quizId, answerId, answerText})
    const buttonOne = document.querySelector(".answerOne");
    const buttonTwo = document.querySelector(".answerTwo");
    const submitOne = document.querySelector(".submitOne");
    const submitTwo = document.querySelector(".submitTwo");
    if (buttonTwo.classList.contains("selected")) {
      buttonTwo.classList.remove("selected")
      buttonOne.classList.add("selected")
      submitOne.textContent = 'SELECTED'
      submitTwo.textContent = 'Select'
    } else {
      buttonOne.classList.add("selected")
      submitOne.textContent = 'SELECTED'
    }
  }

  const onClickTwo = () => {
    const quizId = quiz.quiz_id;
    const answerId = quiz.answers[1].answer_id;
    const answerText = quiz.answers[1].text
    selectAnswer({quizId, answerId, answerText})
    const buttonOne = document.querySelector(".answerOne");
    const buttonTwo = document.querySelector(".answerTwo");
    const submitOne = document.querySelector(".submitOne");
    const submitTwo = document.querySelector(".submitTwo");
    if (buttonOne.classList.contains("selected")) {
      buttonOne.classList.remove("selected")
      buttonTwo.classList.add("selected")
      submitOne.textContent = 'Select'
      submitTwo.textContent = 'SELECTED'
    } else {
      buttonTwo.classList.add("selected")
      submitTwo.textContent = 'SELECTED'
    }
  }

  const submitAnswer = () => {
    const quiz_id = selectedAnswer.quizId;
    const answer_id = selectedAnswer.answerId;
    postAnswer({ quiz_id, answer_id });
    fetchQuiz();
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
                <button onClick={onClickOne} className="submitOne">
                  Select
                </button>
              </div>

              <div className="answer answerTwo">
                { quiz ? quiz.answers[1].text : '' }
                <button onClick={onClickTwo} className="submitTwo">
                  Select
                </button>
              </div>
            </div>

            <button 
              id="submitAnswerBtn" 
              disabled={selectedAnswer === null ? "disabled" : "" } 
              onClick={submitAnswer}
              >
                Submit answer
              </button>
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
  }
}

export default connect(mapStateToProps, {
  selectAnswer, 
  fetchQuiz,
  postAnswer 
})(Quiz)