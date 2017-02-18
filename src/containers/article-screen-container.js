import { connect } from 'react-redux'

import { ArticleScreen } from '../components/article-screen'


const mapStateToProps = (state, ownProps) => {
    return {
        title: state.menuReducer.selectedArticle.title,
        subTitle: state.menuReducer.selectedArticle.short
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