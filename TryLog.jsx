import React, { Component } from "react";

class TryLog extends Component {
  render() {
    return (
      <>
        <li>{`${this.props.tryList.try} [ ${this.props.tryList.result}] `}</li>
      </>
    );
  }
}

export default TryLog;
