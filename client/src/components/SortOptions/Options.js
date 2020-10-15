import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, ListGroup, ListGroupItem, CardText } from "reactstrap";
import * as actionTypes from "../../redux/actions/optionsActions";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import alertify from "alertifyjs";
class Options extends Component {
  componentDidMount() {
    this.props.actions.getUsers(this.props.option);
    this.props.actions.getPaces();
    setTimeout(() => {
      this.props.actions.mergeList(
        this.props.users,
        this.props.paces,
        this.props.option
      );
    }, 500);
  }

  changeOption = (option) => {
    this.props.actions.changeOption(option);
    if (option != this.props.currentOption)
      alertify.success("Sorted based on runners " + option);
    this.props.actions.mergeList(this.props.users, this.props.paces, option);
  };

  render() {
    return (
      <div>
        <ListGroup style={{ marginTop: "1rem" }}>
          {this.props.OptionList.map((option) => (
            <ListGroupItem
              key={option.id}
              active={option === this.props.currentOption}
              onClick={() => this.changeOption(option)}
            >
              {option}
            </ListGroupItem>
          ))}
        </ListGroup>

        <Card body inverse color="success" style={{ margin: "1rem 0rem" }}>
          <CardText>Runners between 20 and 30 years old</CardText>
        </Card>

        <Card body inverse color="info" style={{ margin: "1rem 0rem" }}>
          <CardText>Runners between 30 and 40 years old</CardText>
        </Card>

        <Card body inverse color="warning" style={{ margin: "1rem 0rem" }}>
          <CardText>Runners between 40 and 60 years old color in list</CardText>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentOption: state.changeSortOptionReducer,
    OptionList: state.ListOptionsReducer,
    users: state.userListReducer,
    paces: state.PaceListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeOption: bindActionCreators(actionTypes.ChangeOption, dispatch),
      getUsers: bindActionCreators(userActions.getUsers, dispatch),
      getPaces: bindActionCreators(userActions.getPaces, dispatch),
      mergeList: bindActionCreators(userActions.mergeList, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
