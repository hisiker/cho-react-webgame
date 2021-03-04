import React, { useState, useRef } from "react";

const WordRelayHooks = () => {
  const [word, setWord] = useState("삼라");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const refInput = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
    } else {
      setResult("땡");
    }
    refInput.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={refInput}
          type="text"
          value={value}
          onChange={onChangeInput}
        />
        <button type="submit">클릭!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelayHooks;
