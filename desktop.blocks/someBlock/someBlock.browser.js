/* global modules:false */
/** @module someBlock */
modules.define('someBlock',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'BEMTREE'], function(provide, BEMDOM, $, BEMHTML, BEMTREE) {

        var blockName = this.name;

        /**
         * дикларация блока someBlock
         *
         * @exports
         * @class someBlock
         * @abstract
         * @bem
         */
        provide(BEMDOM.decl(blockName, /** @lends someBlock.prototype методы экземпляра */ {

            _setProcess: function(){
                this._update("load...");
            },

            _update: function(content) {
                BEMDOM.update(this.domElem, BEMHTML.apply(content));
            },

            _replace: function(content) {
                BEMDOM.replace(this.domElem, BEMHTML.apply(content));
            },

            _load: function() {
                var _this = this;

                _this._setProcess();

                $.get( this.params.url, function(data) {

                    var json = {
                        "block": blockName,
                        "data": data
                    };

                    BEMTREE.apply(json).then(function (BEMJSON) {
                        _this._replace(BEMJSON);
                    }, this);

                }).fail(function() {
                    _this._update("Error: load fail.");
                })

            },

            isLoad: function() {
                return this.hasMod('loaded');
            },

            onSetMod: {
                'js' : {
                    inited: function() {
                        if(!this.isLoad()) this._load();
                    }
                }
            }

        }, /** @lends someBlock статические методы */ {

        }));

    });