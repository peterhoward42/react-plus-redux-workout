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
import { MemoryView } from './components/articles/memory-view'
import { NetEdView } from './components/articles/net-ed-view'
import { ArView } from './components/articles/ar-view'
import { AngularView } from './components/articles/angular-view'
import { PPView } from './components/articles/pp-view'
import { TigerCadView } from './components/articles/tigercad-view'
import { FrostView } from './components/articles/frost-view'
import { ReactReduxView } from './components/articles/react-redux-view'

import bitcoinImage from './assets/bitcoin.png'
import lureImage from './assets/lure-image.jpg'
import goGui from './assets/go-gui.png'
import vrCad from './assets/open-mouth.png'
import chevvy from './assets/chevvy.png'
import memory from './assets/memory.png'
import netEdThumb from './assets/neted-thumb.png'
import arPlane from './assets/ar-plane.png'
import angular from './assets/angular.png'
import musicThumb from './assets/music-thumb.png'
import cadThumb from './assets/cad-thumb.png'
import frostThumb from './assets/frost-thumb.png'
import reactThumb from './assets/react-thumb.png'

const articlesSequence = [
    {
        title: 'React + Redux',
        short: "The JavaScript libraries this site is built with",
        imageUrl: reactThumb,
        altText: 'React and Redux',
        viewElement: ReactReduxView,
        articleSource: 'unused',
    },
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
    },
    {
        title: 'Memory Talk',
        short: "A memory trick that's helped me enourmously",
        imageUrl: memory,
        altText: 'A memory talk',
        viewElement: MemoryView,
        articleSource: 'http://peterhoward42.wim42.webfactional.com/media/memory.mp3',
    },
    {
        title: 'Java Diagram Editor',
        short: "Java engineering graphics Design and Code",
        imageUrl: netEdThumb,
        altText: 'A network editor',
        viewElement: NetEdView,
        articleSource: 'unused',
    },
    {
        title: 'Augmented Reality',
        short: "See Heathrow planes landing on your table",
        imageUrl: arPlane,
        altText: 'A plane',
        viewElement: ArView,
        articleSource: 'unused',
    },
    {
        title: 'AngularJS App',
        short: "A demo project I made to teach myself Angular",
        imageUrl: angular,
        altText: 'Angular',
        viewElement: AngularView,
        articleSource: 'unused',
    },
    {
        title: 'Python Music',
        short: "A Python/PyQt app for editing and playing a piano score",
        imageUrl: musicThumb,
        altText: 'Music',
        viewElement: PPView,
        articleSource: 'unused',
    },
    {
        title: 'C++ CAD',
        short: "A C++ Tech Drawing App for Windows",
        imageUrl: cadThumb,
        altText: 'CAD',
        viewElement: TigerCadView,
        articleSource: 'unused',
    },
    {
        title: 'Cloud File Readers',
        short: "New approach to reading legacy input file decks",
        imageUrl: frostThumb,
        altText: 'Frost application',
        viewElement: FrostView,
        articleSource: 'unused',
    },
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