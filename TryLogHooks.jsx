import React, { Component } from "react";

const TryLog = (props) => {
  return (
    <>
      <li>{`${props.tryList.try} [ ${props.tryList.result}] `}</li>
    </>
  );
};

export default TryLog;
