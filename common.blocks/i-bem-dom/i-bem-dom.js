modules.define('i-bem-dom',
    ['BEMHTML', 'BEMTREE'], function (provide, BEMHTML, BEMTREE, bemDom) {

    bemDom.render = function (bemJson, ctx) {
        ctx = ctx || bemDom.scope;
        var html = BEMHTML.apply(BEMTREE.apply(bemJson));
        bemDom.replace(ctx, html)
    };
    provide(bemDom);

});
