import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoas (id INTEGER PRIMARY KEY, name TEXT, idade INTEGER)')
    })
}

export async function selectPessoas(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Pessoas')
        .then(pessoas =>res.json(pessoas))
    })
}

export async function selectPessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Pessoas WHERE id=?', [id])
        .then(pessoa=>res.json(pessoa))
    })
}

export async function insertPessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Pessoas (name, idade) VALUES (?,?)', [pessoa.nome,  pessoa.idade]);
    })
    res.json({
        "statusCode": 200
    })
}
export async function updatePessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE Pessoas SET name=?, idade=? WHERE ID=? ', [pessoa.nome,  pessoa.idade, pessoa.id]);
    })
    res.json({
        "statusCode": 200
    })
}

export async function deletePessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
    db.get('DELETE FROM Pessoas WHERE id=?', [id])
        .then(res=>res)
    })
    res.json({
        "statusCode": 200
    })
}