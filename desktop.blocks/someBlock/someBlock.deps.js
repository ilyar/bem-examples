[
    {
        mustDeps: [
            { block : 'i-bem', elems : ['dom'] },
            { block : 'vow' }
        ],
        shouldDeps: [
            { elems: [ 'title', 'answer' ] }
        ]
    },
    {
        tech : 'js',
        shouldDeps : [
            { tech : 'bemhtml', block : 'i-bem' },
            { tech : 'bemhtml', block : 'someBlock' },
            { tech : 'bemtree', block : 'i-bem' },
            { tech : 'bemtree', block : 'someBlock' }
        ]
    }
]