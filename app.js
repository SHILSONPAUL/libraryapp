const express = require('express');
const chalk = require('chalk');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
var app = new express(); //creating a constructor for express object
var nav = [{link:'/',title:'Home'},
            {link:'/signup',title:'Signup'},
            {link:'/login',title:'Login'},
            {link:'/books',title:'Books'},
            {link:'/authors',title:'Authors'},
            {link: '/books/add',title: 'Add Book'}
        ];
var authorRouter = require('./src/routes/authorRoutes')(nav);
var booksRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static(path.join(__dirname,"/public"))); // to recieve sttaic files from public

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/books/add',booksRouter);

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.render('Index.ejs',{list:['book1','book2','book3'],title:"Library"});
    res.render('Index.ejs', {nav, title:"Library"}
                            
    );
});
// app.get('/',(req,res)=>{
//     // res.send('This is my first  application')
// //     res.sendFile(__dirname+"/src/views/Index.html");
//     res.sendFile(path.join(__dirname,"/src/views/Index.html"));
// })
app.listen(4000,()=>{
    console.log(chalk.yellow('Listening to port 4000'));
}); // selecting the port