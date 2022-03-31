import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../state/action-creators';

export function Message(props) {
  const { infoMessage, form } = props;

  useEffect(() => [
    setMessage()
  ], [])

  console.log(infoMessage);

  return <div id="message">{infoMessage }</div>
}

const mapStateToProps = state => {
  return {
    form: state.form,
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, { setMessage })(Message)
