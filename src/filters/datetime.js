/**
 * @file Filter to format date and time
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipDateTimeFilters', ['pipDateFormat']);

    thisModule.filter('formatDate',  
        function (pipDateFormat) {
            return function(value, format) {
                return pipDateFormat.formatDate(value, format);  
            };
        }
    );

    thisModule.filter('formatLongDate', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatLongDate(value);  
            };
        }
    );

    thisModule.filter('formatLongDateWithYear',
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatLongDateWithYear(value);
            };
        }
    );

    thisModule.filter('formatMonth',
        function (pipDateFormat) {
            return function(value, format) {
                return pipDateFormat.formatMonth(value, format);
            };
        }
    );

    thisModule.filter('formatShortDate', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatShortDate(value);  
            };
        }
    );

    thisModule.filter('formatShortDateWithYear',
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatShortDateWithYear(value);
            };
        }
    );

    thisModule.filter('formatLongMonth',
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatLongMonth(value);
            };
        }
    );

    thisModule.filter('formatYear',
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatYear(value);
            };
        }
    );

    thisModule.filter('formatShortWeek',
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatShortWeek(value);
            };
        }
    );

    thisModule.filter('formatTime', 
        function (pipDateFormat) {
            return function(value, format) {
                return pipDateFormat.formatTime(value, format);  
            };
        }
    );

    thisModule.filter('formatLongTime', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatLongTime(value);  
            };
        }
    );

    thisModule.filter('formatShortTime', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatShortTime(value);  
            };
        }
    );

    thisModule.filter('formatLongDateTime', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatLongDateTime(value);  
            };
        }
    );

    thisModule.filter('formatShortDateTime', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatShortDateTime(value);  
            };
        }
    );

    thisModule.filter('formatElapsedInterval', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatElapsedInterval(value);  
            };
        }
    );

    thisModule.filter('formatElapsedTime', 
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatElapsedTime(value);  
            };
        }
    );

    thisModule.filter('formatMillisecondsToSeconds',
        function (pipDateFormat) {
            return function(value) {
                return pipDateFormat.formatMillisecondsToSeconds(value);
            };
        }
    );

    thisModule.filter('formatDateRange',
        function (pipDateFormat) {
            return function(value1, value2) {
                return pipDateFormat.formatDateRange(value1, value2);
            };
        }
    );

    thisModule.filter('formatDateTimeRange',
        function (pipDateFormat) {
            return function(value1, value2) {
                return pipDateFormat.formatDateTimeRange(value1, value2);
            };
        }
    );


})();
