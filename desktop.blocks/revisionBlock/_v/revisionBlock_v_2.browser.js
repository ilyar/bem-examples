/* global modules:false */

/**
 * @module revisionBlock
 * @version 2
 */
modules.define('revisionBlock', function(provide, RevisionBlock) {

    provide(RevisionBlock.decl({ modName : 'v', modVal : '2' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);
                    console.log('revisionBlock v2');
                }
            }
        }

    }));

});

