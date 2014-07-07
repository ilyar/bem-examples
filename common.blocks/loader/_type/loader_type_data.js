/**
 * @module loader_type_data
 * @description Load Data (JSON) from external URL.
 */

modules.define('loader_type_data', function(provide) {

    var LOADING_TIMEOUT = 20000;

    /**
     * Loads bundle
     * @exports
     * @param {String} id
     * @param {String} url
     * @param {Function} onSuccess
     * @param {Function} [onError]
     */
    load = function(id, url, onSuccess, onError) {
    // TODO
    };

    provide(load);

});
