// const express = require('express');
// const connectDB = require('./config/db');
// const app = express();

// //connect to database
// connectDB();
// //app.get('/', (req, res) => res.send('API Running'));
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));
// app.set('view engine','ejs');
// app.get('/',(req,res) => {
//     res.render('index');
// });

const express = require('express');
const mongoose = require('mongoose');
const customerRouter = require('./routes/customers');
const transactionRouter = require('./routes/transaction');
const addUserRouter = require('./routes/addUser');
const app = express();
mongoose.connect("mongodb+srv://nithin888:nithin888@cluster0.eky1s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
app.set('view engine','ejs');

app.use('/customers',customerRouter);
app.use('/transaction',transactionRouter);
app.use('/addUser',addUserRouter);

app.get('/',(req,res) => {
    res.render('index');
    //res.send('Hello World');
});

app.listen(5000);