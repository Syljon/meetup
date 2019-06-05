import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Button from "../../components/Buttons/Button";
import { getNewToken } from "../../API/API";
class SettingsPage extends Component {
  // test() {
  //   // const tokenExpiryTime = new Date();
  //   // console.log(tokenExpiryTime);
  //   // tokenExpiryTime.setHours(tokenExpiryTime.getHours() + 1);
  //   // console.log(tokenExpiryTime);
  //   console.log("First", new Date());
  //   setTimeout(() => {
  //     console.log("Second", new Date());
  //   }, 60000);
  // }
  refreshToken = () => {
    console.log(this.props.refreshToken);
    getNewToken(this.props.refreshToken)
      .then(res =>
        console.log(
          res,
          "refresh token",
          this.props.refreshToken === res.data.refresh_token,
          "id token",
          this.props.token === res.data.idToken
        )
      )
      .catch(err => console.log(err));
  };
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
        <Button btnType="Info" clicked={this.refreshToken}>
          Refresh Token
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token,
    refreshToken: state.refreshToken
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);
