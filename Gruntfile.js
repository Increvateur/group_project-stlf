module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: 'client/scripts/**/*.js'
        },
        watch: {
            client : {
                files: ['client/scripts/**/*.js',
                    'client/views/**/*.html',
                    'client/styles/*.css'
                ],
                tasks: ['jshint', 'uglify','copy','cssmin'],
                options: {
                    spawn: false
                }
            }
        },
        uglify: {
            build: {
                src: [
                    'client/scripts/client.js',
                    'client/scripts/controllers/*.js',
                    'client/scripts/factories/*.js'
                ],
                dest: 'server/public/assets/scripts/client.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'client/styles',
                    src: '*.css',
                    dest: 'server/public/assets/styles/',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/*",
                    "angular-animate/*",
                    "angular-aria/*",
                    "angular-material/*",
                    "angular-messages/*",
                    "angular-route/*",
                    "angular-ui-bootstrap/dist/*",
                    "angular-smart-table/dist/*"
                ],
                "dest": "server/public/assets/vendors/"
            },
            html: {
                expand: true,
                cwd: 'client/views/',
                src: [
                    "index.html",
                    "routes/*.html",
                    "partials/*.html",
                    "templates/*.html"
                ],
                "dest": "server/public/assets/views/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/bootstrap/",
                src: [
                    "dist/**/*"
                ],
                "dest": "server/public/assets/vendors/bootstrap/"
            },
            amCharts: {
                expand: true,
                cwd: "node_modules/amcharts3/",
                src: [
                    "amcharts/*/*"
                ],
                "dest": "server/public/assets/vendors/"
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['copy', 'jshint', 'uglify','cssmin']);
};
