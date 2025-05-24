import React from "react";
import ChildComponent from "./ChildComponents";
import AddComponent from "./AddComponents";

// JSX => return block

class MyComponent extends React.Component {
  state = {
    jobState: [
      { id: "idState1", title: "Developer", salary: "50" },
      { id: "idState2", title: "Tester", salary: "30" },
      { id: "idState3", title: "PM", salary: "100" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      jobState: [...this.state.jobState, job],
    });
  };
  deleteJob = (job) => {
    let currentJobs = this.state.jobState;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      jobState: currentJobs,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          jobState={this.state.jobState}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
