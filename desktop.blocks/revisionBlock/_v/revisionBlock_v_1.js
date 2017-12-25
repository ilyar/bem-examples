/* global modules:false */

/**
 * @module revisionBlock
 * @version 1
 */
modules.define('revisionBlock', function(provide, RevisionBlock) {

    provide(RevisionBlock.declMod({ modName : 'v', modVal : '1' }, {

        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);
                    console.log('revisionBlock v1');
                }
            }
        }

    }));

});

