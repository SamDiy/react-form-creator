import React, { useState, Fragment } from 'react';
import Editor from './editor/Editor';
import Builder from './builder/Builder';

const jsonData = require("../../test_examples/loginForm.json");

function App() {

  const [data, setData] = useState({});

  const [card, setCard] = useState({ rows: [] });

  const onChangeData = (newData) => {
    setData(newData);
  }

  const onChangeCard = (newCard) => {
    setCard(newCard);
  }

  return <Fragment>
    {/* <Editor onChangeCard={onChangeCard} card={card}/> */}
    <Builder onChangeData={onChangeData} cardField={{ data, view: jsonData.rows }}/>
  </Fragment>
}

export default App;