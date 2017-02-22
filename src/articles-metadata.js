/**
 * This is the single source of truth about which articles this app will display.
 * 
 * The sequence is significant, because it governs the sequence of items
 * in the menu.
 */

import { BitcoinView } from './components/articles/bitcoin-view'
import { LureOfPatternsView } from './components/articles/lure-of-patterns-view'

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
    },
    {
        title: 'The lure of patterns',
        short: 'Exploring a 6 dimensional design space with sliders',
        imageUrl: lureImage,
        altText: 'Lure',
        viewElement: LureOfPatternsView,
        articleSource: 'ld_PXgPw3AI',
    }
]

/**
 * A query that returns the article which has the given title.
 */
const articleFromTitle = (title) => {
    return articlesSequence.find((article) => { return article.title === title })
}

/**
 * A query that tells you what article comes "next" after one you specify.
 * Generalised for "previous" as well as "next" by letting you specify the
 * offset you want as +1 or -1 (or in fact an arbitrary integer). The arithmetic 
 * wraps round automatically at both ends if required.
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