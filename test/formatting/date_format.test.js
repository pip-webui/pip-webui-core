//
//  @file date format module tests
//  @copyright Digital Living Software Corp. 2014-2016


suite('pipDateFormat', function() {

    suite('service block', function () {
        var $rootScope,
            translate,
            service;

        setup(module('pipDateFormat'));
        setup(module('pipTranslate'));

        setup(inject(function (pipDateFormat, _$rootScope_, pipTranslate) {
            service = pipDateFormat;
            translate = pipTranslate;
            $rootScope = _$rootScope_;
        }));
//
        test('formatLongDate', function (done) {
            translate.use('en');

            var date = new Date(new Date().getFullYear(), 0, 1);
            // If this year
            assert.equal(service.formatLongDate(date), "January 1", "If this year it should be format MMMM d in english");

            date = new Date(2014, 0, 1);
            assert.equal(service.formatLongDate(date), "1 January 2014", "If not this year it should be format d MMMM yyyy");

            translate.use('ru');

            date = new Date(new Date().getFullYear(), 0, 1);
            // If this year
            assert.equal(service.formatLongDate(date), "1 января", "If this year it should be format d MMMM in russian");

            date = new Date(2014, 0, 1);
            assert.equal(service.formatLongDate(date), "1 января 2014", "If not this year it should be format d MMMM yyyy");

            done();
        });

        test('formatShortDate', function (done) {

            translate.use('en');

            var date = new Date(new Date().getFullYear(), 0, 1);
            // If this year
            assert.equal(service.formatShortDate(date), "Jan 1", "If this year it should be format MMM d in english");

            date = new Date(2014, 0, 1);
            assert.equal(service.formatShortDate(date), "1 Jan 2014", "If not this year it should be format d MMM yyyy");

            translate.use('ru');

            date = new Date(new Date().getFullYear(), 0, 1);
            // If this year
            assert.equal(service.formatShortDate(date), "1 Янв", "If this year it should be format d MMMM in russian");

            date = new Date(2014, 0, 1);
            assert.equal(service.formatShortDate(date), "1 Янв 2014", "If not this year it should be format d MMMM yyyy");

            done();
        });

        test('formatLongMonth', function (done) {

            var date = new Date(2015, 0, 1);

            translate.use('en');
            assert.equal(service.formatLongMonth(date), "January 2015", "should be format MMMM yyyyin english");

            translate.use('ru');
            assert.equal(service.formatLongMonth(date), "января 2015", "should be format d MMMM yyyy in russian");

            done();
        });

        test('formatYear', function (done) {

            var date = new Date(2015, 0, 1);

            translate.use('en');
            assert.equal(service.formatYear(date), "2015", "should be format yyyy");

            done();
        });

        test('formatShortWeek', function (done) {

            var date = new Date(2015, 1, 15);

            translate.use('en');
            assert.equal(service.formatShortWeek(date), "9 - 15 February 2015", "should be format d - d MMMM yyyy in english");

            translate.use('ru');
            assert.equal(service.formatShortWeek(date), "9 - 15 Февраль 2015", "should be format d - d MMMM yyyy in russian");

            done();
        });

        test('formatLongDayAndMonth', function (done) {

            var date = new Date(2015, 1, 15);

            translate.use('en');
            assert.equal(service.formatLongDayAndMonth(date), "February 15", "should be format MMMM d in english");

            translate.use('ru');
            assert.equal(service.formatLongDayAndMonth(date), "15 февраля", "should be format d MMMM in russian");

            done();
        });

        test('formatDateRange', function (done) {

            var date = new Date(2015, 1, 15),
                date2 = new Date(2015, 2, 2);

            translate.use('en');
            assert.equal(service.formatDateRange(date, date2), "15 Feb - 2 Mar", "if years are equal and this year should be format d MMM - d MMM in english");

            translate.use('ru');
            assert.equal(service.formatDateRange(date, date2), "15 Фев - 2 Мар", "if years are equal and this year should be format d MMM - d MMM in russian");

            date = new Date(2014, 1, 15),
                date2 = new Date(2014, 2, 2);

            translate.use('en');
            assert.equal(service.formatDateRange(date, date2), "15 Feb - 2 Mar 2014", "if not this year should be format d MMM - d MMM in english");

            translate.use('ru');
            assert.equal(service.formatDateRange(date, date2), "15 Фев - 2 Мар 2014", "if not this year should be format d MMM - d MMM in russian");

            date = new Date(2014, 1, 15),
                date2 = new Date(2015, 2, 2);

            translate.use('en');
            assert.equal(service.formatDateRange(date, date2), "Feb 15, 2014-Mar 2, 2015", "if years are not equal should be format d MMM - d MMM in english");

            translate.use('ru');
            assert.equal(service.formatDateRange(date, date2), "15 Фев 2014-2 Мар 2015", "if years are not equal should be format d MMM - d MMM in russian");

            done();
        });

    });

});