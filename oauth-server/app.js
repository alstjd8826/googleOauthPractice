const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const PORT = process.env.PORT || 4000;

app.use(session({secret:'MySecret', resave:false,saveUninitialized:true}))

// Passport setting
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({ origin: true })
);

app.use('/main', require('./routes/main'))
app.use('/login', require('./routes/login'))

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})