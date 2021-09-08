import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {postToServer} from "../redux/login-reducer";

class LoginContainer extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{ margin: "10px", color: 'red',padding:' 0% 30%'}}>
                  {this.props.state.login.data && this.props.state.login.data.Headers.ResponseStatus != '0'
                   ? this.props.state.login.data.Body + "!!!" : 'Ok!'}
                </h1>
                <Login {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    state
});


export default connect(mapStateToProps, {postToServer})(LoginContainer);