/* global __scope__, google */

/**********************************
Name: google-places-autocomplete.js
Author: Bret Morris
Version: 1.1.0
***********************************/

(function(parent_scope) {

    'use strict';

    var Autocomplete = google.maps.places.Autocomplete;
    var Event = google.maps.event;

    var _autocomplete;
    var _instances = [];

    //-- Default autocomplete settings
    var _default = {
        'input_id': 'location', //-- ID of target input
        'input': null,
        'opts': {},
        //-- Function called on place select
        //   place_data (object) selected place data
        'onChange': function(place) {
            _log(place);
        }
    };

    //-- args (object) autocomplete settings
    function _create(args) {
        var options = _extend( _default, args );
        //-- Set autocomplete on #location input
        var input = options.input || document.getElementById(options.input_id);
        //-- Options for autocomplete
        var opts = options.opts;
        //-- Initiate autocomplete
        var autocomplete = new Autocomplete(input, opts);
        _instances.push(autocomplete);
        //-- Listen for when a place has been selected from autocomplete
        Event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            options.onChange(place);
        });
        return autocomplete;
    }

    //-- Doesn't remove from DOM.
    function _remove(instance) {
        var index = _indexOf(_instances, instance);
        if (-1 === index) {
            return false;
        }
        Event.clearInstanceListeners(instance);
        instance.unbindAll();
        _instances.splice(index, 1);
    }

    function _extend() {
        var i;
        var key;
        for( i = 1; i < arguments.length; i++ ) {
            for ( key in arguments[i] ) {
                if( arguments[i].hasOwnProperty(key) ) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    }

    function _indexOf(array, item) {
        var i;
        var l;
        if (null === array || undefined === array) {
            return -1;
        }
        if (array.indexOf) {
            return array.indexOf(item);
        }
        for (i = 0, l = array.length; i < l; i++) {
            if (item === array[i]) {
                return i;
            }
        }
        return -1;
    }

    function _log(val) {
        if ( window.console && window.console.log ) {
            window.console.log(val);
        }
    }

    parent_scope.placesAutocomplete = {
        'init': _create,
        'create': _create, //-- `init` is deprecated.
        'remove': _remove
    };

}(('undefined' === typeof __scope__) ? window : __scope__));
