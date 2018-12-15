const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user.model');


passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
})
passport.use(
    new GoogleStrategy({
        //options for google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback funtion
        User.findOne({
            googleId: profile.id
        }).then((currentUser) => {
            if (currentUser) {
                done(null, currentUser);
                // console.log("Current User",currentUser);

            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    thumbnail: profile._json.image.url
                }).save().then((newUser) => {
                    done(null, newUser);
                    // console.log("New User Created ",newUser);
                })
            }
        })


    })
)