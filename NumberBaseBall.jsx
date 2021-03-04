import React, { Component } from "react";

function getNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let index = 0; index < 4; index++) {
    let rnd = Math.ceil(Math.random() * numbers.length - 1);
    data.push(numbers[rnd]);
    numbers.splice(rnd, 1);
  }
  return array;
}

class NumberBaseBall extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (this.state.value.length !== 4) return;

    if (this.state.tries.length === 10) {
      this.setState({
        result: "허용 횟수를 전부 사용했습니다. (다음 기회에...)",
      });

      return;
    }
    const intValue = this.state.value.split("").map((v) => parseInt(v));

    let s = 0;
    let b = 0;

    this.state.answer.forEach((v, i) => {
      if (intValue.includes(v)) {
        if (intValue.indexOf(v) === i) {
          ++s;
        } else {
          ++b;
        }
      }
    });

    if (s === 4) {
      this.setState({
        result: "이겼습니다.",
        value: "",
      });
      this.state.tries.push(`${s} S  ${b} B`);
    } else {
      this.setState({
        result: `${s} S  ${b} B`,
        value: "",
      });
      this.state.tries.push(`${s} S  ${b} B`);
    }
    this.refInput.focus();
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  refInput;

  onRefInpt = (c) => {
    this.refInput = c;
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength="4"
            ref={this.onRefInpt}
            value={this.state.value}
            onChange={this.onChangeInput}
            autoFocus
          />
          <button type="submit">입력!</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseBall;
