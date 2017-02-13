import { connect } from 'react-redux'

import Menu from '../components/menu'
import chooseArticle from '../actions/choose-article'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedArticle: state.menu.selectedArticle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onArticleChosen: (chosen) => {
            dispatch(chooseArticle(chosen))
        }
    }
}

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export default MenuContainer