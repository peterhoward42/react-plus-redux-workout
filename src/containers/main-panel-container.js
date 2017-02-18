import { connect } from 'react-redux'

import { MainPanel } from '../components/main-panel'
import { articleFromTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        viewType: articleFromTitle[state.menuReducer.selectedArticle].viewType
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