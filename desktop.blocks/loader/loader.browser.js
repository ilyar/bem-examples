/* global modules:false */
/** @module loader */
modules.define('loader',
    ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, BEMDOM, $, BEMHTML) {

    /**
     * дикларация блока loader
     *
     * @exports
     * @class loader
     * @abstract
     * @bem
     */
    provide(BEMDOM.decl(this.name, /** @lends loader.prototype методы экземпляра*/{

        onSetMod: {
            'js' : {
                inited: function() {

                    var _this = this;
                    $.get('/data/'+this.params.id+'.json', function(data) {
                        var bemjson = data;
                        //BEMHTML.
                        BEMDOM.update(_this.domElem, BEMHTML.apply(bemjson));
                    })
                }
            }
        }

    }, /** @lends loader статические методы */ {

    }));

});