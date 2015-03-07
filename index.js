var save = console.log;

exports.enable = function() {
    console.log = function(a) {
	console.info(require('util').inspect(a, {colors: true}));
    }
}

exports.disable = function() {
    console.log = save;
}

exports.print = function(a) {
    console.info(require('util').inspect(a, {colors: true}));
}
