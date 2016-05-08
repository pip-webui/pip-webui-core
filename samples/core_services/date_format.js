/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appCoreServices.DateFormat', []);

    thisModule.controller('DateFormatController',
        function($scope, pipDateFormat, $window) {
            $scope.currentTime = new Date();
            $scope.fewDaysAgo = new Date(new Date().getTime() - 172800000);
            $scope.fewHoursFuture = new Date($scope.currentTime.getTime() + 60000*180);
            $scope.pastTime = new Date(new Date().getTime() - 10000000000);
            $scope.pastTime1 = new Date(new Date().getTime() - 60000*60*24*40);
            $scope.pastTime2 = new Date(new Date().getTime() - 100000000000);

            $scope.longDate = pipDateFormat.formatLongDate($scope.currentTime);
            $scope.shortDate = pipDateFormat.formatShortDate($scope.currentTime);
            $scope.longDateWithYear = pipDateFormat.formatLongDateWithYear($scope.currentTime);
            $scope.shortDateWithYear = pipDateFormat.formatShortDateWithYear($scope.currentTime);
            $scope.longTime = pipDateFormat.formatLongTime($scope.currentTime);
            $scope.shortTime = pipDateFormat.formatShortTime($scope.currentTime);
            $scope.longDateTime = pipDateFormat.formatLongDateTime($scope.currentTime);
            $scope.shortDateTime = pipDateFormat.formatShortDateTime($scope.currentTime);

            $scope.dateRange = pipDateFormat.formatDateRange($scope.currentTime, $scope.currentTime);
            $scope.dateRange3 = pipDateFormat.formatDateRange($scope.fewDaysAgo, $scope.currentTime);
            $scope.dateRange2 = pipDateFormat.formatDateRange($scope.pastTime2, $scope.currentTime);

            $scope.dateTimeRangeDay = {
                start: $scope.currentTime,
                end: $scope.fewHoursFuture
            };
            $scope.dateTimeRangeYear = {
                start: $scope.pastTime1,
                end: $scope.currentTime
            };
            $scope.dateTimeRangeDiffYear = {
                start: $scope.pastTime2,
                end: $scope.currentTime
            };
            $scope.dateTimeRangeStart = {
                start: $scope.currentTime,
                end: null
            };
            $scope.dateTimeRangeEnd = {
                start: null,
                end: $scope.fewHoursFuture
            };
            $scope.dateTimeRangeDay.text = pipDateFormat.formatDateTimeRange($scope.dateTimeRangeDay.start, $scope.dateTimeRangeDay.end);
            $scope.dateTimeRangeYear.text = pipDateFormat.formatDateTimeRange($scope.dateTimeRangeYear.start, $scope.dateTimeRangeYear.end);
            $scope.dateTimeRangeDiffYear.text = pipDateFormat.formatDateTimeRange($scope.dateTimeRangeDiffYear.start, $scope.dateTimeRangeDiffYear.end);
            $scope.dateTimeRangeStart.text = pipDateFormat.formatDateTimeRange($scope.dateTimeRangeStart.start, $scope.dateTimeRangeStart.end);
            $scope.dateTimeRangeEnd.text = pipDateFormat.formatDateTimeRange($scope.dateTimeRangeEnd.start, $scope.dateTimeRangeEnd.end);

            $scope.userAgent = $window.navigator.userAgent;

        }
    );

})();
