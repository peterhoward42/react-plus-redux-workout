import { connect } from 'react-redux'

import { Mobile } from '../components/mobile'

const mapStateToProps = (state, ownProps) => {
    return {
        viewMode: state.mobileReducer.viewMode
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MobileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Mobile)

export { MobileContainer }