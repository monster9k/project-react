import React from "react";
import Color from "../HOC/Color";
import withRouter from "../HOC/withRouter";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log("props:", this.props);
      this.props.navigate("/todo");
    }, 2000);
  }
  render() {
    return <div>hello world</div>;
  }
}

export default Color(withRouter(Home));
