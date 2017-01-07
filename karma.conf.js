//jshint strict: false
module.exports = function(config) {
    config.set({

        port: 9876,
        autoWatch: true,
        colors: true,
        basePath: './',

        frameworks: ['jasmine', 'sinon'],

        files: [
            'public/bower_components/angular/angular.js',
            'public/bower_components/angular-route/angular-route.js',
            'public/bower_components/angular-mocks/angular-mocks.js',
            'public/bower_components/angular-messages/angular-messages.js',
            'public/app/**/*.js',
            'public/app/components/**/*.html',
            'test/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.html':'ng-html2js'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'public/'
        },

        reporters: ['progress'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-sinon',
            'karma-ng-html2js-preprocessor'
        ],

        singleRun: false,
        concurrency: Infinity
    });
};
