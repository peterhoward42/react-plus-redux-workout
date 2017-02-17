import { connect } from 'react-redux'

import { ArticleScreen } from '../components/article-screen'
import { shortForTitle } from '../articles-metadata'


const mapStateToProps = (state, ownProps) => {
    return {
        title: state.menuReducer.selectedArticle,
        subTitle: shortForTitle(state.menuReducer.selectedArticle)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const ArticleScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleScreen)

export { ArticleScreenContainer }