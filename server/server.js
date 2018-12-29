import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import Blog from './models/blog';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

        /* MONGO CONNECTION */

mongoose
  .connect('mongodb://rheawin:asdas111@ds145184.mlab.com:45184/blog')
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('MongoDB Not Connected');
});
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
app.listen(8000,() => console.log('server başladı'))