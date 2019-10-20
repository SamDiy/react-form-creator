import React, { useState } from 'react';
import { FieldCard } from './FieldCard';

export function Field(props) {

  let { field, changeFieldPosition, fieldIndex, rowIndex, saveField, deleteField } = props;

  const [cardIsVisible, setCardVisible] = useState(false);

  const fieldToString = () => {
    return `Key - ${field.key}, Class - ${field.class}, Type - ${field.type}, Title - ${field.title}`;
  }

  return <div className="field-view" draggable>
    { cardIsVisible && <FieldCard saveField={saveField} fieldIndex={fieldIndex} rowIndex={rowIndex} field={field} setCardVisible={setCardVisible}/> }
    <div onClick={() => changeFieldPosition(rowIndex, fieldIndex - 1, fieldIndex,  field)} className="move-btn move-left">&lt;</div>
    <div onClick={() => setCardVisible(true)} className="element-data">
      <div>Key - {field.key}</div>
      <div>Type - {field.type}</div>
      {/* <div>Title - {field.title}</div> */}
    </div>
    <div>
      <span onClick={() => deleteField(rowIndex, fieldIndex)} className="delete-btn btn-left-bottom-border">&#10005;</span>
    </div>
    <div onClick={() => changeFieldPosition(rowIndex, fieldIndex + 1, fieldIndex, field)} className="move-btn move-right">&gt;</div>
  </div>

}