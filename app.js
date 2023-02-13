require('dotenv').config()
const express=require('express');
const hbs= require('hbs');

const app=express();

console.log(process.env.PORT)
const port=process.env.PORT;

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servicio estatico
app.use(express.static('public'))

app.get('/',function(res,req){
    req.render('home',{
        nombre:'fernando',
        titulo:'curso'
    });
})

app.get('/generic',function(res,req){
    req.render('generic',{
        nombre:'fernando',
        titulo:'curso'
    });
})
app.get('/elements',function(res,req){
    req.render('elements',{
        nombre:'fernando',
        titulo:'curso'
    });
})
app.get('/holamundo', function(res,req){
    req.send('hola mundo')
})
app.get('*', function(res,req){
    req.send('page not found')
})
app.listen(port,()=>{
    console.log(`app escuchando en el puerto: http://localhost:${port}`)
});