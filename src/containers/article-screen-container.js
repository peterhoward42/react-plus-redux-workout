import { connect } from 'react-redux'

import { ArticleScreen } from '../components/article-screen'
import { articleFromTitle } from '../articles-metadata'


const mapStateToProps = (state, ownProps) => {
    return {
        title: state.menuReducer.selectedArticle,
        subTitle: articleFromTitle[state.menuReducer.selectedArticle].short
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