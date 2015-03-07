/**
 * Created by yuvraj.sidhu on 3/7/15.
 */

Template.postItem.helpers({
    domain: function(){
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
