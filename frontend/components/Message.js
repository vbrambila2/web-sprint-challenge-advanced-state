import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../state/action-creators';

export function Message(props) {
  const { infoMessage } = props;
  console.log(infoMessage, "info");

  useEffect(() => [
    setMessage()
  ], [])

  return <div id="message">{ infoMessage }</div>
}

const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage
  }
}

export default connect(mapStateToProps, { setMessage })(Message)
