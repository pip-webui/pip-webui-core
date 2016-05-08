/**
 * @file Global application timer service
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
 /* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipTimer', []);

    thisModule.service('pipTimer', 
        function ($interval, $rootScope) {
            var 
                AUTO_PULL_CHANGES_TIMEOUT = 60000,
                AUTO_UPDATE_PAGE_TIMEOUT = 15000,
                started = false, 
                autoPullChangesInterval, 
                autoUpdatePageInterval;

            return {
                isStarted: isStarted,
                start: start,
                stop: stop
            };

            //------------------------

            function isStarted() {
                return started;
            };

            function start() {
                if (started) return;

                autoPullChangesInterval = $interval(function () {
                    $rootScope.$broadcast('pipAutoPullChanges');
                }, AUTO_PULL_CHANGES_TIMEOUT);

                autoUpdatePageInterval = $interval(function () {
                    $rootScope.$broadcast('pipAutoUpdatePage');
                }, AUTO_UPDATE_PAGE_TIMEOUT);

                started = true;
            };

            function stop() {
                if (autoPullChangesInterval)
                    $interval.cancel(autoPullChangesInterval);

                if (autoUpdatePageInterval)
                    $interval.cancel(autoUpdatePageInterval);

                started = false;
            };
        }
    );

})();
