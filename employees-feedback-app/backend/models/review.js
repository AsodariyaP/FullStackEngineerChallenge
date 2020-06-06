const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    quality_work: { type: String },
    relation_coworkers: { type: String },
    initiative: { type: String },
    communication: { type: String },
    time_period_to: { type: Date },
    time_period_from: { type: Date },
    reviewer: { type:  String },
    feedback: { type: String }
});

module.exports = mongoose.model('Review', reviewSchema);