/*const express = require('express');
const router = express.Router();
const UserC = require('../../models/UserC'); 
const TransC = require('../../models/TransC'); 
const HistoryC = require('../../models/HistoryC');
const {check, validationResult} = require('express-validator')
const alert = require('alert');

router.get('/', (req,res) => {
    res.render('transaction');
});
router.post('/', [
    check('account1', 'account is required').not().isEmpty(),
    check('amount', 'amount is required').not().isEmpty(),
    check('account2', 'account is required').not().isEmpty()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    try{
        let transC = new TransC({
            account1: req.body.account1,
            amount: req.body.amount,
            account2: req.body.account2
        })
        let customer1,customer2;

        //customer1 = await UserC.findOne({account: transC.account1})
        //customer2 = await UserC.findOne({account: transC.account2})
        let account;
        account = transC.account1;
        customer1 = await UserC.findOne({account})
        if(!customer1){
            alert("Account holder doesn't exist");
            res.redirect("/api/transaction");
        }
        customer2 = await UserC.findOne({account})
        account = transC.account2;
        if(!customer2){
            alert("Receiver doesn't exist");
            res.redirect("/api/transaction");
        }
        
        let update1;
        update1 = {balance: customer1.balance - transC.amount};
        customer1 = await UserC.findOneAndUpdate({account: transC.account1}, update1,{
            new: true
        });
        let update2;
        update2 = {balance: customer2.balance + transC.amount};
        customer2 = await UserC.findOneAndUpdate({account: transC.account2}, update2,{
            new: true
        });
        let historyC = new HistoryC({
            account1: transC.account1,
            account2: transC.account2,
            amount: req.body.amount
        })
        await historyC.save().then()
        //res.send([update1,update2, customer1,customer2]);
        res.redirect('/api/customers');
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
});



module.exports = router;
*/

const express = require('express');
const router = express.Router();
const UserC = require('../../models/UserC'); 
const TransC = require('../../models/TransC'); 
const HistoryC = require('../../models/HistoryC');
const {check, validationResult} = require('express-validator')
const Swal = require('sweetalert2')


router.get('/', (req,res) => {
    res.render('transaction');
});
router.post('/', [
    check('account1', 'account is required').not().isEmpty(),
    check('amount', 'amount is required').not().isEmpty(),
    check('account2', 'account is required').not().isEmpty()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    try{
        let transC = new TransC({
            account1: req.body.account1,
            amount: req.body.amount,
            account2: req.body.account2
        })

        let customer1 = await UserC.findOne({account: transC.account1})
        let customer2 = await UserC.findOne({account: transC.account2})
        //res.send([customer1,customer2])
        
        if(customer1 == null || !customer2 == null){
            //res.send("No account");
            res.redirect('/api/demo');
        }
        else {
            if(customer1.balance<2000){
                res.redirect('/api/balance');
            }
            let update1;
            update1 = {balance: customer1.balance - transC.amount};
            customer1 = await UserC.findOneAndUpdate({account: transC.account1}, update1,{
                new: true
            });
            let update2;
            update2 = {balance: customer2.balance + transC.amount};
            customer2 = await UserC.findOneAndUpdate({account: transC.account2}, update2,{
                new: true
            });
            let historyC = new HistoryC({
                account1: transC.account1,
                account2: transC.account2,
                amount: req.body.amount
            })
            await historyC.save().then()
            //res.send([update1,update2, customer1,customer2]);
            alert("User doesn't exist");
            res.redirect('/api/transaction');
        }
        
    }
    catch(err) {
        console.log(err.message);
        res.status(500).send('Server error')
    }
});



module.exports = router;
