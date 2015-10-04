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
