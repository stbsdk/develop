/**
 * Web Inspector Remote.
 *
 * @module stb/develop/weinre
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var tag     = require('spa-dom').tag,
    util    = require('util'),
    //storage = require('./storage'),
    config  = require('../../config/weinre');


// web inspector is allowed only without SpyJS
if ( config.active /*&& !storage.get('spyjs.active')*/ ) {
    // load external script
    document.head.appendChild(tag('script', {
        type: 'text/javascript',
        src: util.format('//%s:%s/target/target-script-min.js#%s', location.hostname, config.port, config.name)
    }));
}
