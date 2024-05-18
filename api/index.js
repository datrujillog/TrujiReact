const express = require('express');
const dev = require('morgan');

const User = require('./router/userRouter');



const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(dev('dev'));

router.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(router);
User(app);

app.listen(port, () => { console.log(`Server is running on port ${port}`) });