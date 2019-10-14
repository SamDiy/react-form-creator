import React, { useState } from 'react';

import { Field } from './fields';

function Redactor() {

  const [rows, setRows] = useState([]);

  const addNewRow = () => {
    setRows([...rows, []]);
  }

  const addNewField = (index) => {
    let newRows = [...rows];
    let newRow = [...newRows[index], {}];
    newRows[index] = newRow;
    setRows(newRows);
  }

  const changeFieldPosition = (rowIndex, position, oldPosition, field) => {
    let newRows = [...rows];
    let row = newRows[rowIndex];
    if (position < 0 || position >= row.length)
      return;
    let movedElement = row[position];
    row[oldPosition] = movedElement;
    row[position] = field;
    newRows[rowIndex] = row;
    setRows(newRows);
  }

  const changeRowPosition = (position, oldPosition, row) => {
    let newRows = [...rows];
    if (position < 0 || position >= newRows.length)
      return;
    newRows[oldPosition] = newRows[position];
    newRows[position] = row;
    setRows(newRows);
  }

  const saveField = (rowIndex, fieldIndex, field) => {
    let newRows = [...rows];
    newRows[rowIndex][fieldIndex] = field;
    setRows(newRows);
  }

  return <div>
    <button onClick={addNewRow} type="button">Add new row</button>
    <ul>
      {rows.map((row, rowIndex) =>
        <li key={rowIndex}>
          <ul className="inline-ul">
            <li className="inline-li">
              <div onClick={() => changeRowPosition(rowIndex - 1, rowIndex, row)} className="move-row-btn"><span className="rotate-sign">&lt;</span></div>
              <div onClick={() => addNewField(rowIndex)} className="button-new-field">+</div>
              <div onClick={() => changeRowPosition(rowIndex + 1, rowIndex, row)} className="move-row-btn"><span className="rotate-sign">&gt;</span></div>
            </li>
            {row.map((field, fieldIndex) =>
              <li className="inline-li" key={fieldIndex}>
                <Field saveField={saveField} rowIndex={rowIndex} changeFieldPosition={changeFieldPosition} field={field} fieldIndex={fieldIndex}/>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>
  </div>
}

export default Redactor;