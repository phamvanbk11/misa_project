/*!
 * Bootstrap Grunt task for generating raw-files.min.js for the Customizer
 * http://getbootstrap.com
 * Copyright 2014-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
"use strict";function getFiles(e){var r={},t="less"===e,s=t?"/**/*":"/*";return glob.sync(e+s).filter(function(r){return"fonts"===e?!0:new RegExp("\\."+e+"$").test(r)}).forEach(function(t){var s=t.replace(/^[^/]+\//,"");r[s]="fonts"===e?btoa(fs.readFileSync(t)):fs.readFileSync(t,"utf8")}),"var __"+e+" = "+JSON.stringify(r)+"\n"}var fs=require("fs"),btoa=require("btoa"),glob=require("glob");module.exports=function(e,r){r||(r="");var t=["js","less","fonts"],s=r+t.map(getFiles).reduce(function(e,r){return e+r},""),n="docs/assets/js/raw-files.min.js";try{fs.writeFileSync(n,s)}catch(i){e.fail.warn(i)}e.log.writeln("File "+n.cyan+" created.")};