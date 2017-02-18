import { ARTICLE_CHOSEN } from './action-types'

const articleChosen = (article) => ({
    type: ARTICLE_CHOSEN,
    article
})

export { articleChosen }