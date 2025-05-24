import React, { use } from "react";
import withRouter from "../../HOC/withRouter";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.params) {
      let id = this.props.params.id;
      let res = await axios.get(`https://fakestoreapi.com/users/${id}`);
      this.setState({
        user: res && res.data ? res.data : {},
      });
    }
  }
  handleReturnUse = () => {
    this.props.navigate("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello DetailUser with id: {this.props.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User'name: {user.name.firstname} - {user.name.lastname}{" "}
            </div>
            <div>User'email: {user.email} </div>
            <div>User'phone: {user.phone} </div>
            <div>User'city: {user.address.city} </div>
            <div>
              <button type="button" onClick={() => this.handleReturnUse()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
