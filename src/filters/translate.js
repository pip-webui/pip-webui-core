/**
 * @file Filter to translate string resources
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipTranslateFilters', ['pipTranslate']);

    thisModule.filter('translate', function (pipTranslate) {
        return function (key) {
            return pipTranslate.translate(key) || key;
        }
    });

})();
