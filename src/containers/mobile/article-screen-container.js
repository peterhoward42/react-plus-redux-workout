import { connect } from 'react-redux'

import { ArticleScreen } from '../../components/mobile/article-screen'


const mapStateToProps = (state, ownProps) => {
    return {
        article: state.menuReducer.selectedArticle,
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