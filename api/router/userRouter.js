const express = require('express');
const UserServices = require('../services/userServices');

function userRouter(app) {
    const router = express.Router();
    const userServ = new UserServices();

    app.use('/api', router);

    router.get('/users', async (req, res) => {
        try {

            const results = await userServ.geallUsers();
            res.json({
                msg: "Users retrieved successfully",
                data: results
            });

        } catch (error) {
            console.error(error);

        }
    });

    router.post('/users', async (req, res) => {
        try {
            // const data = req.body;
            const results = await userServ.postUser(req.body);
            res.json({
                msg: "User created successfully",
                data: results
            });

        } catch (error) {
            console.error(error);

        }
    });
}

module.exports = userRouter;