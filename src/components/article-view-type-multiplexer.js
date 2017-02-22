/** 
 * The primary element in this app is an element that shows an article.
 * most articles have a dedicated viewer element. E.g. BitcoinView.
 * This multiplexer element lives in the view hierarchy wherever an article 
 * view is needed, and renders the required variant according to the
 * view-type requirement passed in.
 */

const ArticleViewTypeMultiplexer = (props) => {
    const viewElement = props.article.viewElement
    return viewElement({ article: props.article })
}

export { ArticleViewTypeMultiplexer }
