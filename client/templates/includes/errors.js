/**
 * Created by yuvraj.sidhu on 3/8/15.
 */

Template.errors.helpers({
    errors: function(){
        return Errors.find();
    }
});
