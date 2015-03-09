/**
 * Created by yuvraj.sidhu on 3/8/15.
 */

// Local (client-side) collection
Errors = new Mongo.Collection(null);

throwError = function(message){
    Errors.insert({message: message});
};