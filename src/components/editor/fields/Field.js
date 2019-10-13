import React, { useState } from 'react';
import { FieldCard } from './FieldCard';

export function Field(props) {

  let { field, changeFieldPosition, fieldIndex, rowIndex, saveField } = props;

  const [cardIsVisible, setCardVisible] = useState(false);

  const fieldToString = () => {
    return `Key - ${field.key}, Class - ${field.class}, Type - ${field.type}, Title - ${field.title}`;
  }

  return <div className="field-view">
    { cardIsVisible && <FieldCard saveField={saveField} fieldIndex={fieldIndex} rowIndex={rowIndex} field={field} setCardVisible={setCardVisible}/> }
    <div onClick={() => changeFieldPosition(rowIndex, fieldIndex - 1, fieldIndex,  field)} className="move-btn move-left">&lt;</div>
    <div onClick={() => setCardVisible(true)} className="element-data">
      <span>{fieldToString()}</span>
    </div>
    <div onClick={() => changeFieldPosition(rowIndex, fieldIndex + 1, fieldIndex, field)} className="move-btn move-right">&gt;</div>
  </div>

}