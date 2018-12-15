const express = require('express');
const app = express();
const authRouter = require('./routes/auth.routes');
const profileRouter = require('./routes/profile.routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const reload = require('reload');
const path = require('path');
app.set('view engine', 'hbs');
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(passport.initialize());
app.use(passport.session());
// app.use(function(req, res, next) {
//     // Set the authenticated user in the
//     // template locals
//     if (req.user) {        
//       res.locals.user = req.user;
//     }
//     next();
//   });

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodb.dbURL, (err) => {
    if (err)
        console.log(err);
    console.log("Connected to mongoDB");
})

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.get('/', (req, res) => {
    res.render('index', { user: req.user });
})


app.listen(10010, () => {
    console.log("App lisining on 10010 Port");
})
reload(app);