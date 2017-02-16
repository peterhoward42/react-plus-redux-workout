import { connect } from 'react-redux'

import { ArticleMedia } from '../components/article-media'

import { viewTypeForTitle } from '../articles-metadata'

const mapStateToProps = (state, ownProps) => {
    return {
        viewType: viewTypeForTitle(state.menuReducer.selectedArticle)
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