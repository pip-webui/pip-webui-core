

(function () {
    'use strict';

    angular
        .module('pipTheme', ['ngMaterial'])
        .config(config)
        .run(run)
        .factory('pipTheme', ThemeFactory);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            blue: 'Blue',
            pink: 'Pink',
            amber: 'Amber',
            orange: 'Orange',
            green: 'Green',
            navy: 'Navy',
            grey: 'Grey'
        });
        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            blue: 'Голубая',
            pink: 'Розовая',
            amber: 'Янтарная',
            orange: 'Оранжевая',
            green: 'Зеленая',
            navy: 'Сине-серая',
            grey: 'Серая'
        });


        registerBlueTheme('default');
        registerBlueTheme('blue');
        registerPinkTheme('pink');
        registerAmberTheme('amber');
        registerOrangeTheme('orange');
        registerGreenTheme('green');
        registerNavyTheme('navy');
        registerGreyTheme('grey');
       // registerDarkTheme('dark');
       // registerBlackTheme('black');

        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);

        function registerBlueTheme(themeName) {
            var bluePrimaryPalette = $mdThemingProvider.extendPalette('blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': undefined
            });
            $mdThemingProvider.definePalette('blue-primary', bluePrimaryPalette);

            var blueBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(33, 150, 243, 1)'
            });
            $mdThemingProvider.definePalette('blue-background', blueBackgroundPalette);

            var blueAccentPalette = $mdThemingProvider.extendPalette('green', {
                '600': 'rgba(0, 200, 83, 1)'
            });
            $mdThemingProvider.definePalette('blue-accent', blueAccentPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('blue-primary', {
                    'default': '500',
                    'hue-1': '300'
                })
                .backgroundPalette('blue-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('blue-accent', {
                    'default': '600'
                });
        }

        function registerPinkTheme(themeName) {
            var PinkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(188, 86, 121, 1)',
                'contrastDefaultColor': 'dark',
                'contrastLightColors': ['A200', 'A700']
            });
            $mdThemingProvider.definePalette('pink-background', PinkBackgroundPalette);

            var PinkPrimaryPalette = $mdThemingProvider.extendPalette('pink', {
                '600': 'rgba(255, 128, 171, 1)',
                '700': 'rgba(188, 86, 121, .54)',
                '900': 'rgba(188, 86, 121, 1)',
                'contrastDefaultColor': 'light'
            });
            $mdThemingProvider.definePalette('pink-primary', PinkPrimaryPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('pink-primary', {
                    'default': '900',
                    'hue-1': '700'
                })
                .backgroundPalette('pink-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('pink-primary', {
                    'default': '600'
                });
        }


        function registerAmberTheme(themeName) {
            var orangeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(255, 152, 0, 1)'
            });
            $mdThemingProvider.definePalette('orange-background', orangeBackgroundPalette);

            var orangePrimaryPalette = $mdThemingProvider.extendPalette('orange', {
                '800': 'rgba(255, 152, 0, 1)',
                '900': 'rgba(255, 152, 0, .54);'
            });
            $mdThemingProvider.definePalette('orange-primary', orangePrimaryPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('orange-primary', {
                    'default': '800',
                    'hue-1': '900'
                })
                .backgroundPalette('orange-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('orange', {
                    'default': '900'
                });
        }

        function registerOrangeTheme(themeName) {
            var RedBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(255, 112, 67, 1)',
                'contrastLightColors': ['600', '700', '800', '900', 'A200']
            });
            $mdThemingProvider.definePalette('red-background', RedBackgroundPalette);

            var RedPrimaryPalette = $mdThemingProvider.extendPalette('orange', {
                '800': 'rgba(255, 112, 67, 1)',
                '900': 'rgba(255, 152, 67, .54)',
                'A100': 'rgba(255, 171, 64, 1)',
                'contrastLightColors': ['800', '900', 'A100']
            });
            $mdThemingProvider.definePalette('red-primary', RedPrimaryPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('red-primary', {
                    'default': '800',
                    'hue-1': '900'
                })
                .backgroundPalette('red-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('red-primary', {
                    'default': 'A100'
                });
        }

        function registerGreenTheme(themeName) {
            var greenBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(76, 175, 80, 1)'
            });
            $mdThemingProvider.definePalette('green-background', greenBackgroundPalette);

            var greenPrimaryPalette = $mdThemingProvider.extendPalette('green', {
                '300':'#9ed4a1',
                'contrastLightColors': ['500', '300']
            });
            $mdThemingProvider.definePalette('green-primary', greenPrimaryPalette);


            var greenAccentPalette = $mdThemingProvider.extendPalette('amber', {
                'contrastLightColors': ['A700']
            });
            $mdThemingProvider.definePalette('green-accent', greenAccentPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('green-primary', {
                    'default': '500',
                    'hue-1': '300'
                })
                .backgroundPalette('green-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('green-accent', {
                    'default': 'A700'
                });
        }

        function registerNavyTheme(themeName) {
            var greyPalette = $mdThemingProvider.extendPalette('grey', {
                '700': 'rgba(86, 97, 125, 1)',
                '800': 'rgba(86, 97, 125, .54)',
                'A100': 'rgba(231, 231, 231, 1)'
            });
            $mdThemingProvider.definePalette('grey', greyPalette);

            var tealPalette = $mdThemingProvider.extendPalette('teal', {
                'contrastLightColors': [ '500', '600', '700', '800', '900', 'A700']
            });
            $mdThemingProvider.definePalette('teal', tealPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('grey', {
                    'default': '700',
                    'hue-1': '800'
                })
                .backgroundPalette('grey', {
                    'default': '50',  // background
                    'hue-1': '700',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('teal', {
                    'default': 'A700'
                });
        }

        function registerGreyTheme(themeName) {
            var thirdPartyPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(255, 152, 0, 1)',
                'A400': '#a9b9c0',
                '500': '#607D8B',
                'A700': '#90A4AE',
                //'800': '',
                'contrastDefaultColor': 'dark',
                'contrastLightColors': [ '300', '400', '500', '600', '700', '800', '900', 'A700']
            });
            $mdThemingProvider.definePalette('third-party', thirdPartyPalette);


            $mdThemingProvider.theme(themeName)
                .primaryPalette('third-party', {
                    'default': '500',
                    'hue-1': 'A400'
                })
                .backgroundPalette('third-party', {
                    'default': '50',  // background
                    'hue-1': '500',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('third-party', {
                    'default': 'A700'
                });
        }

        function registerDarkTheme(themeName) {
            var darkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                '600': 'rgba(48, 48, 48, 1)',
                '700': 'rgba(255, 255, 255, 0.54)',
                '800': 'rgba(66, 66, 66, 1)'
            });
            $mdThemingProvider.definePalette('dark-background', darkBackgroundPalette);

            var darkAccentPalette = $mdThemingProvider.extendPalette('green', {
                '600': 'rgba(0, 200, 83, 1)'
            });
            $mdThemingProvider.definePalette('dark-accent', darkAccentPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('dark-background', {
                    'default': '900',
                    'hue-1': '700'
                })
                .backgroundPalette('dark-background', {
                    'default': '800',  // background
                    'hue-1': '900',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('dark-accent', {
                    'default': '600'
                });
        }

        function registerBlackTheme(themeName) {
            var blackBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                '600': 'rgba(48, 48, 48, 1)',
                '700': 'rgba(255, 255, 255, 0.54)',
                '800': 'rgba(66, 66, 66, 1)',
                '500': 'rgba(38, 50, 56, 1)'
            });
            $mdThemingProvider.definePalette('black-background', blackBackgroundPalette);

            var blackAccentPalette = $mdThemingProvider.extendPalette('blue-grey', {
                '700': 'rgba(255, 255, 255, 0.54)'
            });
            $mdThemingProvider.definePalette('black-accent', blackAccentPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('black-accent', {
                    'default': '900',
                    'hue-1': '700'
                })
                .backgroundPalette('black-background', {
                    'default': '800',  // background
                    'hue-1': '500',  // tiles dialog
                    'hue-2': '800'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('black-accent', {
                    'default': '600'
                });
        }
    }



    function run(localStorageService, pipTheme, $rootScope) {
        try {
            var currentTheme = ($rootScope.$user && $rootScope.$user.theme) ?
                $rootScope.$user.theme : localStorageService.get('theme');

            pipTheme.initializeTheme(currentTheme);
        } catch (ex) {
            pipTheme.initializeTheme('blue');
        }
    }

    /**
     * @ngdoc service
     * @name pipTheme
     */
    function ThemeFactory(localStorageService, $mdTheming, $rootScope, $timeout, $state, $stateParams) {
        return {
            /**
             * Set current theme
             * @param {String} theme - theme name
             * @param {String}
             * @throws {Error} 'Theme is not specified' in case if theme is not defined
             * @throws {Error} 'Theme XXX is not registered. Please, register it first with $mdThemingProvider' if theme is not registered
             */
            setCurrentTheme: function (theme) {
                if (theme == null || theme === '') {
                    throw new Error('Theme is not specified');
                }

                if (localStorageService.get('theme') == theme && $rootScope.$theme == theme) {
                    return;
                }

                if (!(theme in $mdTheming.THEMES)) {
                    throw new Error('Theme ' + theme + ' is not registered. Please, register it first with $mdThemingProvider');
                }
                localStorageService.set('theme', theme);
                $rootScope.$theme = theme;
            },

            /** Add attribute 'md-theme' with value current theme
             *  Add current theme class
             */
            initializeTheme: function (theme) {
                if (theme == null || theme === '') {
                    throw new Error('Theme is not specified');
                }

                if (!(theme in $mdTheming.THEMES)) {
                    throw new Error('Theme ' + theme + ' is not registered. Please, register it first with $mdThemingProvider');
                }

                $rootScope.$theme = theme;
                $('body').attr('md-theme', '{{ $theme }}').addClass('{{ $theme }}');
            }
        };
    }
})();
