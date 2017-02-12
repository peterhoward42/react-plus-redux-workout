import { connect } from 'react-redux'

import Menu from '../components/menu'

const mapStateToProps = (state, ownProps) => {
    return {
        selectedArticle: state.menu.selectedArticle
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
}

const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

export default MenuContainer