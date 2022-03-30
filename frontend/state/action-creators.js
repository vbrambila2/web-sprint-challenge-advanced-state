import { number } from 'yup';
import axios from 'axios';
import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE, 
  RESET_FORM, 
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER,
  POST_MESSAGE,
  SET_QUIZ_INITIAL,
  POST_NEW_QUIZ
} from './action-types';
// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() { return { type: MOVE_CLOCKWISE, payload: 1 } }
  
export function moveCounterClockwise() { return { type: MOVE_COUNTERCLOCKWISE, payload: 1 } }

export function selectAnswer({quizId, answerId, answerText}) { return { type: SET_SELECTED_ANSWER, payload: {quizId, answerId, answerText} } }

export function setMessage() { return { type: POST_MESSAGE } }

export function setQuiz() { }

export function inputChange({ newQuestion, newTrueAnswer, newFalseAnswer }) { 
  return { 
    type: INPUT_CHANGE, 
    payload: { newQuestion, newTrueAnswer, newFalseAnswer } 
  } 
}

export function resetForm() { return { type: RESET_FORM } }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch({ type: SET_QUIZ_INITIAL })
    axios.get('http://localhost:9000/api/quiz/next')
        .then(res => {
          dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data })
        })
        .catch(err => console.error(err))
    }
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    
  
}
export function postAnswer({ quiz_id, answer_id }) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
      .then(res => {
        dispatch({ type: SET_INFO_MESSAGE, payload: res.data.message })
        //dispatch({ type: POST_ANSWER, payload: { selectedQuizId, selectedAnswerId } })
      })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz({ question_text, true_answer_text, false_answer_text }) {
  return function (dispatch) {
    dispatch({ type:RESET_FORM })
    axios.post('http://localhost:9000/api/quiz/new', { question_text, true_answer_text, false_answer_text })
      .then(res => {
        dispatch({ type: POST_NEW_QUIZ, payload: res.data })
      })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
