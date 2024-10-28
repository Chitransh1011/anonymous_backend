const express = require('express');
const { signup, login, getUserById, updateUser, deleteUser } = require('../controllers/auth_controller');
const router = express.Router();


router.post('/signup', signup);


router.post('/login', login);


router.get('/:id', getUserById);


router.put('/:id', updateUser);


router.delete('/:id', deleteUser);

module.exports = router;
