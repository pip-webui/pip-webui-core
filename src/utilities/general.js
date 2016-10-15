/**
 * @file General purpose utilities
 * @copyright Digital Living Software Corp. 2014-2016
 */

/* global _, $, angular */

(function () {
    'use strict';

    var thisModule = angular.module('pipUtils.General', ['pipState', 'pipAssert']);

    thisModule.factory('pipUtils', function ($rootScope, $window, $state, pipAssert) {

        function strRepeat(str, qty) {
            if (qty < 1) return '';
            var result = '';
            while (qty > 0) {
                if (qty & 1) result += str;
                qty >>= 1, str += str;
            }
            return result;
        }

        var toString = Object.prototype.toString;

        var sprintf = (function sprintf() {
            function get_type(variable) {
                return toString.call(variable).slice(8, -1).toLowerCase();
            }

            var str_repeat = strRepeat;

            var str_format = function() {
                if (!str_format.cache.hasOwnProperty(arguments[0])) {
                    str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
                }
                return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
            };

            str_format.format = function(parse_tree, argv) {
                var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
                for (i = 0; i < tree_length; i++) {
                    node_type = get_type(parse_tree[i]);
                    if (node_type === 'string') {
                        output.push(parse_tree[i]);
                    }
                    else if (node_type === 'array') {
                        match = parse_tree[i]; // convenience purposes only
                        if (match[2]) { // keyword argument
                            arg = argv[cursor];
                            for (k = 0; k < match[2].length; k++) {
                                if (!arg.hasOwnProperty(match[2][k])) {
                                    throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
                                }
                                arg = arg[match[2][k]];
                            }
                        } else if (match[1]) { // positional argument (explicit)
                            arg = argv[match[1]];
                        }
                        else { // positional argument (implicit)
                            arg = argv[cursor++];
                        }

                        if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
                            throw new Error(sprintf('[_.sprintf] expecting number but found %s', get_type(arg)));
                        }
                        switch (match[8]) {
                            case 'b': arg = arg.toString(2); break;
                            case 'c': arg = String.fromCharCode(arg); break;
                            case 'd': arg = parseInt(arg, 10); break;
                            case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
                            case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
                            case 'o': arg = arg.toString(8); break;
                            case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
                            case 'u': arg = Math.abs(arg); break;
                            case 'x': arg = arg.toString(16); break;
                            case 'X': arg = arg.toString(16).toUpperCase(); break;
                        }
                        arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
                        pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
                        pad_length = match[6] - String(arg).length;
                        pad = match[6] ? str_repeat(pad_character, pad_length) : '';
                        output.push(match[5] ? arg + pad : pad + arg);
                    }
                }
                return output.join('');
            };

            str_format.cache = {};

            str_format.parse = function(fmt) {
                var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
                while (_fmt) {
                    if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
                        parse_tree.push(match[0]);
                    }
                    else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
                        parse_tree.push('%');
                    }
                    else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
                        if (match[2]) {
                            arg_names |= 1;
                            var field_list = [], replacement_field = match[2], field_match = [];
                            if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                                while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                                    if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                                        field_list.push(field_match[1]);
                                    }
                                    else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                                        field_list.push(field_match[1]);
                                    }
                                    else {
                                        throw new Error('[_.sprintf] huh?');
                                    }
                                }
                            }
                            else {
                                throw new Error('[_.sprintf] huh?');
                            }
                            match[2] = field_list;
                        }
                        else {
                            arg_names |= 2;
                        }
                        if (arg_names === 3) {
                            throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');
                        }
                        parse_tree.push(match);
                    }
                    else {
                        throw new Error('[_.sprintf] huh?');
                    }
                    _fmt = _fmt.substring(match[0].length);
                }
                return parse_tree;
            };

            return str_format;
        })();

        return {
            copyProperty: copyProperty,
            copy: copyProperty,
            swapProperties: swapProperties,
            swap: swapProperties,
            convertToBoolean: convertToBoolean,
            toBoolean: convertToBoolean,
            toBool: convertToBoolean,
            convertObjectIdsToString: convertObjectIdsToString,
            OidToString: convertObjectIdsToString,
            generateVerificationCode: generateVerificationCode,
            vercode: generateVerificationCode,
            scrollTo: scrollTo,
            equalObjectIds: equalObjectIds,
            eqOid: equalObjectIds,
            notEqualObjectIds: notEqualObjectIds,
            neqOid: notEqualObjectIds,
            containsObjectId: containsObjectId,
            hasOid: containsObjectId,
            isObjectId: isObjectId,
            // Strings functions. No analogues in lodash.strings
            sampleLine: sampleLine,
            hashCode: hashCode,
            makeString: makeString,
            getBrowser: getBrowser,
            checkSupported: checkSupported,
            sprintf: sprintf,
            // Collection function. No analogues in lodash. It may be in lodash later. Look gitHub/lodash issue #1022
            replaceBy: replaceBy
        };
        
        //--------------------
        function replaceBy(items, key, value, data) {
            if (!items || !items.length)
                return null;
            for (var i = 0; i < items.length; i++) {
                if (items[i][key] == value) {
                    items[i] = data;
                    return;
                }
            }
        };

        // Creates a sample line from a text
        function sampleLine(value, maxLength) {
            if (!value || value == '') return '';

            var length = value.indexOf('\n');
            length = length >= 0 ? length : value.length;
            length = length < maxLength ? value.length : maxLength;

            return value.substring(0, length);
        };

        // Simple version of string hashcode
        function hashCode(value) {
            if (value == null) return 0;
            var result = 0;
            for (var i = 0; i < value.length; i++) {
                result += value.charCodeAt(i);
            }
            return result;
        };

        // Ensure some object is a coerced to a string
        function makeString(object) {
            if (object == null) return '';
            return '' + object;
        };

        function isObjectId(value) {
            var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
            return checkForHexRegExp.test(value);
        }

        // Compares two ObjectIds (they are not equal by '==')
        function equalObjectIds(value1, value2) {
            if (value1 == null && value2 == null)
                return true;

            if (value1 == null || value2 == null)
                return false;

            return value1.toString() == value2.toString();
        };

        // Compares two ObjectIds (they are always not equal by '!=')
        function notEqualObjectIds(value1, value2) {
            if (value1 == null && value2 == null)
                return false;

            if (value1 == null || value2 == null)
                return true;

            return value1.toString() != value2.toString();
        };

        // Checks if array contains concrete objectId
        function containsObjectId(values, value) {
            return _.some(values, function (value1) {
                return equalObjectIds(value1, value);
            });
        };

        // Copy property from one object to another if it exists (not null)
        function copyProperty(dest, destProperty, orig, origProperty) {
            // Shift if only 3 arguments set
            if (_.isObject(destProperty)
                && typeof (origProperty) == 'undefined') {
                origProperty = orig;
                orig = destProperty;
                destProperty = origProperty;
            }
    
            if (orig[origProperty] || (typeof (orig[origProperty]) === 'number' && orig[origProperty] % 1 == 0)) {
                dest[destProperty] = orig[origProperty];
                return true;
            }
    
            return false;
        };
    
        // Swaps values of two properties
        function swapProperties(obj, prop1, prop2) {
            var 
                temp1 = obj[prop1],
                temp2 = obj[prop2];
    
            if (temp1) {
                obj[prop2] = temp1;
            }
            else {
                delete obj[prop2];
            }
    
            if (temp2) {
                obj[prop1] = temp2;
            }
            else {
                delete obj[prop1];
            }
        };
    
        // Converts value into boolean
        function convertToBoolean(value) {
            if (value == null) return false;
            if (!value) return false;
            value = value.toString().toLowerCase();
            return value == '1' || value == 'true';
        };
    
        // Converts array of object ids to strings (for comparison)
        function convertObjectIdsToString(values) {
            return _.map(values, function (value) {
                return value ? value.toString() : 0;
            });
        };

        // Generates random big number for verification codes
        function generateVerificationCode() {
            return Math.random().toString(36).substr(2, 10).toUpperCase(); // remove `0.`
        };

        // Scrolling
        //--------------
        
        function scrollTo(parentElement, childElement, animationDuration) {
            if(!parentElement || !childElement) return;
            if (animationDuration == undefined) animationDuration = 300;

            setTimeout(function () {
                if (!$(childElement).position()) return;
                var modDiff= Math.abs($(parentElement).scrollTop() - $(childElement).position().top);
                if (modDiff < 20) return;
                var scrollTo = $(parentElement).scrollTop() + ($(childElement).position().top - 20);
                if (animationDuration > 0)
                    $(parentElement).animate({
                        scrollTop: scrollTo + 'px'
                    }, animationDuration);
            }, 100);
        };

        // todo add support for iPhone
        function getBrowser() {
            var ua = $window.navigator.userAgent;

            var bName = function () {
                if (ua.search(/Edge/) > -1) return "edge";
                if (ua.search(/MSIE/) > -1) return "ie";
                if (ua.search(/Trident/) > -1) return "ie11";
                if (ua.search(/Firefox/) > -1) return "firefox";
                if (ua.search(/Opera/) > -1) return "opera";
                if (ua.search(/OPR/) > -1) return "operaWebkit";
                if (ua.search(/YaBrowser/) > -1) return "yabrowser";
                if (ua.search(/Chrome/) > -1) return "chrome";
                if (ua.search(/Safari/) > -1) return "safari";
                if (ua.search(/Maxthon/) > -1) return "maxthon";
            }();

            var version;
            switch (bName) {
                case "edge":
                    version = (ua.split("Edge")[1]).split("/")[1];
                    break;
                case "ie":
                    version = (ua.split("MSIE ")[1]).split(";")[0];
                    break;
                case "ie11":
                    bName = "ie";
                    version = (ua.split("; rv:")[1]).split(")")[0];
                    break;
                case "firefox":
                    version = ua.split("Firefox/")[1];
                    break;
                case "opera":
                    version = ua.split("Version/")[1];
                    break;
                case "operaWebkit":
                    bName = "opera";
                    version = ua.split("OPR/")[1];
                    break;
                case "yabrowser":
                    version = (ua.split("YaBrowser/")[1]).split(" ")[0];
                    break;
                case "chrome":
                    version = (ua.split("Chrome/")[1]).split(" ")[0];
                    break;
                case "safari":
                    version = (ua.split("Version/")[1]).split(" ")[0];
                    break;
                case "maxthon":
                    version = ua.split("Maxthon/")[1];
                    break;
            }

            var platform = 'desktop';
            if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua.toLowerCase())) platform = 'mobile';

            var os;
            try {
                var osAll = (/(windows|mac|android|linux|blackberry|sunos|solaris|iphone)/.exec(ua.toLowerCase()) || [u])[0].replace('sunos', 'solaris'),
                    osAndroid = (/(android)/.exec(ua.toLowerCase()) || '');
                    os = osAndroid && (osAndroid == 'android' || (osAndroid[0] == 'android')) ? 'android' : osAll;
            } catch (err) {
                os = 'unknown'
            }

            var browsrObj;

            try {
                browsrObj = {
                    platform: platform,
                    browser: bName,
                    versionFull: version,
                    versionShort: version.split(".")[0],
                    os: os
                };
            } catch (err) {
                browsrObj = {
                    platform: platform,
                    browser: 'unknown',
                    versionFull: 'unknown',
                    versionShort: 'unknown',
                    os: 'unknown'
                };
            }

            return browsrObj;
        }

        // todo нужны каке нибудь настройки?
        function checkSupported(supported) {
            if (!supported) supported = {
                edge: 11,
                ie: 11,
                firefox: 43, //4, for testing
                opera: 35,
                chrome: 47
            };

            var systemInfo = getBrowser();

            if (systemInfo && systemInfo.browser && supported[systemInfo.browser]){
                if (systemInfo.versionShort >= supported[systemInfo.browser]) return true;
            }
            return true;

        };

    });

})();
