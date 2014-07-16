({
    block: 'page',
    title: 'revisionBlock',
    head: [
        { elem: 'css', url: '_revisionBlock.css' }
    ],
    scripts: [{ elem: 'js', url: '_revisionBlock.js' }],
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
