import { useTodo } from "./hooks/useTodo";
import "./Todo.css";

const Todo = () => {
  const { todoList, handleKeyPress, todoText, handleChange, isValidTodoText, isDuplicateTodoText } =
    useTodo();

  console.log("todo list:", todoList);

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h2>✨ My Todo List</h2>
        <p>Stay organized and productive</p>
      </div>

      <div className="todo-input-wrapper">
        <input
          className="todo-input"
          value={todoText}
          type="text"
          placeholder="Add a new todo... (Press Enter to add)"
          onKeyDown={handleKeyPress}
          onChange={handleChange}
        />
        {!isValidTodoText && (
          <p style={{ color: "red" }}>todo text not allow to be empty</p>
        )}
        {isDuplicateTodoText && (<p style={{color:'yellow'}}>todo text is not allow to be duplicate</p>)}
      </div>

      <div className="todo-table-wrapper">
        <table className="todo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo Item</th>
              <th>Actions</th>
            </tr>{" "}
          </thead>
          <tbody>
            {todoList.length === 0 ? (
              <tr>
                <td colSpan={3} className="todo-empty-state">
                  <div className="todo-empty-icon">📝</div>
                  <p>No todos yet! Add one above to get started.</p>
                </td>
              </tr>
            ) : (
              todoList.map((item, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ind + 1}</td>
                    <td className="todo-item-text">{item}</td>
                    <td className="todo-actions">
                      <button className="todo-btn todo-btn-edit">Edit</button>
                      <button className="todo-btn todo-btn-delete">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
// what is callback function
// callback function is a function that is
// passed as an argument to another function and is executed after some operation has been completed.
