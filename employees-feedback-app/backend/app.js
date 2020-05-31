const express = require('express');

const app = express();

app.use("/api/posts/", (req, res, next) => {
    console.log('Expess Server Run');
    next();
});

app.use((req, res, next) => {
    const employees = [
        {
            id: 'asfiu3456b',
            name: 'Pradip',
            surname: 'Asodariya'
        },
        {
            id: '346urghrgf',
            name: 'Rimple',
            surname: 'Asodariya'
        }
    ]

    res.status(200).json({
        messege: 'get employees successfully',
        employees: employees
    });
});

module.exports = app;