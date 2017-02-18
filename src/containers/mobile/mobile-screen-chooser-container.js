import { connect } from 'react-redux'

import { MobileScreenChooser } from '../../components/mobile/mobile-screen-chooser'

const mapStateToProps = (state, ownProps) => {
    console.log(`xxx screen chooser container, using state: ${JSON.stringify(state)}`)
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