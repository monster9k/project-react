import React from "react";
import "./Demo.scss";

// JSX => return block

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleOnClickShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnClickDelete = (job) => {
    this.props.deleteJob(job);
  };
  render() {
    let { jobState } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {!showJobs ? (
          <div>
            <button
              className="btn-show"
              onClick={() => this.handleOnClickShowHide()}
            >
              show
            </button>
          </div>
        ) : (
          <>
            <div className="jobs-lits">
              {jobState.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary}$ <></>{" "}
                    <span>
                      <button onClick={() => this.handleOnClickDelete(item)}>
                        delete
                      </button>
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleOnClickShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
