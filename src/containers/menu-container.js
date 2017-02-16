import { connect } from 'react-redux'

import { Menu } from '../components/menu'
import { articleChosen } from '../actions/article-chosen'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedArticle: state.menuReducer.selectedArticle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onArticleChosen: (chosen) => {
            dispatch(articleChosen(chosen))
        }
    }
}

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export { MenuContainer }