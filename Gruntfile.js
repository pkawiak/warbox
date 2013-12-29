module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: true
            },
            all: ["src/**/*.js", "test/**/*.js"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('ci', ['jshint']);
    grunt.registerTask('default', 'ci');

};