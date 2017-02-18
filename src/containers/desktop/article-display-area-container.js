import { connect } from 'react-redux'

import { ArticleDisplayArea } from '../../components/desktop/article-display-area'


const mapStateToProps = (state, ownProps) => {
    return {
        article: state.menuReducer.selectedArticle,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const ArticleDisplayAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDisplayArea)

export { ArticleDisplayAreaContainer }