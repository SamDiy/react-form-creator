import React, { useState } from 'react';

export function FieldCard(props) {

  let { setCardVisible, saveField, fieldIndex, rowIndex } = props;

  const typeOptions = ["", "button", "checkbox", "date", "email", "file", "number", "password", "radio", "reset", "submit", "text", "url" ]

  const [field, setField] = useState({...props.field});

  const closeModal = (event) => {
    setCardVisible(false);
    event.stopPropagation();
  }

  const changeData = (key, value) => {
    let newField = {...field};
    newField[key] = value;
    setField(newField);
  }

  const chengeStyleData = (row, key, value) => {
    let styleData = [...field.styles || []];
    styleData[row][key] = value;
    setField({ ...field, styles: styleData });
  }

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const saveAndClose = (event) => {
    saveField(rowIndex, fieldIndex, field);
    closeModal(event);
  }

  return <div className="modal-container">
    <div className="modal-field-card">
      <div>
        <div className="card-row">
          <span className="card-column">
            <label htmlFor="key">Key</label>
            <input onChange={(event) => changeData('key', event.target.value)} type="text" id="key" placeholder="key" value={field.key || ""}/>
          </span>
          <span className="card-column">
            <label htmlFor="title">Title</label>
            <input onChange={(event) => changeData('title', event.target.value)} type="text" id="title" placeholder="title" value={field.title || ""}/>
          </span>
        </div>
        <div className="card-row">
          <span className="card-column">
            <label htmlFor="class">Class</label>
            <input onChange={(event) => changeData('class', event.target.value)} type="text" id="class" placeholder="class" value={field.class || ""}/>
          </span>
          <span className="card-column">
            <label htmlFor="ref">Ref</label>
            <input onChange={(event) => changeData('ref', event.target.value)} type="text" id="ref" placeholder="ref" value={field.ref || ""}/>
          </span>
        </div>
        <div className="card-row">
          <span className="card-column">
            <label htmlFor="type">Type</label>
            <select onChange={(event) => changeData('type', event.target.value)} value={field.type || ""}>
              {typeOptions.map((type, typeIndex) =>
                <option key={typeIndex} value={type}>{capitalize(type)}</option>  
              )}
            </select>
          </span>
          <span className="card-column">
            <label htmlFor="placeholder">Placeholder</label>
            <input onChange={(event) => changeData('placeholder', event.target.value)} type="text" id="placeholder" placeholder="placeholder" value={field.placeholder || ""}/>
          </span>
        </div>
        <div className="card-styles-row">
          <div className="card-styles-header">
            <label htmlFor="styles-list">Styles</label>
            <button onClick={() => changeData('styles', [...field.styles || [], {}])} type="button">Add new style</button>
          </div>
          <ul className="styles-list">
            { field.styles && field.styles.map((style, index) => 
              <li key={index}>
                <input onChange={(event) => chengeStyleData(index, 'key', event.target.value)} type="text" placeholder="key" value={style.key || ""}/>
                <span> : </span>
                <input onChange={(event) => chengeStyleData(index, 'value', event.target.value)} type="text" placeholder="value" value={style.value || ""}/>
              </li>
            )}
          </ul>
        </div>
        {/* <div>
          <label htmlFor="event-list">Events</label>
          <ul className="event-list">
            { field.styles && field.styles.map(() => 
              <li>

              </li>
            )}
          </ul>
        </div> */}
      </div>
      <div>
        <button onClick={saveAndClose}>&#10003;</button>
        <button onClick={closeModal}>&#10005;</button>        
      </div>
    </div>    
  </div>

}