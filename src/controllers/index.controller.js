const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'firstapi',
    password: '1234',
    port: 5432,
});



const getUsers = async(req, res, next) => {
    const response = await pool.query('SELECT * FROM users');    
    console.log(response.rows)
    res.status(200).json(response.rows);
}
const getUserById = async(req, res)=>{
    const {id}=req.params;
    const user = await pool.query('SELECT * FROM users where id = $1', [id]);
    user.rows.length==0? res.send("There's no user with that ID available") : 
    res.status(200).json(user.rows);
    
}
const createUser = async(req, res, next) => {
    const {name, email} =req.body;
    //VALIDATE THE NAME AND EMAIL

    const response = await pool.query('INSERT INTO users (name, email) VALUES($1, $2)',[name, email]);
    console.log(response);


    res.status(200).json({
        message: "user successfully created",
        body: {
            user:{name, email},
        }
    });
}
const deleteUser = async(req, res)=>{
    const {id} =req.params;
    const user = await pool.query('DELETE FROM users WHERE id = $1',[id])
    console.log(user);
    res.json({
        message:'user deleted successfully',
        body: {
            id: id
        }
    })

}

const updateUser = async(req, res) => {
    const {id}=req.params;
    const {name, email} = req.body;

    const user = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);

    res.json({
        message: 'User updated successfully',
        body: {
            user: {
                name, email
            }
        }
    })
}
module.exports = {getUsers, createUser, getUserById, deleteUser, updateUser}