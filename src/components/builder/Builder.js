import React, { Fragment } from 'react';
import { Field } from './Field';

function Builder(props) {
  let { cardField, onChangeData } = props;
  let view = cardField.view || [];
  const data = cardField.data || {};

  const onChangeFieldData = (key, value) => {
    let newData = {...data};
    newData[key] = value;
    onChangeData(newData);
  }

  const buttonMethods = {
    consoleOk: () => { console.log("Ok") }
  };

  return <Fragment>
    {view.map((row, rowIndex) =>
      <div key={rowIndex}>
        {row.map((field, fieldIndex) => 
          <Field buttonMethods={buttonMethods} onChangeFieldData={onChangeFieldData} key={fieldIndex} fieldView={field}/>
        )}
      </div>
    )}
  </Fragment>
}


// React.createElement("div", { className: "my-div" }, "Builder");
export default Builder;