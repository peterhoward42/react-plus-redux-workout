/**
 * This is the single source of truth about which articles this app will display.
 * 
 * The sequence is significant, because it governs the sequence of items
 * in the menu.
 */

import { BitcoinView } from './components/bitcoin-view'
import { YoutubeView } from './components/youtube-view'

import bitcoinImage from './assets/bitcoin.png'
import lureImage from './assets/lure-image.jpg'

const articlesSequence = [
    {
        title: 'Learn about Merkle Trees and Bitcoin',
        short: 'A teaching article with accompanying code.',
        imageUrl: bitcoinImage,
        altText: 'Bitcoin',
        viewElement: BitcoinView,
        articleSource: 'https://github.com/peterhoward42/merkle-tree-and-bitcoin/blob/master/README.md',
        description: 'a description about bitcoin stuff'
    },
    {
        title: 'The lure of patterns',
        short: 'Exploring a 6 dimensional design space with sliders',
        imageUrl: lureImage,
        altText: 'Lure',
        viewElement: YoutubeView,
        articleSource: 'ld_PXgPw3AI',
        description: 'a description about pattern stuff'
    }
]

/**
 * A query that returns the article which has the given title.
 */
const articleFromTitle = (title) => {
    return articlesSequence.find((article) => { return article.title === title })
}

/**
 * A query that returns the article that is <increment> beyond the given 
 * article in the sequence. The arithmetic wraps round at both ends.
 */
const neighbourArticle = (originArticle, incrementIndexBy) => {
    const existingIndex = articlesSequence.indexOf(originArticle)
    const length = articlesSequence.length
    let newIndex = (existingIndex + incrementIndexBy) % length
    while (newIndex < 0)
        newIndex += length
    return articlesSequence[newIndex]
}


export {
    articlesSequence,
    articleFromTitle,
    neighbourArticle,
}