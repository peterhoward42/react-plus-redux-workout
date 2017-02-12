import menu from './menu'
import chooseArticle from '../actions/choose-article'

describe('menu reducer', () => {
    it('should handle initial state', () => {
        expect(menu(undefined, {}).selectedArticle).toEqual(
            'Learn about Merkle Trees and Bitcoin')
    })
    it('should handle CHOOSE_ARTICLE', () => {
        const newArticleName = 'The lure of patterns'
        const newState = menu(undefined, chooseArticle(newArticleName))
        expect(newState.selectedArticle).toEqual(newArticleName)
    })
})