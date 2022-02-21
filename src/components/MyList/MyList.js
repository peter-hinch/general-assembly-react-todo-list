import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import * as s from './MyList.styles';

// HOMEWORK DUE 24/02
// [x] - Edit an item
// [x] - Delete an item
// [x] - Persist list in local storage
// [x] - Check off an item (optional)
// [x] - Refine styling (optional)

// Instead of passing in ALL props, destructuring can be used to pass in only
// what is needed.
const MyList = ({todos}) => {
  // Use a return statement when somthing needs to be declared outside of the 
  // return statement.
  const [todoItemArray, setTodoItemArray] = useState(todos);
  const [currAddInput, setAddInput] = useState('');
  
  // The useEffect hook can be used to monitor a variable and perform logic
  // when React detects a change.
  // Reference: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoItemArray));
  },[todoItemArray]);

  // CRUD methods - addItem, updateTask, toggleStatus, deleteItem, deleteAllItems.
  const addItem = (event) => {
    event.preventDefault();
    setTodoItemArray([...todoItemArray,
      {
        id: generateId(),
        task: currAddInput,
        done: false
      }
    ]);
    setAddInput('');
  }

  const updateTask = (event) => {
    event.preventDefault();
    const idToUpdate = parseInt(event.target.parentNode.parentNode.id);
    const indexToUpdate = todoItemArray.map((item) => (item.id)).indexOf(idToUpdate);
    const updatedTodoItemArray = [...todoItemArray];
    updatedTodoItemArray[indexToUpdate].task = event.target.value;
    setTodoItemArray(updatedTodoItemArray);
  }
  
  // toggleStatus - Performs updates to state when a checkbox is changed.
  const toggleStatus = (event) => {
    event.preventDefault();
    const idToUpdate = parseInt(event.target.parentNode.id);
    const indexToUpdate = todoItemArray.map((item) => (item.id)).indexOf(idToUpdate);
    const updatedTodoItemArray = [...todoItemArray];
    updatedTodoItemArray[indexToUpdate].done = event.target.checked;
    setTodoItemArray(updatedTodoItemArray);
  }
  
  const deleteItem = (event) => {
    event.preventDefault();
    const idToDelete = parseInt(event.target.parentNode.id);
    setTodoItemArray(todoItemArray.filter((item) => (item.id !== idToDelete)));
  }
  
  const deleteAllItems = (event) => {
    event.preventDefault();
    setTodoItemArray([]);
  }
  
  // Iterates through existing todos and generates an id one higher than the 
  // largest value found.
  const generateId = () => {
    return todoItemArray.reduce((highest, index) => (
      index.id > highest ? index.id + 1 : highest + 1), 0
    );
  }

  // Generate a list of ListItem elements for display in the return statement.
  const generateList = todoItemArray.map((item) => (
    <ListItem
      item={item}
      updateTask={updateTask}
      toggleStatus={toggleStatus}
      deleteItem={deleteItem}
      key={item.id}
    />
  ));

  return (
    <s.StyledToDoList>
      <s.StyledH1>Todo List</s.StyledH1>
      <s.StyledUl>
        {generateList}
      </s.StyledUl>
      <s.StyledForm>
        <s.StyledRuledSection>
          <s.StyledInput type="text"
            id="input-add"
            placeholder="New item.."
            onChange={(event) => setAddInput(event.target.value)}
            value={currAddInput}
          />
          <s.StyledButtonAdd aria-label="Add new item" onClick={addItem}></s.StyledButtonAdd>
        </s.StyledRuledSection>
        <s.StyledButtonDeleteAll aria-label="Clear list" onClick={deleteAllItems}>Clear List</s.StyledButtonDeleteAll>
      </s.StyledForm>
    </s.StyledToDoList>
  )
};

export default MyList;
