const React = require("react");
const { useState, useRef } = React; // 구조분해 문법.

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    inputEl.current.focus();
  };

  const onChanged = (e) => {
    setValue(e.target.value);
  };

  return (
    // React.Fragment의 간략한 표현.
    <>
      <div>{`${first} 곱하기 ${second} = ? `}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} type="number" value={value} onChange={onChanged} />
        <button type="submit">입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = GuGuDan;
