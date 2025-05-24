import React from "react";
import "./Todo.scss";
import { toast } from "react-toastify";

class AddListTodo extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddList = (event) => {
    if (!this.state.title) {
      toast.error("you need to input your title");
      return;
    }
    this.props.addLists({
      id: Math.floor(Math.random() * 100001),
      title: this.state.title,
    });

    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        ></input>
        <button className="Add" onClick={(event) => this.handleAddList(event)}>
          Add
        </button>
      </div>
    );
  }
}

export default AddListTodo;
