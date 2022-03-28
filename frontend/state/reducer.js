import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE, 
  RESET_FORM, 
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE, 
  SET_SELECTED_ANSWER,
  POST_MESSAGE,
  SET_QUIZ_INITIAL
} from './action-types';

// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return state + action.payload > 5 ? state = initialWheelState : state + action.payload
    case MOVE_COUNTERCLOCKWISE:
      return state - action.payload < 0 ? state = 5 : state - action.payload
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return action.payload
    case SET_QUIZ_INITIAL:
      return initialQuizState
    default:
      return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  console.log(state, "reducer");
  switch(action.type) {
    case SET_INFO_MESSAGE:
      return action.payload
    case POST_MESSAGE:
      return state
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
