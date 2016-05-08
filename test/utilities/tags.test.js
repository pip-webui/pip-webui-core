//
//  @file tags utils module tests
//  @copyright Digital Living Software Corp. 2014-2016

suite('pipTags', function () {
    var pipTags;
    
    setup(module('pipUtils.Tags'));
    
    setup(inject(function(_pipTags_) {
       pipTags = _pipTags_; 
    }));

    test('extract tags', function (done) {
        var tagList = pipTags.extractTags(
            {
                tags: ['Tag 1', 'tag_2', 'TAG3'],
                name: 'Text with tag1 #Tag1',
                description: 'Text with #tag_2,#tag3-#tag4 and #TAG__5'
            },
            ['name', 'description']
        );

        assert.includeMembers(tagList, ['Tag 1', 'tag 2', 'TAG3', 'Tag1', 'tag3', 'tag4', 'TAG 5']);

        done();
    });
});
