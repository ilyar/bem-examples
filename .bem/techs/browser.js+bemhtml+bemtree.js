var BEM = require('bem'),
    Q = BEM.require('q');

exports.baseTechName = 'browser.js+bemhtml';

exports.techMixin = {

    getBuildResults: function(decl, levels, output, opts) {
        var _this = this;

        return this.__base(decl, levels, output, opts)
            .then(function(res) {

                return _this.concatBEMTREE(res, output, opts)
                    .then(function() {
                        return res;
                    });

            });
    },

    concatBEMTREE: function(res, output, opts) {
        var _this = this,
            context = this.context,
            declaration = context.opts.declaration;

        return declaration
            .then(function(decl) {

                decl = decl.depsByTechs;

                if (!decl || !decl.js || !decl.js.bemtree) return;

                decl = { deps: decl.js.bemtree };

                var bemtreeTech = context.createTech('bemtree');

                if (bemtreeTech.API_VER !== 2) return Q.reject(new Error(_this.getTechName() +
                    ' can’t use v1 bemtree tech to concat bemtree content. Configure level to use v2 bemtree.'));

                // ugly hack for https://github.com/bem/bem-core/issues/392
                opts.force = true;
                var bemtreeResults = bemtreeTech.getBuildResults(
                    decl,
                    context.getLevels(),
                    output,
                    opts
                );

                return bemtreeResults
                    .then(function(r) {

                        // put bemtree templates at the bottom of builded js file
                        Object.keys(res).forEach(function(suffix) {
                            Array.isArray(res[suffix]) && res[suffix].push(r['bemtree.js']);
                        });

                    });

            });
    }

};
