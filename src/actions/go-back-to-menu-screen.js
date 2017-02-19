/**
 * A Redux ACTION announcing that someone (in mobile view mode) decided to
 * return to the menu screen.
 */

import { BACK_TO_MENU } from './action-types'

const goBackToMenuScreen = () => ({
    type: BACK_TO_MENU,
})

export { goBackToMenuScreen }