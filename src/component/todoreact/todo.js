import React, { useEffect, useState } from "react";
import "./todo.css";
const getLocalData = () => {
  const lists = localStorage.getItem("myTodoList");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleIcon, setToggleIcon] = useState(false);
  const onAddItem = () => {
    if (!inputData) {
      alert("Please add data");
    } else if (inputData && toggleIcon) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputData };
          }
          return curElem;
        })
      );
      setInputData("");
      setToggleIcon(false);
      setIsEditItem(null);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  const editItem = (item) => {
    const item_todo_element = items.find((curelem) => {
      return curelem.id === item;
    });
    setInputData(item_todo_element.name);
    setToggleIcon(true);
    setIsEditItem(item);
  };
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updatedItems);
  };
  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child_div">
          <figure style={{ textAlign: "center" }}>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption style={{ color: "white", fontSize: "30px" }}>
              Add your list here ✌
            </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleIcon ? (
              <i className="far fa-edit add-btn" onClick={onAddItem}></i>
            ) : (
              <i className="fa fa-solid fa-plus" onClick={onAddItem}></i>
            )}
          </div>
          <div className="showItems">
            {items &&
              items.map((item, index) => {
                return (
                  <div className="eachItem" key={item.id}>
                    <h3>{item.name}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-edit add-btn"
                        onClick={() => editItem(item.id)}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={() => deleteItem(item.id)}
                      ></i>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
