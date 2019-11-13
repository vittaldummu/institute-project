let mongoose = require('mongoose');
let schema = mongoose.Schema;
let StudentSchema = new schema({
    student_name : {
        type : String,
        required : true
    },
    student_batch : {
        type : String,
        required : true
    },
    student_course : {
        type : String,
        required : true
    },
    student_adress : {
        type : String,
        required : true
    },
    isTrue : {
        type : Boolean,
        required:false
    },
});


module.exports = mongoose.model('Student', StudentSchema);