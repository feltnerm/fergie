requirejs.config({
    // By default, load anymodules from components/
    baseUrl: 'components/',
    paths: {
        app: "./app"
    },

    shim: {
        'jquery': {
            exports: '$',
            init: function () {
                return $.noConflict();
            }
        },
        'lodash': {
            exports: '_',
            init: function () {
                return _.noConflict();
            }
        },
        'backbone': {
            // These script dependencies should be loaded before loading
            // Backbone.js
            deps: ['lodash', 'jquery'],
            exports: 'Backbone',
            init: function () {
                return Backbone.noConflict();
            }
        },
    }
});
