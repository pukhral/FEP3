module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                            width: 320,
                            suffix: '_tiny_320',
                            quality: 100

                        }, {
                            width: 640,
                            suffix: '_small_640',
                            quality: 100
                        },{

                            width: 800,
                            suffix: '_medium_800',
                            quality: 100
                        }, {
                            width: 1280,
                            suffix: '_large_1280',
                            quality: 100
                        } , {

                            width: 1600,
                            suffix: '_largest_1600',
                            quality: 100
                        }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,JPG}'],
                    cwd: 'original size/',
                    dest: 'images/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};