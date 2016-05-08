//
//  @file transactions module tests
//  @copyright Digital Living Software Corp. 2014-2016


suite('pipTransactions', function() {

    suite('service block', function () {
        var $rootScope,
            scopeName = "TRANSACTION",
            transaction,
            service;

        setup(module('pipTransactions'));

        setup(inject(function (pipTransaction, _$rootScope_) {
            service = pipTransaction;
            $rootScope = _$rootScope_;
        }));
//
        test('create transaction', function (done) {

            transaction = service(scopeName);

            assert.isDefined($rootScope.transactions, "$rootScope.transactions should be defined");
            assert.isObject($rootScope.transactions, "$rootScope.transactions should be an object");
            assert.isObject(transaction, "transaction should be an object");

            done();
        });

        test('begin transaction', function (done) {

            transaction = service(scopeName);
            var
                operation = 'OPERATING',
                transactionId = transaction.begin(operation);

            assert.isDefined($rootScope.transactions[scopeName], "$rootScope.transactions[scopeName] should be defined");
            assert.equal(transaction.id(), transactionId, "transaction.id() should be equal returned value after transaction.begin()");
            assert(transaction.busy(), 'transaction.busy() should return true if transaction is already in progress');
            assert.isNull(transaction.begin(), 'transaction.begin() should return null if transaction is already in progress');

            done();
        });

        test('abort transaction', function (done) {

            transaction = service(scopeName);
            var
                operation = 'OPERATING',
                transactionId = transaction.begin(operation);

            transaction.abort();
            assert(transaction.aborted(transactionId), 'transaction.aborted(transactionId) should return true if transaction was aborted');

            done();
        });

        test('end transaction', function (done) {

            transaction = service(scopeName);
            var
                backendError = {
                    message: 'error message',
                    status: '1000'
                },
                operation = 'OPERATING';

            transaction.begin(operation);

            transaction.end(backendError);
            assert(!transaction.busy(), 'transaction.busy() should return false or null if transaction was ended');
            assert.strictEqual(transaction.errorMessage(), backendError.message, 'transaction.errorMessage() should be equal to backendError.message');
            assert(transaction.failed(), 'transaction.failed() should return true if transaction was ended with error');

            done();
        });

    });

});