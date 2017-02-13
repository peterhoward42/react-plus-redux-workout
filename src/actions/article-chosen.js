import { ARTICLE_CHOSEN } from './action-types'

const articleChosen = (articleTitle) => ({
    type: ARTICLE_CHOSEN,
    articleTitle
})

export default articleChosen