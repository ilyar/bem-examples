var environ = require('bem-environ');

exports.baseTechPath = environ.getLibPath('bem-core', '.bem/techs/bemhtml.js');

exports.techMixin = {

    getCompiledResult : function(sources) {
        sources = sources.join('\n');

        var BEMHTML = require('bem-xjst/lib/bemhtml'),
            exportName = this.getExportName(),
            optimize = process.env[exportName + '_ENV'] !== 'development';

        return BEMHTML.generate(sources, {
            wrap : true,
            exportName : exportName,
            optimize : optimize,
            cache   : optimize && process.env[exportName + '_CACHE'] === 'on',
            modulesDeps : this.getModulesDeps()
        });
    },

    getModulesDeps : function() {}

};
