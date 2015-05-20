var save = console.log;

module.exports = function(a) {
    console.info(require('util').inspect(a, {colors: true}));
}

module.exports.enable = function() {
    console.log = this;
}

module.exports.disable = function() {
    console.log = save;
}

module.exports.print = function(a) {
    require('deprecate-me')({since: '1.1.0', removed: '2.0.0', message: 'You should use directly require(\'pretty-console.log\')() instead'});
    this(a);
}
