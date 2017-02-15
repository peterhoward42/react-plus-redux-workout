import { connect } from 'react-redux'

import { MainPanel } from '../components/main-panel'
import { viewTypeForTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        viewType: viewTypeForTitle(state.menuReducer.selectedArticle)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MainPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPanel)

export { MainPanelContainer }