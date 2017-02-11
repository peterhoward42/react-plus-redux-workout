import menu from './menu'
import chooseArticle from '../actions/choose-article'

describe('menu reducer', () => {
    it('should handle initial state', () => {
        expect(menu(undefined, {}).selectedArticle).toEqual(
            'The lure of patterns')
    })
    it('should handle CHOOSE_ARTICLE', () => {
        const newArticleName = 'Learn about Merkle Trees and Bitcoin'
        const newState = menu(undefined, chooseArticle(newArticleName))
        expect(newState.selectedArticle).toEqual(newArticleName)
    })
})