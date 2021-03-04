const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  constructor(props) {
    super(props);

    this.refInput = React.createRef();

    this.state = {
      word: "삼라",
      value: "",
      result: "",
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(this.state.word[this.state.word.length - 1]);
    console.log(this.state.value[0]);
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
    } else {
      this.setState({
        result: "땡",
      });
    }
    this.refInput.current.focus();
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.refInput}
            type="text"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button type="submit">입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
