import React from 'react';
import {connect} from 'react-redux'
import Answer from './answer'

const mapStateToProps = (state) => {
    console.log(state, "mapSateToprops")
    return {state: state}
}


export default connect(mapStateToProps)(Answer) ;