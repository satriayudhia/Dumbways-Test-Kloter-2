const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_news'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/post', (req, res) => {
    const sqlSelect = "SELECT * FROM news";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.get('/detail/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT * FROM news WHERE id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    });
});

app.get('/update/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT * FROM news WHERE id = ?";
    db.query(sqlSelect, id, (err, result) => {
        res.send(result)
    });
});

app.get('/post/getId', (req, res) => {
    const sqlSelect = "SELECT id, name FROM user";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
});

app.post("/post/news", (req, res) => {

    const title = req.body.title
    const image = req.body.image
    const deskripsi = req.body.deskripsi
    const create_time = req.body.create_time
    const user_id = req.body.user_id

    const sqlInsert = "INSERT INTO news (title, image, deskripsi, create_time, user_id) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [title, image, deskripsi, create_time, user_id], (err, result) => {
        console.log(result);
    });
});

app.post("/post/user", (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const role = req.body.role

    const sqlInsert = "INSERT INTO user (name, email, role) VALUES (?,?,?)";
    db.query(sqlInsert, [name, email, role], (err, result) => {
        console.log(result);
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM news WHERE id = ?";

    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err);
    });
})

app.put('/update/:id', (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const image = req.body.image
    const deskripsi = req.body.deskripsi
    const create_time = req.body.create_time
    const sqlUpdate = "UPDATE news SET title = ?, image = ?, deskripsi = ?, create_time = ? WHERE id = ?";

    db.query(sqlUpdate, [title, image, deskripsi, create_time, id], (err, result) => {
        if(err) console.log(err);
    });
})

app.listen(3001, () => {
    console.log('running port 3001');
});