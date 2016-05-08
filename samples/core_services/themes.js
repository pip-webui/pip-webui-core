/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appCoreServices.Themes', []);

    thisModule.config(function(pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            orange: 'Orange theme',
            red: 'Red theme'
        });
        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            orange: 'Оранжевая тема',
            red: 'Красная тема'
        });
    });

    thisModule.controller('ThemesController',
        function ($scope, $mdTheming, pipTheme, $state, $rootScope, $timeout) {

            $scope.themes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            $scope.saveChanges = saveSettings;
            $scope.localTheme = $rootScope.$theme;

            return;

            function saveSettings(theme) {
                pipTheme.setCurrentTheme(theme);
            };
        })


})();
