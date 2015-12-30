/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

/* global gSTB:false */

// shims
require('stb-shim-bind');
require('stb-shim-classlist');
require('stb-shim-frame');

// inherit SPA tools
require('spa-develop/static');

// STB logging
if ( window.gSTB && gSTB.Debug ) {
    // need to redefine
    window.debug = require('./debug');
}

// STB tools
require('./weinre');
//require('./proxy');

// the application itself
// "js" directory is resolved by webpack to
// path.join(process.env.PATH_ROOT, process.env.PATH_SRC, 'js')
require('js/main');
