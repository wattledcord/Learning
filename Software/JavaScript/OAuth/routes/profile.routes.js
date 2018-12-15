const router = require('express').Router();


const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else
        next();
};
router.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.user, active: { profile: true } });
    // res.send("You are logged in this is your Profile -"+req.user.username);
})
module.exports = router;