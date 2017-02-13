import { connect } from 'react-redux'

import MainPanel from '../components/main-panel'
import { viewTypeForTitle, articleSourceForTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        viewType: viewTypeForTitle(state.menu.selectedArticle),
        articleSource: articleSourceForTitle(state.menu.selectedArticle)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MainPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPanel)

export default MainPanelContainer