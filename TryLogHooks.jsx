import React, { Component } from "react";

const TryLog = ({ tryList }) => {
  return (
    <>
      <li>{`${tryList.try} [ ${tryList.result}] `}</li>
    </>
  );
};

export default TryLog;
