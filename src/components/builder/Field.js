import React, { Fragment } from 'react';
import { __values } from 'tslib';

export function Field (props) {
  
  let { fieldView, onChangeFieldData, buttonMethods } = props;

  // console.log(fieldView);
  
  const getFieldProps = () => {

    let fieldProps = { ...fieldView };
    delete fieldProps.class;
    delete fieldProps.styles;
    delete fieldProps.title;
    delete fieldProps.ref;
    delete fieldProps.methodName;
    if (fieldView.class)
      fieldProps['className'] = fieldView.class;
    if (["button", "reset", "submit"].indexOf(fieldView.type) != -1){
      fieldProps['value'] = fieldView.title;
      fieldProps['onClick'] = buttonMethods[fieldView.methodName];
    } else {
      fieldProps['onChange'] = (event) => onChangeData(fieldProps.key, event.target.value)
    }

    if (fieldView.styles)
      fieldProps['style'] = getFieldStyles(fieldView.styles);
    
    return fieldProps;
  }

  const getFieldStyles = (arrStyle) => {
    return arrStyle.reduce((obj, item) => (obj[item.key] = item.value, obj) ,{});
  }

  const onChangeData = (key, value) => {
    onChangeFieldData(key, value);
  }

  const getElementLabel = () => {
    if(["button", "reset", "submit"].indexOf(fieldView.type) == -1) {
      return React.createElement("label", { className: `${fieldView.class}-label` }, fieldView.title);
    } else {
      return null;
    }
  }

  return React.createElement(React.Fragment, {},
    getElementLabel(), 
    React.createElement("input", getFieldProps())
  )
}