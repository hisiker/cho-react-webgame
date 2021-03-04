import React, { Component } from "react";
import TryLog from "./TryLog";

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

    const intValue = this.state.value.split("").map((v) => parseInt(v));

    let strike = 0;
    let ball = 0;

    this.state.answer.forEach((v, i) => {
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
      this.setState({
        result: "HomeRun!!!!!!!!!!!",
        tries: [...this.state.tries, { try: this.state.value, result: outStr }],
      });
      alert("게임을 재시작합니다.");
      this.setState({
        result: "",
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      this.setState({
        result: `남은 기회 ${10 - this.state.tries.length - 1}.`,
        value: "",
        tries: [...this.state.tries, { try: this.state.value, result: outStr }],
      });

      if (this.state.tries.length === 9) {
        alert("게임을 재시작합니다.");
        this.setState({
          result: "",
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength="4"
            value={this.state.value}
            onChange={this.onChangeInput}
            autoFocus
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => (
            <TryLog key={i} tryList={v} />
          ))}
        </ul>
      </>
    );
  }
}

export default NumberBaseBall;
