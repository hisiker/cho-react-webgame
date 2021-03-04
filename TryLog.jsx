import React, { PureComponent } from "react";

class TryLog extends PureComponent {
  render() {
    const { tryList } = this.props;
    return (
      <li>
        <div>{tryList.try}</div>
        <div>{tryList.result}</div>
      </li>
    );
  }
}

export default TryLog;
