#!/usr/bin/env node

var pcl = require('./index');

console.log("before enabling...");
pcl.enable();
console.log("OMFG It's colored !");
pcl.disable();
console.log("color has gone ='(");
pcl({str: "a pretty object", nb: 42, bool: true, date: new Date(), undef: undefined});
