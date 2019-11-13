let instituteSchema = require('./instituteSchema');
let promise = require('promise');

//DB Operation for Save operation
let saveTheInstitute = (parameter) => {
    return new promise(function (resolve, reject) {

        let saveInstitute = new instituteSchema(parameter);
        saveInstitute.save().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}

//DB Operation for Get operation
let getTheInstitute = (parameter) => {
    return new promise(function (resolve, reject) {
        instituteSchema.find().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}
//DB Operation for Update operation
let updateTheInstitute = (parameter) => {
    return new promise(function (resolve, reject) {
        instituteSchema.findByIdAndUpdate(parameter.id, {$set:parameter.formData}).then(function(updatedData){
            resolve(updatedData);
        })
    })

}


module.exports = {
    saveTheInstitute: saveTheInstitute,
    getTheInstitute:getTheInstitute,
    updateTheInstitute:updateTheInstitute
}