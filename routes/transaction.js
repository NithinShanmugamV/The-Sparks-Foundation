const express = require('express');
const router = express.Router();
const app = express();

router.get('/',(req,res) => {
    res.render('transaction');
    //res.send('Hello World');
})

module.exports = router;