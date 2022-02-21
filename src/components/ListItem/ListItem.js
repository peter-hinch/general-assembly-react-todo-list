import React, { useState } from 'react';
import * as s from './ListItem.styles';

const ListItem = ({item, updateTask, toggleStatus, deleteItem}) => {
  const [currInput, setInput] = useState(item.task);
  
  const handleTaskChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <s.StyledListItem id={item.id}>
    {/* The id has been used at the <li> element level so it can be accessed */}
    {/* by both the checkbox and the input field. */}
      <input type="checkbox" id={`check-${item.id}`}
        key={Math.random()}
        defaultChecked={item.done}
        checked={item.done}
        onChange={(event) => toggleStatus(event)}
      />
      <label htmlFor={`check-${item.id}`}></label>
      <s.StyledInput type="text"
        value={currInput}
        onChange={(event) => handleTaskChange(event)}
        onBlur={(event) => updateTask(event)}
      />
      <s.StyledButtonDelete aria-label="Delete item" onClick={(event) => deleteItem(event)} ></s.StyledButtonDelete>
    </s.StyledListItem>
  );
}

export default ListItem;
