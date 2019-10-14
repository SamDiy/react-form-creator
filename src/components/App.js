import React, { Fragment } from 'react';
import Editor from './editor/Editor';
import Builder from './builder/Builder';

const jsonData = require("../../test_examples/loginForm.json");

function App() {
  // let data = {};
  // jsonData.forEach((row) => {
  //   row.forEach((field) => {
  //     if (["", "button", "reset", "submit"].indexOf(field.type) == -1)
  //       data[field.key] = null;
  //   });
  // });
  return <Fragment>
    {/* <Editor/> */}
    <Builder cardField={{ data: {}, view: jsonData }}/>
  </Fragment>
}

export default App;