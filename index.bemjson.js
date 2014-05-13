({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: 'index.css' }
    ],
    scripts: [
        { elem: 'js', url: 'index.js' }
    ],
    content: [
        {
            block: 'loader',
            js: {id: 'bem'}
        },
        {
            block: 'someBlock'
        }
    ]
})
