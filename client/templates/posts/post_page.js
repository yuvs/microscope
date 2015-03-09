/**
 * Created by yuvraj.sidhu on 3/9/15.
 */

Template.postPage.helpers({
    comments: function(){
        return Comments.find({postId: this._id});
    }
});
