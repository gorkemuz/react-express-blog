import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Blog from './database/models/blog';
import User from './database/models/user';
import dbConnection from './database';
import passport from './passport';
import morgan from 'morgan';
import session from 'express-session';
const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());


app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


        /* MONGO CONNECTION */

app.get('/user', (req, res, next) => {
    console.log('===== userss!s!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

        /* POST REQUESTS */ 
app.post('/add-post',(req,res) => {
    const blog = new Blog();
    blog.title = req.body.title;
    blog.text = req.body.text;
    blog.today = req.body.today;
    blog.save(function(err) {
        if (err) throw err
        return res.status(200).json({
            success:true,
            redirectUrl: '/'
        })
    })
})
app.post('/fetch-post-list',(req,res) => {
    Blog.find({},(err,data) => {
        res.send(data);
      })

})
app.post('/fetch-post',(req,res) => {
    Blog.find({
        _id: req.body.url
    },(err,data) => {
        res.send(data);
      })

})
app.post('/delete', (req,res) => {
    Blog.deleteOne({
        _id: req.body.id
    }).then(()=>{
        return res.status(200).json({
            success:true,
        })
    })
})
app.post('/register', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    // ADD VALIDATION
    User.findOne({ username: username }, (err) => {
        if (err) {
            console.log('User.js post error: ', err)
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})
app.post(
    '/login',
    function (req, res, next) {
        console.log('routses/user.js, login, req.body: ');
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)
app.listen(8000,() => console.log('server başladı'))