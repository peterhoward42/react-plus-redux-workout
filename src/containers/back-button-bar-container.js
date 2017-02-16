import { connect } from 'react-redux'

import { BackButtonBar } from '../components/back-button-bar'
import { goBackToMenuScreen } from '../actions/go-back-to-menu-screen'

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