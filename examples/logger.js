const fs = require('fs');
const path = require('path');
const Parser = require('..');

const feed = path.resolve(__dirname, 'data', 'atom.xml');

fs.createReadStream(feed)
	.on('error', function(error) {
		console.error(error);
	})
	.pipe(new Parser())
	.on('error', function(error) {
		console.error(error);
	})
	.on('meta', function(meta) {
		// console.log({ meta });
	})
	.on('readable', function() {
		var stream = this,
			item;
		while ((item = stream.read())) {
			console.log({ item });
		}
	});
