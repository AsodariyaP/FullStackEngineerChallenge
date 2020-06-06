const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    job_title: { type: String },
    department: { type: String },
    dob: { type: Date },
    email: { type:  String },
    phone: { type: String }
});

module.exports = mongoose.model('Employee', employeeSchema);