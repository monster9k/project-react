import React from "react";
import "./Todo.scss";

class ChildListTodo extends React.Component {
  state = {
    editTodo: "",
  };

  handleEditTodo = (todo) => {
    const { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && todo.id === editTodo.id) {
      this.props.changeLists(editTodo);
      this.setState({
        editTodo: "",
      });
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeEditToDO = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  handleDelete = (item) => {
    this.props.deleteLists(item);
  };

  render() {
    let { listToDos } = this.props;
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        {listToDos && listToDos.length > 0 && (
          <div className="list-todo-content">
            {listToDos.map((item, index) => {
              return (
                <div className="todo-Child" key={item.id}>
                  {isEmptyObj || item.id !== editTodo.id ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <span>
                      {index + 1} -{" "}
                      <input
                        value={editTodo.title}
                        onChange={(event) => this.handleOnChangeEditToDO(event)}
                      />
                    </span>
                  )}
                  <span>
                    <button
                      className="Edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj || item.id !== editTodo.id ? "Edit" : "Save"}
                    </button>
                  </span>
                  <span>
                    <button
                      className="delete"
                      onClick={() => this.handleDelete(item)}
                    >
                      delete
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default ChildListTodo;
