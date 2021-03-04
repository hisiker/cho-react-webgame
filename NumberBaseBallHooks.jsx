import React, { useState } from "react";
import TryLogHooks from "./TryLogHooks";

function getNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let index = 0; index < 4; index++) {
    let rnd = Math.ceil(Math.random() * numbers.length - 1);
    array.push(numbers[rnd]);
    numbers.splice(rnd, 1);
  }
  return array;
}

const NumberBaseBall = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (value.length !== 4) return;

    const intValue = value.split("").map((v) => parseInt(v));

    let strike = 0;
    let ball = 0;

    answer.forEach((v, i) => {
      if (intValue.includes(v)) {
        if (intValue.indexOf(v) === i) {
          ++strike;
        } else {
          ++ball;
        }
      }
    });

    const outStr = `${strike} S  ${ball} B`;

    if (strike === 4) {
      setResult("HomeRun!!!!!!!!!!!");
      setTries((prevTries) => [...prevTries, { try: value, result: outStr }]);
      alert("게임을 재시작합니다.");
      setResult("");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      setResult(`남은 기회 ${10 - tries.length - 1}.`);
      setValue("");
      setTries((prevTries) => [...prevTries, { try: value, result: outStr }]);
      if (tries.length === 9) {
        alert("게임을 재시작합니다.");
        setResult("");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength="4" value={value} onChange={onChangeInput} autoFocus />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => (
          <TryLogHooks key={i + 1} tryList={v} />
        ))}
      </ul>
    </>
  );
};

export default NumberBaseBall;
