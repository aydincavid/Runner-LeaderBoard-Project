import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";

class UsersList extends Component {
  componentDidMount() {
    this.props.actions.getUsers(this.props.option);
    this.props.actions.getPaces();
    setTimeout(() => {
      this.props.actions.mergeList(
        this.props.users,
        this.props.paces,
        this.props.option
      );
    }, 200);
  }

  setClass(age) {
    if (age > 20 && age < 30) {
      return "bg-success";
    } else if (age > 30 && age < 40) {
      return "bg-info";
    } else if (age > 40 && age < 60) {
      return "bg-warning";
    }
  }

  render() {
    return (
      <div>
        <Table hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>User Age</th>
              <th>Distance</th>
              <th>Total Time</th>
              <th>Average Pace</th>
            </tr>
          </thead>
          <tbody>
            {this.props.all.map((user) => (
              <tr key={user.userid} className={this.setClass(user.age)}>
                <th scope="row">{user.userid}</th>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.distance} meters</td>
                <td>{user.total_time} min</td>
                <td>{Number(user.average_pace.toFixed(2))} km/min</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.userListReducer,
    paces: state.PaceListReducer,
    all: state.mergedListReducer,
    option: state.changeSortOptionReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUsers: bindActionCreators(userActions.getUsers, dispatch),
      getPaces: bindActionCreators(userActions.getPaces, dispatch),
      mergeList: bindActionCreators(userActions.mergeList, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
