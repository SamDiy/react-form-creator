import React, { useState, Fragment } from 'react';
import Editor from './editor/Editor';
import Builder from './builder/Builder';

const jsonData = require("../../test_examples/loginForm.json");

function App() {

  const [data, setData] = useState({});

  const onChangeData = (newData) => {
    setData(newData);
  }

  return <Fragment>
    <Editor/>
    {/* <Builder onChangeData={onChangeData} cardField={{ data, view: jsonData }}/> */}
  </Fragment>
}

export default App;