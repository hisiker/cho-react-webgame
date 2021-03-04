import React, { memo } from "react";

const TryLog = memo(({ tryList }) => {
  return (
    <li>
      <div>{tryList.try}</div>
      <div>{tryList.result}</div>
    </li>
  );
});

export default TryLog;
