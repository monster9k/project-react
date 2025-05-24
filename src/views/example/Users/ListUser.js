import React from "react";
import axios from "axios";
import "./ListUser.scss";
import withRouter from "../../HOC/withRouter";

class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://fakestoreapi.com/users");
    this.setState({
      listUser: res && res.data ? res.data : [],
    });
  }

  handleViewDetailUser = (user) => {
    this.props.navigate(`/user/${user.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fech all list users</div>
        <div className="list-user-content">
          {listUser && listUser.length > 0 ? (
            listUser.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1}- {item.name.firstname} - {item.name.lastname}
                </div>
              );
            })
          ) : (
            <div className="child">1- khoa - minh</div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
