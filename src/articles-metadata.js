
const YOUTUBE_VIEW_T = 'youtubeview'

const articlesSequence = [
    {
        title: 'Learn about Merkle Trees and Bitcoin',
        short: 'A teaching article with accompanying code.',
        imageUrl: 'http://peterhoward42.wim42.webfactional.com/media/bitcoin.png',
        altText: 'Bitcoin',
        viewType: YOUTUBE_VIEW_T,
        articleSource: 'https://github.com/peterhoward42/merkle-tree-and-bitcoin/blob/master/README.md',
        description: 'a description about bitcoin stuff'
    },
    {
        title: 'The lure of patterns',
        short: 'Exploring a 6 dimensional design space with sliders',
        imageUrl: 'http://peterhoward42.wim42.webfactional.com/media/lure-image.jpg',
        altText: 'Lure',
        viewType: YOUTUBE_VIEW_T,
        articleSource: 'ld_PXgPw3AI',
        description: 'a description about pattern stuff'
    }
]

const articleFromTitle = {}
articlesSequence.forEach((article, idx) => {
    articleFromTitle[article.title] = article
})


export {
    articlesSequence, articleFromTitle,
    YOUTUBE_VIEW_T,

}

// articleSource: 'https://youtu.be/ld_PXgPw3AI',