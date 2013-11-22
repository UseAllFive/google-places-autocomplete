/**********************************
Name: google-places-autocomplete.js
Author: Bret Morris
Version: 1.0
***********************************/

(function() {

    "use strict";

    var _autocomplete;

    //-- Default autocomplete settings
    var _default = {
        "input_id": "location", //-- ID of target input
        "opts": {},
        //-- Function called on place select
        //   place_data (object) selected place data
        "onChange": function(place) {
            _log(place);
        }
    }

    //-- args (object) autocomplete settings
    function _init(args) {
        var options = _extend(_default, args);
        //-- Set autocomplete on #location input
        var input = document.getElementById(options.input_id);
        //-- Options for autocomplete
        var opts = options.opts;
        //-- Initiate autocomplete
        _autocomplete = new google.maps.places.Autocomplete(input, opts);
        //-- Listen for when a place has been selected from autocomplete
        google.maps.event.addListener(_autocomplete, 'place_changed', function() {
            var place = _autocomplete.getPlace();
            options.onChange(place);
        });
    }

    function _extend() {
        var i;
        var key;
        for (i = 1; i < arguments.length; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    }

    function _log(val) {
        if (window.console && window.console.log) {
            window.console.log(val);
        }
    }

    window.placesAutocomplete = {
        "init": _init
    };

})();
