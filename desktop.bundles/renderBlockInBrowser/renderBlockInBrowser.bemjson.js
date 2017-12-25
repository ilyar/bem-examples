module.exports = {
    block: 'page',
    title: 'Page renderBlockInBrowser',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'renderBlockInBrowser.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'renderBlockInBrowser.min.js' }],
    mods: { theme: 'islands' },
    content: [
        { block: 'someBlock', js: {url: 'data/someData.json'} },
        { block: 'someBlock', js: {url: 'data/someData.json'} }
    ]
};
