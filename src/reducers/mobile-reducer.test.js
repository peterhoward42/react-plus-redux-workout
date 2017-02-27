import { mobileReducer } from './mobile-reducer'
import { SHOW_MENU, SHOW_ARTICLE } from '../components/mobile/mobile-screen-chooser'
import { articleChosen } from '../actions/article-chosen'
import { goBackToMenuScreen } from '../actions/go-back-to-menu-screen'

it('Establishes correct initial state', () => {
    const newState = mobileReducer(undefined, {})
    expect(newState.viewMode).toEqual(SHOW_MENU)
})

it('Flips view mode to SHOW_ARTICLE in response to ARTICLE_CHOSEN', () => {
    const action = articleChosen(undefined)
    const newState = mobileReducer(undefined, action)
    expect(newState.viewMode).toEqual(SHOW_ARTICLE)
})

it('Flips view mode to SHOW_MENU in response to ARTICLE_CHOSEN', () => {
    const action = goBackToMenuScreen()
    const newState = mobileReducer(undefined, action)
    expect(newState.viewMode).toEqual(SHOW_MENU)
})