/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Template.postsList.helpers({
    posts: function(){
        return Posts.find({}, {sort: {submitted: -1}});
    }
});
