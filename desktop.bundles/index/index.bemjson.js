({
    block: 'page',
    title: 'Examples BEM blocks',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Examples BEM blocks' }},
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        { block: 'loader', js: {id: 'someData'} }
    ]
})
