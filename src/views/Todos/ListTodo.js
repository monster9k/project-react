import React from "react";
import AddListTodo from "./AddListToDo";
import "./Todo.scss";
import ChildListTodo from "./ChildListTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listToDos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Washing dish" },
      { id: "todo3", title: "Cleaning room" },
    ],
  };

  addLists = (List) => {
    this.setState({
      listToDos: [...this.state.listToDos, List],
    });
    toast.success("success!");
  };

  changeLists = (item) => {
    let updatedList = [...this.state.listToDos];
    let objIndex = updatedList.findIndex((listitem) => listitem.id === item.id);
    if (objIndex !== -1) {
      updatedList[objIndex].title = item.title;
      this.setState({ listToDos: updatedList });
      toast.success("Updated successfully!");
    }
  };

  deleteLists = (List) => {
    let currentList = this.state.listToDos;
    currentList = currentList.filter((item) => item.id !== List.id);
    this.setState({
      listToDos: currentList,
    });
    toast.success("Deleted successfull!");
  };

  render() {
    console.log(this.state.listToDos);
    return (
      <>
        <div className="list-todo-container">
          <AddListTodo addLists={this.addLists} />
          <ChildListTodo
            listToDos={this.state.listToDos}
            deleteLists={this.deleteLists}
            changeLists={this.changeLists}
          />
        </div>
      </>
    );
  }
}

export default ListTodo;
