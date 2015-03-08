/**
 * Created by yuvraj.sidhu on 3/8/15.
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc){
    return doc && doc.userId === userId;
}
