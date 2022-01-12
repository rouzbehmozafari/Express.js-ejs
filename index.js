const express = require('express');
// const menu = require('./assets/db');
let movies = require('./assets/movies')
let menu = [
    {
        "name": "Home",
        "url": "/"
    },
    {
        "name": "Team",
        "url": "/team"
    },
    {
        "name": "About",
        "url": "/about"
    },
    {
        "name": "Contact",
        "url": "/contact"
    },
    {
        "name": "Gallery",
        "url": "/gallery"
    },
    {
        'styleAddr' : '../../assets/styles/style.css'
    }]
    
// console.log(menu[5].styleAddr)
// console.log(movies[0])

const app = express()

app.use((req,_,next)=>{
    console.log(req.url)
    next()
})
app.get('/',(req,res)=>{
    res.render(__dirname+'/views/pages/home.ejs',{menu})
})
app.get('/team',(req,res)=>{
    res.render(__dirname+'/views/pages/team.ejs',{menu})
})
app.get('/about',(req,res)=>{
    res.render(__dirname+'/views/pages/about.ejs',{menu})
})
app.get('/contact',(req,res)=>{
    res.render(__dirname+'/views/pages/contact.ejs',{menu})
})
app.get('/gallery',(req,res)=>{
    res.render(__dirname+'/views/pages/gallery.ejs',{menu,movies})
})
app.get('/assets/styles/style.css',(req,res)=>{
    res.sendFile(__dirname+'/assets/styles/style.css')
})
app.use((_,res)=>{
    res.sendFile(__dirname+ '/assets/pages/error.html')
})

const port = 3030
app.listen(port,()=> console.log('listening on: ',port))