const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Employee = require('./models/employee');
const Review = require('./models/review');

const app = express();

mongoose.connect('mongodb+srv://pradip028:geN5SghIAN2bzwW9@cluster0-n7bqz.mongodb.net/employee-manage?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connect to MongoDB successfully!')
    }).catch(() => {
        console.log('Connect to MongoDB failed!')
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.get("/api/employees", (req, res, next) => {
    Employee.find().then((employeeData => {
        res.status(200).json({
            messege: 'get employees successfully',
            employees: employeeData
        });
    }));
});

app.post("/api/employees", (req, res, next) => {
    if (req.body._id) {
        /* Update new employee details */
        var query = { '_id': req.body._id };
        Employee.updateOne(query, req.body, function (err, doc) {
            res.status(200).json({
                messege: "employee info update sucessfully"
            });
        });
    } else {
        /* Add new employee details */
        const employee = new Employee({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            job_title: req.body.job_title,
            department: req.body.department,
            dob: req.body.dob,
            email: req.body.email,
            phone: req.body.phone,
        });

        employee.save();
        res.status(201).json({
            messege: "employee added sucessfully"
        });
    }
});

app.delete("/api/employees/:id", (req, res, next) => {
    Employee.deleteOne({ _id: req.params.id }).then(result => {
        res.status(200).json({
            messege: "employee deleted sucessfully"
        });
    });
});

app.post("/api/employee_get_by_id", (req, res, next) => {
    let data = req.body;
    Employee.findById(data.emplId).then((doc) => {
        if (doc) {
            res.status(200).json({
                messege: "get employee details sucessfully",
                data: doc
            });
        } else {
            console.log("No employee exist for this id");
        }
    })
});

app.post("/api/reviews", (req, res, next) => {
    if (req.body._id) {
        /* Update new employee details */
        var query = { '_id': req.body._id };
        Review.updateOne(query, req.body, function (err, doc) {
            res.status(200).json({
                messege: "review update sucessfully"
            });
        });
    } else {
        const review = new Review({
            quality_work: req.body.quality_work,
            relation_coworkers: req.body.relation_coworkers,
            initiative: req.body.initiative,
            communication: req.body.communication,
            time_period_to: req.body.time_period_to,
            time_period_from: req.body.time_period_from,
            reviewer: req.body.reviewer,
            feedback: req.body.feedback,
        });

        review.save();
        res.status(201).json({
            messege: "review added sucessfully"
        });
    }
});

app.get("/api/reviews", (req, res, next) => {
    Review.find().then((reviewData => {
        res.status(200).json({
            messege: 'get reviews successfully',
            reviews: reviewData
        });
    }));
});

module.exports = app;
