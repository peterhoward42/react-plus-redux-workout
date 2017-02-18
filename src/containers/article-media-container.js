import { connect } from 'react-redux'

import { ArticleMedia } from '../components/article-media'

import { articleFromTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        viewType: articleFromTitle[state.menuReducer.selectedArticle].viewType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const ArticleMediaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleMedia)

export { ArticleMediaContainer }