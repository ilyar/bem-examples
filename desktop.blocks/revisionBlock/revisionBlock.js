/**
 * @module revisionBlock
 */
modules.define('revisionBlock', ['i-bem-dom'], function (provide, BEMDOM) {

    /**
     * @exports
     * @class revisionBlock
     * @bem
     */
    provide(BEMDOM.declBlock(this.name, /** @lends revisionBlock.prototype */{

        beforeSetMod: {

            'js': {
                'inited': function () {
                    console.log('revisionBlock base');
                }
            }

        }

    }, /** @lends revisionBlock */{}));

});
