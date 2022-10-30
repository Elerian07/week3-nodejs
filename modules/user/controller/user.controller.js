import q from '../../../DB/connection.js'

const getAllUsers = (req, res) => {

    q.execute('select * from users', (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}

const addUsers = (req, res) => {
    let { Name, Age, Email, Password } = req.body
    q.execute(`INSERT INTO users (Name,Age,Email,Password) VALUES ( '${Name} ' ,'${Age} ' , ' ${Email} ' , '${Password}')`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}


const updatUser = (req, res) => {
    let { ID } = req.params;
    let { Name } = req.body;


    q.execute(`UPDATE users SET Name= '${Name}'  WHERE ID ='${ID}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const deleteUser = (req, res) => {
    let { ID } = req.params;
    q.execute(`DELETE FROM users WHERE ID = '${ID}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const getUser = (req, res) => {
    let { searchKey } = req.query;
    q.execute(`select * from users where ID = '${searchKey}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } if (result.affectedraw) {
            res.json({ message: "Done", result })
        } else {
            res.json({ message: "invalid id", result })
        }
    })

}

const search = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`select * from users where Name like '${searchKey}%'`, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const searchNa = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`SELECT * FROM users WHERE  Name like '${searchKey}%' AND Age < 30`, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const searchAge = (req, res) => {


    q.execute(`SELECT * FROM users WHERE Age BETWEEN 20 AND 40 `, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const searchOld = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`SELECT * FROM users WHERE Name like '${searchKey}%' AND Age > 50 `, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}
const usersReversed = (req, res) => {
    q.execute('SELECT * FROM users ORDER BY ID DESC', (err, result) => {

        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })

}

const searchYoung = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`SELECT * FROM users WHERE Name like '${searchKey}%' AND  Age BETWEEN 20 AND 25 `, (err, result) => {

        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}


export {
    getAllUsers,
    addUsers,
    updatUser,
    deleteUser,
    getUser,
    search,
    usersReversed,
    searchNa,
    searchAge,
    searchOld,
    searchYoung,
}
