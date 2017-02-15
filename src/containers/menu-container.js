import { connect } from 'react-redux'

import Menu from '../components/menu'
import articleChosen from '../actions/article-chosen'

import {
    viewTypeForTitle,
    MARKDOWN_VIEW_T,
    articleSourceForTitle
} from '../articles-metadata'

import fetchingMd from '../actions/fetch-markdown'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedArticle: state.menuReducer.selectedArticle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onArticleChosen: (chosen) => {
            initiateFetchOfRemoteData(dispatch, chosen)
            dispatch(articleChosen(chosen))
        }
    }
}

/**
 * Decide if the view type associated with the given article, requires some
 * data to be fetched before it can be fully displayed, and when so, kick off
 * the fetching process. Views that work this way will have corresponding
 * states so they can indicate when they are waiting on data. The fetching
 * processs is wrapped in async actions to inject the relevant state
 * transitions into the store.
 */
function initiateFetchOfRemoteData(dispatch, chosenArticle) {
    // The need depends on the view type.
    switch (viewTypeForTitle(chosenArticle)) {
        case MARKDOWN_VIEW_T:
            dispatch(fetchingMd(articleSourceForTitle(chosenArticle)))
            break
        default: { }
    }
}

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export default MenuContainer