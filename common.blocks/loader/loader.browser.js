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
    provide(BEMDOM.decl(this.name, /** @lends loader.prototype методы экземпляра*/ {

        BEMTREE: {
            apply: function(json) {
                var bemjson = json;
                return BEMHTML.apply(bemjson);
            }


        },

        onSetMod: {
            'js' : {
                inited: function() {
                    var _this = this;

                    $.get( 'data/'+this.params.id+'.json', function(data) {
                        BEMDOM.update(_this.domElem, _this.BEMTREE.apply(data));
                    }).fail(function() {
                            BEMDOM.update(_this.domElem, "Error");
                        })

                }
            }
        }

    }, /** @lends loader статические методы */ {

    }));

});