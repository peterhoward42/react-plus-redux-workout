/**
 * This is a Redux wrapper container for its sibling "dumb" React presentational
 * component BackButtonBar. 
 * 
 * This design pattern is explained in Dan Abramov's article here:
 * 
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.rywkankff
 * 
 * This wrapper provides callbacks to the dumb component for button clicks etc.
 * And is responsible for dispatching Redux ACTIONS in response to update the GUI
 * state.
 */

import { connect } from 'react-redux'

import { BackButtonBar } from '../../components/mobile/back-button-bar'
import { goBackToMenuScreen } from '../../actions/go-back-to-menu-screen'

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBackButtonClicked: () => dispatch(goBackToMenuScreen())
    }
}

const BackButtonBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BackButtonBar)

export { BackButtonBarContainer }