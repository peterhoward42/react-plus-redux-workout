import { connect } from 'react-redux'

import { ArticleDescription } from '../components/article-description'

const mapStateToProps = (state, ownProps) => {
    return {
        contentText: state.menuReducer.selectedArticle.description
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