import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, changeFilter } from "../features/todoSlice";
import TodoItem from "./TodoItem";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    state.todo.todos.filter((todo) => {
      if (state.todo.filter === "complete") {
        return todo.check === true;
      } else if (state.todo.filter === "incomplete") {
        return todo.check === false;
      } else {
        return true;
      }
    })
  );
  const [inputText, setInputText] = useState("");

  function addItemTodo(e) {
    e.preventDefault();
    const tod = {
      id: Date.now(),
      text: { inputText },
      check: false,
    };
    dispatch(addTodo(tod));
    setInputText("");
  }

  function editText(e) {
    setInputText(e.target.value);
  }

  function onChangeFilter(newFilter,e) {
    e.preventDefault();
    dispatch(changeFilter(newFilter));
  }

  return (
    <div className="content">
      <form>
        <div className="input-btn">
          <div className="input">
            <input type="text" onChange={(e) => editText(e)} />
          </div>

          <div>
            <button type="submit" onClick={(e) => addItemTodo(e)}>
              Submit
            </button>
          </div>
        </div>

        <div className="item_todo">
          <div>
            <button onClick={(e) => onChangeFilter("all",e)}>ALL</button>
            <button onClick={(e) => onChangeFilter("complete",e)}>Complete</button>
            <button onClick={(e) => onChangeFilter("incomplete",e)}>Incomplete</button>
          </div>

          {todos.length === 0 ? (
            <div>Not Found</div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text.inputText}
                check={todo.check}
              />
            ))
          )}
        </div>
      </form>
    </div>
  );
};

export default Todo;
