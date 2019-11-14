const express = require("express");
var authorRouter = express.Router();
var authors = [
    {
        title: "War and Peace",
        genre: "Historical Fiction",
        author: "Lev Nicola",
        image: "book1.jpg",
        content: "In Les Misérables, Jean Valjean spends nineteen"
    },
    {
        title: "Les Miserables",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image:"book2.jpg",
        content: "In Les Misérables, Jean Valjean spends nineteen years in prison for stealing a loaf of bread. After release, he's plagued by a suspicious police inspector, Javert. Valjean and his adopted daughter Cosette face much hardship, but finally find peace at the end of the novel."
    },
    {
        title: "Harry Potter",
        genre: "Magical Fiction",
        author: "J.K Rowling",
        image:"book3.jpg",
        content: "Adaptation of the first of J.K. Rowling's popular children's novels about Harry Potter, a boy who learns on his eleventh birthday that he is the orphaned son of two powerful wizards and possesses unique magical powers of his own. He is summoned from his life as an unwanted child to become a student at Hogwarts, an English boarding school for wizards. There, he meets several friends who become his closest allies and help him discover the truth about his parents' mysterious deaths."

    },
    {
        title: "End of the Beginning",
        genre: "Drama",
        author: "Harry weslie",
        image:"book4.jpg",
        content: "Adaptation of the first of J.K. Rowling's popular"
    }
];
function router(nav){
    authorRouter.route('/').get((req,res)=>{
        res.render('authors',
        {nav,title: 'Authors',
        authors});
    });
    authorRouter.route('/:id').get((req,res)=>{
        const id = req.params.id;
        res.render('author',
        {nav,title: 'Authors',
        auth: authors[id]})  
    });
    return authorRouter;
}
module.exports = router;