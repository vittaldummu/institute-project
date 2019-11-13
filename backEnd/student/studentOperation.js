let studentSchema = require('./studentSchema');
let promise = require('promise');

//DB Operation for Save operation
let saveTheStudent = (parameter) => {
    return new promise(function (resolve, reject) {

        let saveStudent = new studentSchema(parameter);
        saveStudent.save().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}

//DB Operation for Get operation
let getTheStudent = (parameter) => {
    return new promise(function (resolve, reject) {
        studentSchema.find().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}
//DB Operation for Update operation
let updateTheStudent = (parameter) => {
    return new promise(function (resolve, reject) {
        studentSchema.findByIdAndUpdate(parameter.id, {$set:parameter.formData}).then(function(updatedData){
            resolve(updatedData);
        })
    })

}


module.exports = {
    saveTheStudent: saveTheStudent,
    getTheStudent:getTheStudent,
    updateTheStudent:updateTheStudent
}