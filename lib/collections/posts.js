/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        // only allow posting for logged in users
        return !! userId;
    }
});
