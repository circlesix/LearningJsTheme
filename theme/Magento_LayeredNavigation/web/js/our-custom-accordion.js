define([
    'jquery',
    'accordion'
], function ($) {
    'use strict';

    return function (config, element) {
        $(element).accordion({
            "openedState": "active",
            "collapsible": true,
            "active": false,
            "multipleCollapsible": true
        });
    };
});