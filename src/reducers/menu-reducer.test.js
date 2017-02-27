import { menuReducer } from './menu-reducer'
import { articleChosen } from '../actions/article-chosen'
import { navNextPrevArticle } from '../actions/nav-next-prev-article'

import { articlesSequence } from '../articles-metadata'

it('Establishes correct initial state', () => {
    const newState = menuReducer(undefined, {})
    expect(newState.selectedArticle.title).toEqual('Merkle Trees + Bitcoin')
})

it('Registers correct article in response to ARTICLE_CHOSEN', () => {
    const anArticle = articlesSequence[1]
    const action = articleChosen(anArticle)
    const newState = menuReducer(undefined, action)
    expect(newState.selectedArticle.title).toEqual('The lure of patterns')
})

it('Registers correct article in response to NEXT_PREV_ARTICLE', () => {
    const startingState = menuReducer(undefined, {})

    let action
    let incrementBy
    let newState

    // Positive increment that does not trigger wrapping the index round
    // at the start.
    incrementBy = 1
    action = navNextPrevArticle(incrementBy)
    newState = menuReducer(startingState, action)
    expect(newState.selectedArticle.title).toEqual('The lure of patterns')

    // Positive increment that DOES trigger wrapping the index round
    // at the start.
    incrementBy = 99
    action = navNextPrevArticle(incrementBy)
    newState = menuReducer(startingState, action)
    expect(newState.selectedArticle.title).toEqual('Virtual Reality + CAD')

    // Negative increment that DOES trigger wrapping the index round
    // at the start.
    incrementBy = -99
    action = navNextPrevArticle(incrementBy)
    newState = menuReducer(startingState, action)
    expect(newState.selectedArticle.title).toEqual('Python Music')
})