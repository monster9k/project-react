import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangetitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();

    if (!this.state.title || !this.state.salary) {
      alert("you need to input your title job or salary");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">TitleJobs: </label> <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangetitleJob(event)}
        />
        <br />
        <label htmlFor="lname">salary:</label> <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <input type="submit" onClick={(event) => this.handleOnSubmit(event)} />
      </form>
    );
  }
}

export default AddComponent;
