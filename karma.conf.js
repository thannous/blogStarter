module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/components/**/*.js',
            'app/view*/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter'
        ],
        reporters: ['junit','progress', 'coverage'],
        preprocessors: {
            'app/view*/**/*.js': ['coverage']
        },
        coverageReporter: {type: 'html', dir: 'coverage/'},

        junitReporter: {
            outputDir: 'testJunit',
            outputFile: undefined,
            suite: 'unit'
        }

    });
};
