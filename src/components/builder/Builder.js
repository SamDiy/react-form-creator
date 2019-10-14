import React, { useState, Fragment } from 'react';
import { Field } from './Field';

function Builder(props) {
  let { cardField } = props;
  let view = cardField.view || [];

  return <Fragment>
    {view.map((row, rowIndex) =>
      <div key={rowIndex}>
        {row.map((field, fieldIndex) => 
          <Field key={fieldIndex} fieldView={field}/>
        )}
      </div>
    )}
  </Fragment>
}


// React.createElement("div", { className: "my-div" }, "Builder");
export default Builder;