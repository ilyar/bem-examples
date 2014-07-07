({
    block: 'page',
    title: 'Examples BEM blocks',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Examples BEM blocks' }},
        { elem: 'css', url: '_index.css' },
        { elem: 'js', url: '_ie.js', ie: 'lt IE 8' },
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        { block: 'someBlock', js: {url: 'data/someData.json'} }
    ]
})
