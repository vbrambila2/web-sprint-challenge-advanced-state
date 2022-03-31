import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const [disabled, setDisabled] = useState(true) 
  const { form, inputChange, postQuiz } = props;

  const onChange = () => {
    const question_text_input = document.getElementById("newQuestion");
    const newQuestion = question_text_input.value
    const true_answer_text_input = document.getElementById("newTrueAnswer");
    const newTrueAnswer = true_answer_text_input.value
    const false_answer_text_input = document.getElementById("newFalseAnswer");
    const newFalseAnswer = false_answer_text_input.value
    inputChange({ newQuestion, newTrueAnswer, newFalseAnswer })
    if (newFalseAnswer.trim().length === 0) {
      setDisabled(true) 
    } else if (newTrueAnswer.trim().length === 0) {
      setDisabled(true) 
    } else if (newQuestion.trim().length === 0) {
      setDisabled(true) 
    } else {
      setDisabled(false)
    }
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const question_text_input = document.getElementById("newQuestion");
    const question_text = question_text_input.value
    const true_answer_text_input = document.getElementById("newTrueAnswer");
    const true_answer_text = true_answer_text_input.value
    const false_answer_text_input = document.getElementById("newFalseAnswer");
    const false_answer_text = false_answer_text_input.value
    postQuiz({ question_text, true_answer_text, false_answer_text })
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value={form.newQuestion ? form.newQuestion : ""} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input value={form.newTrueAnswer ? form.newTrueAnswer : ""} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={form.newFalseAnswer ? form.newFalseAnswer : ""} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button 
      id="submitNewQuizBtn"
      disabled={disabled}
      >
        Submit new quiz
      </button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)