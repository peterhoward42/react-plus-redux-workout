import { connect } from 'react-redux'

import { Menu } from '../components/menu'
import { articleFromTitle } from '../articles-metadata'
import { articleChosen } from '../actions/article-chosen'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedArticle: state.menuReducer.selectedArticle.title
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onArticleChosen: (articleTitle) => {
            dispatch(articleChosen(articleFromTitle[articleTitle]))
        }
    }
}

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export { MenuContainer }