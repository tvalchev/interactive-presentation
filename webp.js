const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['resources/img/*.{jpg,png}'], {
		destination: 'resources/img/',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Images optimized');
})();

