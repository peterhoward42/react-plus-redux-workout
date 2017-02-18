import { connect } from 'react-redux'

import { ArticleMedia } from '../components/article-media'

const mapStateToProps = (state, ownProps) => {
    return {
        viewType: state.menuReducer.selectedArticle.viewType
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