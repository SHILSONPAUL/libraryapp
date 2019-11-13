const express = require('express');
const chalk = require('chalk');
const path = require('path');

var app = new express(); //creating a constructor for express object
const booksRouter = express.Router();

app.use(express.static(path.join(__dirname,"/public"))); // to recieve sttaic files from public
app.use('/books',booksRouter);
app.set('views','./src/views');
app.set('view engine','ejs');
var nav = [{link:'/',title:'Home'},
        {link:'/signup',title:'Signup'},
        {link:'/login',title:'Login'},
        {link:'/books',title:'Books'},
        {link:'/authors',title:'Authors'}]
var books = [
    {
        title: "War and Peace",
        genre: "Historical Fiction",
        author: "Lev Nicola",
        image: "book1.jpg"
    },
    {
        title: "Les Miserables",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image:"book2.jpg"
    },
    {
        title: "Harry Potter",
        genre: "Magical Fiction",
        author: "J.K Rowling",
        image:"book3.jpg"
    },
    {
        title: "End of the Beginning",
        genre: "Drama",
        author: "Harry weslie",
        image:"book4.jpg"
    }
];

booksRouter.route('/').get((req,res)=>{
    res.render('books',
        {nav,
        title:"Books",
        books})
    });

app.get('/',(req,res)=>{
    // res.render('Index.ejs',{list:['book1','book2','book3'],title:"Library"});
    res.render('Index.ejs', {nav:[{link:'/',title:'Home'},
                                {link:'/signup',title:'Signup'},
                                {link:'/login',title:'Login'},
                                {link:'/books',title:'Books'},
                                {link:'/authors',title:'Authors'}],
                                title:"Library"
    }
                            
    );
});
app.get('/',(req,res)=>{
    // res.send('This is my first  application')
//     res.sendFile(__dirname+"/src/views/Index.html");
    res.sendFile(path.join(__dirname,"/src/views/Index.html"));
})
app.listen(3800,()=>{
    console.log(chalk.yellow('Listening to port 3800'));
}); // selecting the port