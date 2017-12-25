/** @module someBlock */
modules.define('someBlock',
    ['i-bem-dom'], function (provide, bemDom) {
        var blockName = this.name;

        /**
         * дикларация блока someBlock
         *
         * @exports
         * @class someBlock
         */
        provide(bemDom.declBlock(blockName, /** @lends someBlock.prototype методы экземпляра */ {

            onSetMod: {
                'js' : {
                    inited: function() {
                        if(!this.hasMod('loaded')) {
                            var data = {
                                title: "I am BEM",
                                content: "BEM Block!"
                            };
                            var json = {
                                block: blockName,
                                data: data
                            };
                            bemDom.render(json, this.domNodes[0]);
                            this.setMod('loaded');
                        }
                    }
                }
            }

        }, /** @lends someBlock статические методы */ {

        }));

    });
