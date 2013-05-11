require('should');
var httpsqs = require('../lib/httpsqs');

describe('httpsqs', function() {

    var queue = null;

    before(function() {
        queue = new httpsqs({name: 'test'});
    });

    describe('Test httpsqs instance [queue]', function() {
        it('queue should be an instance of httpsqs', function() {
            queue.should.be.an.instanceof(httpsqs);
        });
    });

    describe('#reset', function() {
        it('should return true when success', function(done) {
            queue.reset(function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('Reset queue failed!'));
                }
            });
        });
    });

    describe('#push', function() {
        it('should return true when enqueue success', function(done) {
            queue.push('position#1', function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('Not push successfully.'));
                }
            });
        });
    });

    describe('#view', function() {
        it('should return position#1 when success', function(done) {
            queue.view(1, function(data) {
                if (data.should.equal('position#1')) {
                    done();
                } else {
                    done(new Error('Test view failed'));
                }
            });
        });
    });

    describe('#shift', function() {
        it('should return position#1 when success', function(done) {
            queue.shift(function(result) {
                if (result.should.equal('position#1')) {
                    done();
                } else {
                    done(new Error('Not shift successfully.'));
                }
            });
        })
    });

    describe('#status', function() {
        it('should not return false when success', function(done) {
            queue.status(function(result) {
                if (result.should.be.ok) {
                    done();
                } else {
                    done(new Error('Get status failed!'));
                }
            });
        });
    });

    describe('#maxQueue', function() {
        it('should return true when success', function(done) {
            queue.maxQueue(100, function(result) {
                if (result.should.be.true) {
                    done();
                } else {
                    done(new Error('MaxQueue failed!'));
                }
            });
        });
    });

});