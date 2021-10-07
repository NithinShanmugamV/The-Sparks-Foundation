const express = require('express');
const router = express.Router();
const app = express();

router.get('/',(req,res) => {
    const customers = [{
        account: 10001,
        name: "Nithin Shanmugam",
        email: "nithinshanmugam8@gmail.com",
        balance: 5000000
    }]
    res.render('customersPage', {customers: customers});
    //res.send('Hello World');
})

module.exports = router;