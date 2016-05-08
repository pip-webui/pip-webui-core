//
//  @file string utils module tests
//  @copyright Digital Living Software Corp. 2014-2016

suite('pipStrings', function() {
	var pipStrings;
	
	setup(module('pipUtils.Strings'));
	
	setup(inject(function($injector) {
		pipStrings = $injector.get('pipStrings');
	}));
	
	test('make string', function(done) {
		var original = '123456789';
		var result = pipStrings.sampleLine(original, 5);
		assert.equal(result, '12345');

		done();
	});
});