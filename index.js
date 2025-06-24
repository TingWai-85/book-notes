import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;
const { types } = pg;
types.setTypeParser(20, val => val);
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "booknote",
    password: "testing123",
    port: 5432
})

db.connect();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

async function getBooks() {
    try {
        const result = await db.query("SELECT * FROM book");
        result.rows.forEach((book) => {
            var originalDateFormat = book.date;
            book.date = new Date(originalDateFormat).toDateString();
        })    
        return result.rows;       
    } catch (error) {
        console.log(error);
    }
}

function SQLdate() {
    const date = new Date();
    const isoDate = date.toISOString();
    const sqlDate = isoDate.slice(0,10);
    return sqlDate
}

app.get("/", async (req, res) => {    
    const books = await getBooks();
    res.render("index.ejs", {
        booklists: books
    });
})

app.get("/home", (req, res) => {
    res.redirect("/");
})

app.get("/add", (req, res) => {
    const currentDate = SQLdate();
    
    res.render("add.ejs", {
        currentData: {
            currTitle: "",
            currISBN : "",
            currAuthor: "",
            currThought : "",
            currDate : currentDate,
            currentRating: 0,
            currAction : "Add"
        }
    });
})


app.post("/addbook", async (req, res) => {
    const item = req.body;
    
    if (item.addUpdate === "Add"){
        try {
            await db.query("INSERT INTO book (title, isbn, author, thought, date, rating) VALUES ($1,$2,$3,$4,$5,$6)", [item.bookTitle, BigInt(item.bookIsbn), item.bookAuthor, item.readThough, item.reviewDate, item.rating])
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            await db.query("UPDATE book SET title = $1, isbn = $2, author = $3, thought = $4, date = $5, rating = $6 WHERE isbn = $2", [item.bookTitle, BigInt(item.bookIsbn), item.bookAuthor, item.readThough, item.reviewDate, item.rating])
        } catch (error) {
            console.log(error);
        }
    }
    res.redirect("/");
    
})

app.get("/books", async (req, res) => {
    const filter = req.query.filter;
    var sortColumn = "";
    var sortDirection = "";

    switch (filter){
        case "Title A > Z":
            sortColumn = "title";
            sortDirection = "ASC";
            break;
        case "Title Z > A":
            sortColumn = "title";
            sortDirection = "DESC";
            break;
        case "Author A > Z":
            sortColumn = "author";
            sortDirection = "ASC";
            break;
        case "Author Z > A":
            sortColumn = "author";
            sortDirection = "DESC";
            break;
        default:
            sortColumn = "id"
            sortDirection = "ASC";
    }

    try {
        const result = await db.query(`SELECT * FROM book ORDER BY ${sortColumn} ${sortDirection}`);
        result.rows.forEach((book) => {
            var originalDateFormat = book.date;
            book.date = new Date(originalDateFormat).toDateString();
        }) 
        const books = result.rows;
        res.render("index.ejs", {
            booklists: books
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

})

app.get("/editBook/:id", async (req, res) => {
    const isbn = req.params.id;
    const currentDate = SQLdate();
    try {
        const result = await db.query("SELECT * FROM book WHERE isbn = $1",[isbn])
        const book = result.rows[0];
        
        

        res.render("add.ejs", {
            currentData: {
                currTitle: book.title,
                currISBN : book.isbn,
                currAuthor: book.author,
                currThought : book.thought,
                currDate : currentDate,
                currentRating: 0,
                currAction : "Update"
            }

        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

app.post("/delete/:id", async (req, res) => {
    const isbn = req.params.id;

    try {
        await db.query("DELETE FROM book WHERE isbn = $1",[isbn]);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})
