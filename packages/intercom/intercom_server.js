/**
 * Created by yuvraj.sidhu on 3/12/15.
 */

var crypto = Npm.require('crypto');

IntercomHash = function(user, secret){
    var secret = new Buffer(secret, 'utf8')
    return crypto.createHmac('sha256', secret)
        .update(user._id).digest('hex');
}

