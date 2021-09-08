import React from 'react';
import CostomerSingUn from "./CostomerSingUn";
import {connect} from "react-redux";
import { postToServer} from "../redux/costomer-singup-reducer";

class CostomerSingUnContainer extends React.Component {

    render() {
        return (
            <div>
                <CostomerSingUn {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  state
});


export default connect(mapStateToProps, {postToServer})(CostomerSingUnContainer);