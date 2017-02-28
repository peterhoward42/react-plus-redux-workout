import topLevelReducer from './index'

import { SHOW_MENU, SHOW_ARTICLE } from '../components/mobile/mobile-screen-chooser'

it('Aggregates the sub reducers as it should', () => {
    const newState = topLevelReducer(undefined, {})

    expect(newState.menuReducer.selectedArticle.title).toEqual('Cloud File Readers')
    expect(newState.mobileReducer.viewMode).toEqual(SHOW_MENU)
})