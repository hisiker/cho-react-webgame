const React = require("react");
const ReactDOM = require("react-dom");

const GuGuDan = require("./GuGuDan");
const WordRelay = require("./WordRelay");
const WordRelayHooks = require("./WordRelayHooks");

ReactDOM.render(<WordRelayHooks />, document.querySelector("#root"));

// Project is running at http://localhost:8080/

// WDS webpack dev server
// HMR hot module reloading
