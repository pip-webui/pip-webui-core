/**
 * @file String utilities
 * @copyright Digital Living Software Corp. 2014-2016
 * @todo
 * - Move functions to general utilities
 */

/* global _, angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipUtils.Strings', []);

    thisModule.factory('pipStrings', function () {
        var strings = {};

        // Creates a sample line from a text
        strings.sampleLine = function (value, maxLength) {
            if (!value || value == '') return '';
    
            var length = value.indexOf('\n');
            length = length >= 0 ? length : value.length;
            length = length < maxLength ? value.length : maxLength;
    
            return value.substring(0, length);
        };
    
        // Simple version of string hashcode
        strings.hashCode = function (value) {
            if (value == null) return 0;
            var result = 0;
            for (var i = 0; i < value.length; i++) {
                result += value.charCodeAt(i);
            }
            return result;
        };
    
        return strings;
    });

})();