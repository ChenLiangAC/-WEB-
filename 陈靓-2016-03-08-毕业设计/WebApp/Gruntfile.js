module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'public/bulid/simplify.js': ['public/javascripts/simplify/simplify.js', 'public/javascripts/main.js', 'public/javascripts/login.js', 'public/javascripts/index.js', 'public/javascripts/personal.js', 'public/javascripts/reg.js', 'public/javascripts/todolist.js', 'public/javascripts/profile.js', 'public/javascripts/pulish_blog.js']

                }
            },
            css: {

                src:['public/stylesheets/simplify.css', 'public/stylesheets/index.css', 'public/stylesheets/login.css', 'public/stylesheets/register.css', 'public/stylesheets/personal.css'],

                dest:'public/bulid/simplify-css.css'

            }

        },
        cssmin: {

            css: {

                src: 'public/bulid/simplify-css.css',

                dest: 'public/bulid/simplify-css.min.css'

            }


        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/bulid/simplify.min.js': ['public/bulid/simplify.js']

                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-css');


    grunt.registerTask('default', ['concat', 'uglify','cssmin']);

};