import { connect } from 'react-redux'

import { ArticleDescription } from '../components/article-description'
import { articleFromTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        contentText: articleFromTitle[
            state.menuReducer.selectedArticle].description
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const ArticleDescriptionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDescription)

export { ArticleDescriptionContainer }