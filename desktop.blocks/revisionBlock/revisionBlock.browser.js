/* global modules:false */

/**
 * @module revisionBlock
 */
modules.define('revisionBlock', ['i-bem__dom'], function(provide, BEMDOM) {

    /**
     * @class revisionBlock
     */
    provide(BEMDOM.decl(this.name, /** @lends revisionBlock.prototype */{

        onSetMod : {

            'js' : {
                'inited' : function() {
                    console.log('revisionBlock base');
                }
            }

        }

    }, /** @lends revisionBlock */{

    }));

});
