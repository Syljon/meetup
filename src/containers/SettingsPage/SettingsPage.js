import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Button from "../../components/Buttons/Button";
class SettingsPage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh"
        }}
      >
        <h1>Coming soon ...</h1>
        <Button btnType="Info" clicked={this.props.logout}>
          Logout
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SettingsPage);
