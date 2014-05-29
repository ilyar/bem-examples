[
    {
        mustDeps: [
            {
                block : 'spin',
                mods : { theme : 'normal', size : 'm', progress : true }
            }
        ]
        , shouldDeps: [
            {
                block : 'someBlock'
            }
        ]
    }
    , {
        tech : 'js',
        shouldDeps : [
            {
                tech : 'bemhtml'
                , block : 'i-bem'
            }
        ]
    }
]