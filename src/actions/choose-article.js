import { CHOOSE_ARTICLE } from './action-types'

const chooseArticle = (articleName) => ({
    type: CHOOSE_ARTICLE,
    articleName // ES6 shorthand for articleName: articleName
})

export default chooseArticle