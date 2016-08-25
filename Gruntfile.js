module.exports = function(grunt) {

  grunt.initConfig({
    // Change the b-fy task to add a transform task
    browserify: {
      js: {
          src: ['./js/main.js'],
          dest: 'dist/app.js'
      },
      options: {
          transform: ['hbsfy']
      }
    },
    jshint: {
      options: {
        predef: [ "document", "console" ],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ['./js/**/*.js']
    },
    sass: {
      dist: {
        files: {
          './css/main.css': './styling/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['./js/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['./styling/**/*.scss '],
        tasks: ['sass']
      },
      hbs: {
        files: ['./templates/**/*.hbs'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};
