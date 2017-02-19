/**
 * This is a Redux wrapper container for its sibling "dumb" React presentational
 * component Menu. It controls the menu from which you choose an Article.
 * 
 * This design pattern is explained in Dan Abramov's article here:
 * 
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.rywkankff
 * 
 * This wrapper tells the menu which item within it should be rendered as the
 * "active" choice, and also provides the callback which should be used
 * when a menu item is selected. It is responsible for dispatching the
 * corresponding Redux ACTION to say that the currently selected article
 * got changed.
 */

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