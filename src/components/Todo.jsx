import React, { useState } from "react";
const Todo = () => {
  const [inputVal, setInputVal] = useState("");
  const [items, setItems] = useState([]);
  const [toogleBtn, setToggleBtn] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);

  //   Add Items
  const addItem = () => {
    if (inputVal && !toogleBtn) {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputVal,
      };
      setItems([...items, allInputData]);
      setInputVal("");
    } else if (inputVal && toogleBtn) {
      setItems(
        items.map((val) => {
          if (val.id === isEditItem) {
            return { ...val, name: inputVal };
          }
          return val;
        })
      );
      setInputVal("");
      setIsEditItem(null);
      setToggleBtn(false);
    } else {
      alert("Please fill the data");
    }
  };

  //   Delete Items
  const deleteItem = (index) => {
    const updatedItems = items.filter((val) => {
      return index !== val.id;
    });
    setItems(updatedItems);
  };

  //   Edit items
  const editItem = (id) => {
    const newItem = items.find((val) => {
      return val.id === id;
    });
    console.log(newItem);
    setToggleBtn(true);
    setInputVal(newItem.name);
    setIsEditItem(id);
  };

  //   Remove all items
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            {toogleBtn ? (
              <i
                className="far fa-edit add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-plus add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </div>

          <div className="showItems">
            {items.map((val) => {
              return (
                <div className="eachItem" key={val.id}>
                  <h3>{val.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(val.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(val.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clear all btn */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
