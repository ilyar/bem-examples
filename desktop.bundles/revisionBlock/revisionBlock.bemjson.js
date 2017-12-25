({
    block: 'page',
    title: 'revisionBlock',
    head: [
        { elem: 'css', url: 'revisionBlock.css' }
    ],
    scripts: [{ elem: 'js', url: 'revisionBlock.js' }],
    content: [
        {
            block: 'revisionBlock',
            mods: { 'v': '1' },
            content: 'block v1'
        },
        {
            block: 'revisionBlock',
            mods: { 'v': '2' },
            content: 'block v2'
        }
    ]
})
