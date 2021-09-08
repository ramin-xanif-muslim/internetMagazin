import React from 'react';
import StoreSingUp from "./StoreSingUp";
import {connect} from "react-redux";
import {postToServer} from "../redux/store-singup-reducer";

class StoreSingUpContainer extends React.Component {

    render() {
        return (
            <div>
                <StoreSingUp {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    name: state.login.username
});


export default connect(mapStateToProps, { postToServer })(StoreSingUpContainer);