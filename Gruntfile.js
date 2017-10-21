/**
 * 
 */
module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		concat:{
			unsecure:{
				src:['src/main/webapp/js/app.js',
				     'src/main/webapp/js/appController.js',
				     'src/main/webapp/js/appServices.js'],
				dest:'src/main/webapp/js/app.min.js'
			}
		},
		uglify:{
			ugli:{
				src:'src/main/webapp/js/app.min.js',
				dest:'src/main/webapp/js/app.min.js'
				
			}
		},
		watch:{
			scripts:{
				files:['src/main/webapp/js/*.js'],
				tasks:['default']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    
	grunt.registerTask('default',['concat','uglify']);
};