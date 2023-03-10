const {Router} = require('express');
const route = Router();

const {getUsers, createUser, getUserById, deleteUser, updateUser} = require('../controllers/index.controller');

route.get('/users', getUsers);
route.get('/users/:id', getUserById)
route.post('/users', createUser);
route.delete('/users/:id', deleteUser);
route.put('/users/:id', updateUser);

module.exports = route;