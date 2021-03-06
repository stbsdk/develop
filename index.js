/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var app     = require('stb-app');
    //metrics = require('../../src/js/metrics');


// shims
require('stb-shim-bind');
require('stb-shim-classlist');
require('stb-shim-frame');

// STB device or emulation?
app.host = !!(window.gSTB || (window.parent && window.parent.gSTB));

// STB logging
window.debug = app.host ? require('./debug') : require('spa-develop/debug');

// universal storage
window.localStorage = window.stbStorage;

// apply screen size, position, margins and styles
app.setScreen(
    app.metrics[localStorage.getItem('screen.height')] ||
    app.metrics[screen.height] ||
    app.metrics[720]
);

// inherit SPA tools
require('spa-develop/static');

// STB tools
if ( app.host ) {
    // web inspector
    require('./weinre');
}

//require('./proxy');
require('./events');

// the application itself
// "js" directory is resolved by webpack to
// path.join(process.env.PATH_ROOT, process.env.PATH_SRC, 'js')
//require('js/main');
