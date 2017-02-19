/**
 * This is a Redux wrapper container for its sibling "dumb" React presentational
 * component MobileScreenChooser. It controls which mobile screen gets
 * displayed at any one time, (as a function of application state).
 * 
 * This design pattern is explained in Dan Abramov's article here:
 * 
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.rywkankff
 * 
 * This wrapper looks up which viewing mode is in force in the
 * application's state (as manifested by the Redux store), and injects it into
 * the dumb presentation component as the property: "viewMode".
 */

import { connect } from 'react-redux'

import { MobileScreenChooser } from '../../components/mobile/mobile-screen-chooser'

const mapStateToProps = (state, ownProps) => {
    return {
        viewMode: state.mobileReducer.viewMode
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MobileScreenChooserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileScreenChooser)

export { MobileScreenChooserContainer }