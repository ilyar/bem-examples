[
    {   mustDeps: [
        {
            block : 'spin',
            mods : { theme : 'simple', progress : true }
        }
    ],
        shouldDeps: [
            {
                block : 'someBlock'
            }
        ]
    },
    {   tech : 'js',
        shouldDeps : [
            {
                tech : 'bemhtml',
                block : 'i-bem'
            },
            {
                tech : 'bemhtml',
                block : 'button'
            }
        ]
    }
]