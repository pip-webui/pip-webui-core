// /**
//  * @file Search tag utilities
//  * @copyright Digital Living Software Corp. 2014-2016
//  */

// /* global _, angular */

// (function () {
//     'use strict';

//     var thisModule = angular.module('pipUtils.Tags', []);

//     thisModule.factory('pipTags', function () {
//         var tags = {};
        
//         var HASHTAG_REGEX = /#\w+/g;
    
//         var normalizeTag = function (tag) {
//             return tag 
//                 ? _.trim(tag.replace(/(_|#)+/g, ' '))
//                 : null;
//         };
//         tags.normalizeTag = normalizeTag;
    
//         var compressTag = function (tag) {
//             return tag
//                 ? tag.replace(/( |_|#)/g, '').toLowerCase()
//                 : null;
//         };
//         tags.compressTag = compressTag;
    
//         var equalTags = function (tag1, tag2) {
//             if (tag1 == null && tag2 == null)
//                 return true;
//             if (tag1 == null || tag2 == null)
//                 return false;
//             return compressTag(tag1) == compressTag(tag2);
//         };
//         tags.equalTags = equalTags;
    
//         var normalizeTags = function (tags) {
//             if (_.isString(tags)) {
//                 tags = tags.split(/( |,|;)+/);
//             }
    
//             tags = _.map(tags, function (tag) {
//                 return normalizeTag(tag);
//             });
    
//             return tags;
//         };
//         tags.normalizeTags = normalizeTags;
    
//         var compressTags = function (tags) {
//             if (_.isString(tags)) {
//                 tags = tags.split(/( |,|;)+/);
//             }
    
//             tags = _.map(tags, function (tag) {
//                 return compressTag(tag);
//             });
    
//             return tags;
//         };
//         tags.compressTags = compressTags;
    
//         var extractTags = function (entity, searchFields) {
//             var tags = normalizeTags(entity.tags);
    
//             _.each(searchFields, function (field) {
//                 var text = entity[field] || '';
    
//                 if (text != '') {
//                     var hashTags = text.match(HASHTAG_REGEX);
//                     tags = tags.concat(normalizeTags(hashTags));
//                 }
//             });
    
//             return _.uniq(tags);
//         };
//         tags.extractTags = extractTags;

//         return tags;
//     });

// })();
