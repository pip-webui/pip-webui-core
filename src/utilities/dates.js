/**
 * @file Date utilities
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global _, angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipUtils.Dates', []);

    thisModule.factory('pipDates', function () {
        var dates = {};

        dates.addHours = function (date, hours) {
            date = _.isDate(date) ? date : new Date(date);
            var time = date.getTime() + hours * 3600000;
            return new Date(time);
        };

        dates.toStartDay = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };

        dates.toEndDay = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);
            offset = offset != null ? offset : 0;
            var start = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return new Date(start.getTime() + 24 * 3600000 + offset);
        };

        dates.toStartWeek = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return new Date(date.getTime() - (dayOfWeek - 1) * 24 * 3600000);  // dayOfWeek = 0 для воскресенья
        };

        dates.toEndWeek = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);
            offset = offset != null ? offset : 0;
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return new Date(date.getTime() + (8 - dayOfWeek) * 24 * 3600000 + offset);
        };

        dates.toStartMonth = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            return new Date(date.getFullYear(), date.getMonth(), 1);
        };

        dates.toEndMonth = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);

            var
                month = date.getMonth() + 1,
                year = date.getFullYear();

            if (month > 11) {
                year++;
                month = 0;
            }

            date = new Date(year, month, 1);

            if (offset != null) {
                date = new Date(date.getTime() + offset);
            }

            return date;
        };

        dates.toStartYear = function (date) {
            date = _.isDate(date) ? date : new Date(date);
            return new Date(date.getFullYear(), 0, 1);
        };

        dates.toEndYear = function (date, offset) {
            date = _.isDate(date) ? date : new Date(date);
            date = new Date(date.getFullYear() + 1, 0, 1);

            if (offset != null) {
                date = new Date(date.getTime() + offset);
            }

            return date;
        };

        /** UTC functions  - **/
        dates.toUTCDate = function (year, month, day) {
            return new Date(Date.UTC(year, month, day));
        };

        dates.toUTCDate = function (date) {
            return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        };

        dates.fromUTCDate = function (date) {
            if (date == null) date = new Date();
            return new Date(
                date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        };

        dates.toUTCStartWeek = function (date) {
            if(!_.isDate(date)) {
                date = new Date(date);
                date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            }
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            date = dayOfWeek != 1 ? new Date(date.getTime() - (dayOfWeek - 1) * 24 * 3600000) : date;
            return  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        };

        dates.toUTCEndWeek = function (date, offset) {
            if(!_.isDate(date)) {
                date = new Date(date);
                date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            }
            offset = offset != null ? offset : 0;
            var dayOfWeek = date.getDay() ? date.getDay() : 7;
            date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            date = new Date(date.getTime() + (8 - dayOfWeek) * 24 * 3600000 + offset);
            return  new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        };

        return dates;
    });
})();
