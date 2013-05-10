var request = require('request'),
    _ = require('underscore')._;

var httpsqs = function(settings) {
    settings = settings || {};
    this.settings = _.extend({
        host: '127.0.0.1',
        port: 1218,
        charset: 'utf-8',
        name: ''
    }, settings);
    this.url = 'http://' + this.settings.host + ':' + this.settings.port + '?charset=' + this.settings.charset + '&name=' + this.settings.name + '&opt=';
}

httpsqs.prototype.push = function(data, cb) {
    request.post({
            url: this.url + 'put',
            body: data
        }, function(error, response, body) {
            if (error || body !== "HTTPSQS_PUT_OK") {
                return cb(false);
            } else {
                return cb(true);
            }
        }
    );
}

httpsqs.prototype.shift = function(cb) {
    request.get(this.url + 'get', function(error, response, body) {
        if (error || body === 'HTTPSQS_ERROR' || ! body) {
            return cb(false);
        } else {
            return cb(body);
        }
    });
}

httpsqs.prototype.status = function(cb) {
    request.get(this.url + 'status_json', function(error, response, body) {
        if (error || body === 'HTTPSQS_ERROR' || ! body) {
            return cb(false);
        } else {
            try {
                var status_json = JSON.parse(body);
                return cb(status_json);
            } catch(e) {
                return cb(false);
            }
        }
    });
}

httpsqs.prototype.view = function(position, cb) {
    request.get(this.url + 'view&pos=' + position, function(error, response, body) {
        if (error || body === 'HTTPSQS_ERROR' || ! body) {
            return cb(false);
        } else {
            return cb(body);
        }
    });
}

httpsqs.prototype.reset = function(cb) {
    request.get(this.url + 'reset', function(error, response, body) {
        if (error || body !== 'HTTPSQS_RESET_OK') {
            return cb(false);
        } else {
            return cb(true);
        }
    });
}

httpsqs.prototype.maxQueue = function(length, cb) {
    request.get(this.url + 'maxqueue&num=' + length, function(error, response, body) {
        if (error || body !== 'HTTPSQS_MAXQUEUE_OK') {
            return cb(false);
        } else {
            return cb(true);
        }
    });
}

module.exports = httpsqs;
