({
    mustDeps: [
        {
            elems: ['title', 'body', 'question']
        }
    ],
    shouldDeps: [
        {
            block: 'input'
        },
        {
            block: 'button',
            mods: { theme: 'normal', size: 's'}
        }
    ]
})