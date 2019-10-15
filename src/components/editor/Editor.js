import React, { useState } from 'react';

import { Field } from './fields';

function Redactor(props) {

  const { onChangeCard, card } = props;
  const rows = card.rows || [];
  // const [rows, setRows] = useState([]);

  const addNewRow = () => {
    onChangeCard({ rows: [...rows, []] });
  }

  const addNewField = (index) => {
    let newRows = [...rows];
    let newRow = [...newRows[index], {}];
    newRows[index] = newRow;
    onChangeCard({ rows: newRows });
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
    onChangeCard({ rows: newRows });
  }

  const changeRowPosition = (position, oldPosition, row) => {
    let newRows = [...rows];
    if (position < 0 || position >= newRows.length)
      return;
    newRows[oldPosition] = newRows[position];
    newRows[position] = row;
    onChangeCard({ rows: newRows });
  }

  const saveField = (rowIndex, fieldIndex, field) => {
    let newRows = [...rows];
    newRows[rowIndex][fieldIndex] = field;
    onChangeCard({ rows: newRows });
  }

  const deleteField = (rowIndex, fieldIndex) => {
    if(!confirm('Do you shure you want to delete it'))
     return;
    let newRows = [...rows];
    newRows[rowIndex] = newRows[rowIndex].filter((field, index) => index != fieldIndex);
    onChangeCard({ rows: newRows });
  }

  const deleteRow = (rowIndex) => {
    if(!confirm('Do you shure you want to delete it'))
     return;
    let newRows = [...rows];
    onChangeCard({ rows: newRows.filter((row, index) => index != rowIndex) });
  }

  return <div>
    <button onClick={addNewRow} type="button">Add new row</button>
    <ul>
      {rows.map((row, rowIndex) =>
        <li key={rowIndex}>
          <ul className="inline-ul">
            <li className="inline-li delete-li-element">
              <div >
                <span onClick={() => deleteRow(rowIndex)} className="delete-btn btn-all-border">&#10005;</span>
              </div>
            </li>
            <li className="inline-li">
              <div onClick={() => changeRowPosition(rowIndex - 1, rowIndex, row)} className="move-row-btn"><span className="rotate-sign">&lt;</span></div>
              <div onClick={() => addNewField(rowIndex)} className="button-new-field">+</div>
              <div onClick={() => changeRowPosition(rowIndex + 1, rowIndex, row)} className="move-row-btn"><span className="rotate-sign">&gt;</span></div>
            </li>
            {row.map((field, fieldIndex) =>
              <li className="inline-li" key={fieldIndex}>
                <Field deleteField={deleteField} saveField={saveField} rowIndex={rowIndex} changeFieldPosition={changeFieldPosition} field={field} fieldIndex={fieldIndex}/>
              </li>
            )}
          </ul>
        </li>
      )}
    </ul>
  </div>
}

export default Redactor;