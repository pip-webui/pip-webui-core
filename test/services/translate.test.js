//
//  @file translate module tests
//  @copyright Digital Living Software Corp. 2014-2016


suite('pipTranslate', function() {

    suite('provider block', function () {
        var $rootScope,
            localStorageService,
            provider,
            service;

        setup(module('pipTranslate', function (pipTranslateProvider) {
            provider = pipTranslateProvider;
        }));

        setup(module('LocalStorageModule'));

        setup(inject(function (_$rootScope_, _localStorageService_, pipTranslate) {
            $rootScope = _$rootScope_;
            localStorageService = _localStorageService_;
            service = pipTranslate;
        }));
//
        var
            english = 'en',
            russian = 'ru',
            stringName = 'STRING',
            enString = 'String',
            ruString = '������',
            enStrings = {},
            ruStrings = {};
        enStrings[stringName] = enString;
        ruStrings[stringName] = ruString;

        test('use, language', function (done) {

            provider.translations(english, enStrings);
            provider.translations(russian, ruStrings);

            provider.language(english);
            assert.strictEqual(service.translate(stringName), enString, 'pipTranslate.translate should return translated string in language which was installed by provider.language');

            provider.setRoot(true);
            service.use(russian);
            assert.strictEqual($rootScope.$language, russian, 'pipTranslate.use should set $rootScope.$language if setRoot equal to true');
            assert.strictEqual(localStorageService.get('language'), russian);

            done();
        });

        test('translate', function (done) {
            provider.translations(english, enStrings);
            provider.translations(russian, ruStrings);

            provider.language(english);
            assert.strictEqual(service.translate(stringName), enString, 'pipTranslate.translate should return translated string');

            provider.setRoot(true);
            service.use(russian);

            assert.strictEqual(service.translate(stringName), ruString, 'pipTranslate.translate should return translated string');

            done();
        });

    });

});