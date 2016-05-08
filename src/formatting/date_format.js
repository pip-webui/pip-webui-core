/**
 * @file Date formatting service
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
 /* global _, angular */
 
(function () {
    'use strict';

    var thisModule = angular.module('pipDateFormat', ['pipUtils', 'pipTranslate']);

	thisModule.config(function(pipTranslateProvider) {

        pipTranslateProvider.translations('en', {
            // Months - 'MONTH_' + monthIndex
            // start at 0 to match JS date format
            'MONTH_1': 'January',
            'MONTH_2': 'February',
            'MONTH_3': 'March',
            'MONTH_4': 'April',
            'MONTH_5': 'May',
            'MONTH_6': 'June',
            'MONTH_7': 'July',
            'MONTH_8': 'August',
            'MONTH_9': 'September',
            'MONTH_10': 'October',
            'MONTH_11': 'November',
            'MONTH_12': 'December',

            'MONTH_LONG_1': 'January',
            'MONTH_LONG_2': 'February',
            'MONTH_LONG_3': 'March',
            'MONTH_LONG_4': 'April',
            'MONTH_LONG_5': 'May',
            'MONTH_LONG_6': 'June',
            'MONTH_LONG_7': 'July',
            'MONTH_LONG_8': 'August',
            'MONTH_LONG_9': 'September',
            'MONTH_LONG_10': 'October',
            'MONTH_LONG_11': 'November',
            'MONTH_LONG_12': 'December',

            'MONTH_SHORT_1': 'Jan',
            'MONTH_SHORT_2': 'Feb',
            'MONTH_SHORT_3': 'Mar',
            'MONTH_SHORT_4': 'Apr',
            'MONTH_SHORT_5': 'May',
            'MONTH_SHORT_6': 'Jun',
            'MONTH_SHORT_7': 'Jul',
            'MONTH_SHORT_8': 'Aug',
            'MONTH_SHORT_9': 'Sep',
            'MONTH_SHORT_10': 'Oct',
            'MONTH_SHORT_11': 'Nov',
            'MONTH_SHORT_12': 'Dec',

            // Days of the week - 'DAY_' + dayIndex
            // start at 1 to match JS date format
            'DAY_1': 'Monday',
            'DAY_2': 'Tuesday',
            'DAY_3': 'Wednesday',
            'DAY_4': 'Thursday',
            'DAY_5': 'Friday',
            'DAY_6': 'Saturday',
            'DAY_7': 'Sunday',

            'ELAPSED_TODAY': 'Today',
            'ELAPSED_YESTERDAY': 'Yesterday',
            'ELAPSED_YEARS': 'y',
            'ELAPSED_MONTHS': 'mth',
            'ELAPSED_WEEKS': 'w',
            'ELAPSED_DAYS': 'd',
            'ELAPSED_HOURS': 'h',
            'ELAPSED_MINUTES': 'm',
            'ELAPSED_SECONDS': 's',
            'ELAPSED_AT': 'at',
            'ELAPSED_AGO': 'ago',
            'ELAPSED_JUST_NOW': 'Just now',
            'ELAPSED_FEW_MIN_AGO': 'Few min ago',
            'ELAPSED_MIN_AGO': 'min ago',
            'ELAPSED_HOUR_AGO': 'hour ago',
            'ELAPSED_HOURS_AGO': 'hours ago',
            'ELAPSED_HOURS_AGO_MORE_THAN_FIVE': 'hours ago'
        });

        pipTranslateProvider.translations('ru', {
            // Months - 'MONTH_' + monthIndex
            // start at 0 to match JS date format
            'MONTH_1': 'январь',
            'MONTH_2': 'февраль',
            'MONTH_3': 'март',
            'MONTH_4': 'апрель',
            'MONTH_5': 'май',
            'MONTH_6': 'июнь',
            'MONTH_7': 'июль',
            'MONTH_8': 'август',
            'MONTH_9': 'сентябрь',
            'MONTH_10': 'октябрь',
            'MONTH_11': 'ноябрь',
            'MONTH_12': 'декабрь',

            'MONTH_LONG_1': 'января',
            'MONTH_LONG_2': 'февраля',
            'MONTH_LONG_3': 'марта',
            'MONTH_LONG_4': 'апреля',
            'MONTH_LONG_5': 'мая',
            'MONTH_LONG_6': 'июня',
            'MONTH_LONG_7': 'июля',
            'MONTH_LONG_8': 'августа',
            'MONTH_LONG_9': 'сентября',
            'MONTH_LONG_10': 'октября',
            'MONTH_LONG_11': 'ноября',
            'MONTH_LONG_12': 'декабря',

            'MONTH_SHORT_1': 'янв',
            'MONTH_SHORT_2': 'фев',
            'MONTH_SHORT_3': 'мар',
            'MONTH_SHORT_4': 'апр',
            'MONTH_SHORT_5': 'май',
            'MONTH_SHORT_6': 'июн',
            'MONTH_SHORT_7': 'июл',
            'MONTH_SHORT_8': 'авг',
            'MONTH_SHORT_9': 'сен',
            'MONTH_SHORT_10': 'окт',
            'MONTH_SHORT_11': 'ноя',
            'MONTH_SHORT_12': 'дек',

            // Days of the week - 'DAY_' + dayIndex
            // start at 1 to match JS date format
            'DAY_1': 'понедельник',
            'DAY_2': 'вторник',
            'DAY_3': 'среда',
            'DAY_4': 'четверг',
            'DAY_5': 'пятница',
            'DAY_6': 'суббота',
            'DAY_7': 'воскресенье',

            'ELAPSED_TODAY': 'Сегодня',
            'ELAPSED_YESTERDAY': 'Вчера',
            'ELAPSED_YEARS': 'г',
            'ELAPSED_MONTHS': 'мц',
            'ELAPSED_WEEKS': 'н',
            'ELAPSED_DAYS': 'д',
            'ELAPSED_HOURS': 'ч',
            'ELAPSED_MINUTES': 'м',
            'ELAPSED_SECONDS': 'с',
            'ELAPSED_AT': 'в',
            'ELAPSED_AGO': 'тн',
            'ELAPSED_JUST_NOW': 'Только что',
            'ELAPSED_FEW_MIN_AGO': 'Несколько мин тн',
            'ELAPSED_MIN_AGO': 'мин тн',
            'ELAPSED_HOUR_AGO': 'час тн',
            'ELAPSED_HOURS_AGO': 'часа тн',
            'ELAPSED_HOURS_AGO_MORE_THAN_FIVE': 'часов тн'
        });
		
	});

    thisModule.factory('pipDateFormat',
        function (pipDates, pipTranslate, $rootScope) {

            return {
                formatDate: formatDate,
                formatLongDate: formatLongDate,
                formatShortDate: formatShortDate,
                formatShortDateWithYear: formatShortDateWithYear,
                formatLongDateWithYear: formatLongDateWithYear,

                formatLongMonth: formatLongMonth,
                formatMonth: formatMonth,
                formatYear: formatYear,
                formatShortWeek: formatShortWeek,
                formatShortDayAndMonth: formatShortDayAndMonth,
                formatLongDayAndMonth: formatLongDayAndMonth,

                formatDateRange: formatDateRange,
                formatDateTimeRange: formatDateTimeRange,

                formatTime: formatTime,
                formatLongTime: formatLongTime,
                formatShortTime: formatShortTime, 

                formatLongDateTime: formatLongDateTime,
                formatShortDateTime: formatShortDateTime,

                formatElapsedTime: formatElapsedTime,
                formatElapsedInterval: formatElapsedInterval,

                formatMillisecondsToSeconds: formatMillisecondsToSeconds
            };


            function twoDigits(value) {
                return value < 10 ? '0' + value : value; 
            };

            function formatDate(value, format, str) {
                if (value == null) return '';

                var
                    strict = str || false,
                    value = _.isDate(value) ? value : new Date(value),
                    thisYear = new Date().getUTCFullYear(),
                    year = value.getUTCFullYear(),
                    month = value.getUTCMonth(),
                    longMonthName = pipTranslate.translate('MONTH_LONG_' + (month + 1)),
                    shortMonthName = pipTranslate.translate('MONTH_SHORT_' + (month + 1)),
                    monthName = pipTranslate.translate('MONTH_' + (month + 1)),
                    day = value.getUTCDate(),
                    startWeek = pipDates.toStartWeek(value),
                    endWeek = pipDates.toEndWeek(value, -1);

                if (strict == false && format == 'd MMMM yyyy' && thisYear === year) {
                        format = 'MMMM d';
                }
                if (strict == false && format == 'd MMM yyyy' && thisYear === year) {
                        format = 'MMM d';
                }
                if ((format == 'MMM d') && $rootScope.$language == 'ru') {
                        format = 'd MMM';
                }
                if ((format == 'MMMM d') && $rootScope.$language == 'ru') {
                    format = 'd MMMM';
                }

                if (format == 'd MMMM yyyy')
                    return '' + day + ' ' + longMonthName + ' ' + year
                else if (format == 'MMMM d, yyyy')
                    return '' + monthName + ' ' + day + ', ' + year
                if (format == 'd MMM yyyy')
                    return '' + day + ' ' + shortMonthName + ' ' + year
                else if (format == 'MMM d, yyyy')
                    return '' + shortMonthName + ' ' + day + ', ' + year
                else if (format == 'd MMMM')
                    return '' + day + ' ' + longMonthName
                else if (format == 'd MMM')
                    return '' + day + ' ' + shortMonthName
                else if (format == 'MMM d')
                    return '' + shortMonthName + ' ' + day;
                else if (format == 'MMMM d')
                    return '' + longMonthName + ' ' + day;
                else if (format == 'yyyy/M/d')
                    return '' + year + '/' + month + '/' + day;
                else if (format == 'yyy-M-d')
                    return '' + year + '-' + month + '-' + day;
                else if (format == 'MMMM')
                    return '' + longMonthName + ' ' + year;
                else if (format == 'yyyy')
                    return '' + year;
                else if (format == 'ww')
                    return '' + startWeek.getUTCDate() + ' - ' + endWeek.getUTCDate() + ' ' + monthName + ' ' + year;

                return '' + day + ' ' + monthName + ' ' + year
            }

            function formatLongDate(value) {
                return formatDate(value, 'd MMMM yyyy');
            }

            function formatShortDateWithYear(value) {
                return formatDate(value, 'd MMM yyyy', true);
            }

            function formatLongDateWithYear(value) {
                return formatDate(value, 'd MMMM yyyy', true);
            }

            function formatShortDate(value) {
                return formatDate(value, 'd MMM yyyy');
            }

            function formatLongMonth(value) {
                return formatDate(value, 'MMMM');
            }

            function formatYear(value) {
                return formatDate(value, 'yyyy');
            }

            function formatShortWeek(value) {
                return formatDate(value, 'ww');
            }

            function formatShortDayAndMonth(value) {
                return formatDate(value, 'd MMM');
            }

            function formatLongDayAndMonth(value) {
                if ($rootScope.$language == 'ru')
                    return formatDate(value, 'd MMMM');
                else
                    return formatDate(value, 'MMMM d');
            }

            function formatDateRange(value1, value2) {
                value1 =  value1 ? (_.isDate(value1) ? value1 : new Date(value1)) : null;
                value2 =  value2 ? (_.isDate(value2) ? value2 : new Date(value2)) : null;

                if (value1 == null) {
                    if ($rootScope.$language == 'ru')
                        return formatDate(value2, 'd MMM yyyy', true);
                    else
                        return formatDate(value2, 'MMM d, yyyy', true);
                }

                if (value2 == null || value1 == value2) {
                    if ($rootScope.$language == 'ru')
                        return formatDate(value1, 'd MMM yyyy', true);
                    else
                        return formatDate(value1, 'MMM d, yyyy', true);
                }

                if (value1.getUTCFullYear() !== value2.getUTCFullYear()) {
                    if ($rootScope.$language == 'ru')
                        return formatDate(value1, 'd MMM yyyy', true) + '-' + formatDate(value2, 'd MMM yyyy', true);
                    else
                        return formatDate(value1, 'MMM d, yyyy', true) + '-' + formatDate(value2, 'MMM d, yyyy', true);
                } else {
                        return formatDate(value1, 'd MMM') + ' - ' + formatDate(value2, 'd MMM')
                            + ((new Date().getUTCFullYear() !== value1.getUTCFullYear()) ? ' ' + formatDate(value1, 'yyyy') : '');
                }
            }

            function formatDateTimeRange(value1, value2) {
                value1 =  value1 ? (_.isDate(value1) ? value1 : new Date(value1)) : null;
                value2 =  value2 ? (_.isDate(value2) ? value2 : new Date(value2)) : null;
                if (value1 == null && value2 == null) return '';

                if (value1 == null) {
                    return formatShortDateTime(value2);
                }

                if (value2 == null || value1 == value2) {
                    return formatShortDateTime(value1);
                }

                var dayStart, monthStart, yearStart,
                    dayEnd, monthEnd, yearEnd;

                dayStart = value1.getUTCDate();
                monthStart = value1.getUTCMonth();
                yearStart = value1.getUTCFullYear();
                dayEnd = value2.getUTCDate();
                monthEnd = value2.getUTCMonth();
                yearEnd = value2.getUTCFullYear();


                if (yearStart !== yearEnd) {
                    return formatDate(value1, 'd MMM') + ', ' + yearStart + ' ' + formatTime(value1, 'hh:mm') +
                        ' - ' + formatDate(value2, 'd MMM') + ', ' + yearEnd + ' ' + formatTime(value2, 'hh:mm');
                } else {
                    if (monthStart != monthEnd && !dayStart != dayEnd)
                        return formatDate(value1, 'd MMM') + ', ' + formatTime(value1, 'hh:mm') +
                            ' - ' + formatDate(value2, 'd MMM') + ', ' + formatTime(value2, 'hh:mm');
                    else
                        return formatTime(value1, 'hh:mm') + ' - ' + formatTime(value2, 'hh:mm')
                }
            }

            function formatTime(value, format) {
                if (value == null) return '';

                value = _.isDate(value) ? value : new Date(value);
                
                var 
                    hours = value.getHours(),
                    mins = value.getMinutes(),
                    secs = value.getSeconds(),
                    ampm = '';

                if (pipTranslate.use() == 'en') {
                    ampm = hours >= 12 ? ' PM' : ' AM';
                    hours = hours % 12;
                    if (hours == 0) hours = 12;
                }

                if (format == 'hh:mm:ss')
                    return '' + twoDigits(hours) + ':' + twoDigits(mins) + ':' + twoDigits(secs) + ampm;
                else if (format == 'hh:mm')
                    return '' + twoDigits(hours) + ':' + twoDigits(mins) + ampm;

                return '' + twoDigits(hours) + ':' + twoDigits(mins) + ':' + twoDigits(secs) + ampm;
            }

            function formatMonth(value, short) {
                if (value == null) return '';
                return short ? pipTranslate.translate('MONTH_SHORT_' + value) : pipTranslate.translate('MONTH_' + value);
            }

            function formatLongTime(value) {
                return formatTime(value, 'hh:mm:ss');
            }

            function formatShortTime(value) {
                return formatTime(value, 'hh:mm');
            }

            function formatLongDateTime(value) {
                if (value == null) return '';
                value = _.isDate(value) ? value : new Date(value);
                return formatLongDate(value) + ' ' + formatLongTime(value);
            }

            function formatShortDateTime(value) {
                if (value == null) return '';
                value = _.isDate(value) ? value : new Date(value);
                return formatShortDate(value) + ' ' + formatShortTime(value);
            }

            function formatElapsedTime(value, format) {
                if (value == null) return '';

                value = _.isDate(value) ? value : new Date(value);

                var 
                    current = new Date(),
                    diff = Math.floor(((current.getTime() + current.getTimezoneOffset()) - (value.getTime() + value.getTimezoneOffset())) / 1000);

                if (diff < 1) return pipTranslate.translate('ELAPSED_JUST_NOW');

                var years, months, weeks, days, hours, mins, secs;

                secs = diff % 60;

                diff = Math.floor(diff / 60);
                mins = diff % 60;

                diff = Math.floor(diff / 60);
                hours = diff % 24;

                diff = diff / 24;
                years = Math.floor(diff / 365),

                diff = diff - years * 365;
                months = Math.floor(diff / 30),
                days = Math.floor(diff - months * 30);

                if (days % 7 == 0) {
                    weeks = Math.floor(days / 7);
                    days = 0;
                } else {
                    weeks = 0;
                }

                if (format == 'interval') {
                    var result = '';

                    if (years) {
                        result += ' ' + years + pipTranslate.translate('ELAPSED_YEARS');
                        weeks = days = hours = mins = secs = null;
                    }
                    if (months) {
                        result += ' ' + months + pipTranslate.translate('ELAPSED_MONTHS');
                        days = hours = mins = secs = null;
                    }
                    if (weeks) {
                        result += ' ' + weeks + pipTranslate.translate('ELAPSED_WEEKS');
                        hours = mins = secs = null;
                    }
                    if (days) {
                        result += ' ' + days + pipTranslate.translate('ELAPSED_DAYS');
                        mins = secs = null;
                    }
                    if (hours) {
                        result += ' ' + hours + pipTranslate.translate('ELAPSED_HOURS');
                        secs = null;
                    }
                    if (mins) result += ' ' + mins + pipTranslate.translate('ELAPSED_MINUTES');
                    if (secs) result += ' ' + secs + pipTranslate.translate('ELAPSED_SECONDS');

                    return result != '' ? result + ' ' + pipTranslate.translate('ELAPSED_AGO') 
                        : pipTranslate.translate('ELAPSED_JUST_NOW');
                }

                // Default time format = 'default'

                if (years > 0) {
                    return formatDate(value, 'd MMM yyyy');
                }

                if (months > 0 || weeks > 0 || days > 1) {
                    return formatDate(value, 'MMM d') 
                        + ', ' + formatTime(value, 'hh:mm');
                }

                if (days == 1) {
                    return pipTranslate.translate('ELAPSED_YESTERDAY') 
                        + ', ' + formatTime(value, 'hh:mm');
                }

                if (hours > 10) {
                    return pipTranslate.translate('ELAPSED_TODAY') 
                        + ', ' + formatTime(value, 'hh:mm');
                }

                if (hours > 0) {
                    return '' + hours + ' ' + (hours < 2 ? pipTranslate.translate('ELAPSED_HOUR_AGO') :
                        hours < 5 ? pipTranslate.translate('ELAPSED_HOURS_AGO') : pipTranslate.translate('ELAPSED_HOURS_AGO_MORE_THAN_FIVE'));
                }

                if (mins > 10) {
                    return '' + mins + ' ' + pipTranslate.translate('ELAPSED_MIN_AGO');
                }

                if (mins > 0) {
                    return pipTranslate.translate('ELAPSED_FEW_MIN_AGO');
                }

                return pipTranslate.translate('ELAPSED_JUST_NOW');
            }

            function formatElapsedInterval(value) {
                return formatElapsedTime(value, 'interval');  
            }

            function formatMillisecondsToSeconds(value) {
                return Math.floor(value / 1000)
            }

        }
    );
    
})();
