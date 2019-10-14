import React, { Fragment } from 'react';

export function Field (props) {
  
  let { fieldView } = props;

  console.log(fieldView);
  
  const getFieldProps = () => {

    let fieldProps = { ...fieldView };
    delete fieldProps.class;
    delete fieldProps.styles;
    delete fieldProps.title;
    delete fieldProps.ref;
    if (fieldView.class)
      fieldProps['className'] = fieldView.class;

    return fieldProps;
  }

  return React.createElement("input", getFieldProps());
}