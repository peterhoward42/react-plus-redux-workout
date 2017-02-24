/**
 * This is the single source of truth about which articles this app will display.
 * 
 * The sequence is significant, because it governs the sequence of items
 * in the menu.
 */

import { BitcoinView } from './components/articles/bitcoin-view'
import { LureOfPatternsView } from './components/articles/lure-of-patterns-view'
import { GoGuiView } from './components/articles/go-gui-view'
import { VRCadView } from './components/articles/vr-cad-view'
import { OOMechView } from './components/articles/oo-mech-view'

import bitcoinImage from './assets/bitcoin.png'
import lureImage from './assets/lure-image.jpg'
import goGui from './assets/go-gui.png'
import vrCad from './assets/open-mouth.png'
import chevvy from './assets/chevvy.png'

const articlesSequence = [
    {
        title: 'Merkle Trees + Bitcoin',
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
    },
    {
        title: 'Stand-alone GUI in Go',
        short: 'Encapsulating the whole shooting match into a single exectuable.',
        imageUrl: goGui,
        altText: 'GUI in Go',
        viewElement: GoGuiView,
        articleSource: 'unused',
    },
    {
        title: 'Virtual Reality + CAD',
        short: 'Let CAD designers swim around inside their models',
        imageUrl: vrCad,
        altText: 'Virtual reality plus CAD',
        viewElement: VRCadView,
        articleSource: 'unused',
    },
    {
        title: 'OOD Demystified',
        short: 'Explaining OO like a mechanical assembly',
        imageUrl: chevvy,
        altText: 'OOD for Mech Engineers',
        viewElement: OOMechView,
        articleSource: 'unused',
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