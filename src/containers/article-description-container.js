import { connect } from 'react-redux'

import { ArticleDescription } from '../components/article-description'
import { descriptionForTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        contentText: descriptionForTitle(state.menuReducer.selectedArticle)
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