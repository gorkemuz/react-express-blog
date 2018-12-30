const passport = require('passport');
const LocalStrategy = require('./localStrategy')
const User = require('../database/models/user')

//  Use Strategies 
passport.use(LocalStrategy)

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
    if(!user){
        console.log('no user')
    }else{
	console.log('*** serializeUser called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })}
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('------------------DeserializeUser called')
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
            if(err){
                console.log(err)
            }
            else{
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
            done(null, user)
            }
		}
	)
})


module.exports = passport;