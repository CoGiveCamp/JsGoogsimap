module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            build: {
                src: 'js/src/*.js',
                dest: 'js/dist/build.min.js'
            }
        },
        less: {
            production: {
                files: {
                    'css/main.css' : 'css/src/main.less'
                }
            }}
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less']);

};