import { connect } from 'react-redux'

import { MarkdownView } from '../components/markdown-view'

const mapStateToProps = (state) => {
    return {
        markdownContent: 'todo foo derive content from state.menu.selectedArticleTitle'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MarkdownViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkdownView)

export { MarkdownViewContainer }