/**
 * This is a Redux wrapper container for its sibling "dumb" React presentational
 * component ArticleDisplayArea. It controls the main article display area panel
 * in the desktop GUI variant.
 * 
 * This design pattern is explained in Dan Abramov's article here:
 * 
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.rywkankff
 * 
 * This wrapper looks up which article is currently selected in the
 * application's state (as manifested by the Redux store), and injects it into
 * the dumb presentation component as the property: "article".
 */

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