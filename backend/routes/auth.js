const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const ADMIN_USER = {
  username: 'admin',
  password: bcrypt.hashSync('123456', 10), 
};

router.post('/login', async(req, res) => {
    const {username, password} = req.body;

    if(username !== ADMIN_USER.username){
        return res.status(401).json({message: 'Invalid username or password'})
    }
    const isMatch = await bcrypt.compare(password, ADMIN_USER.password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid username or password'})
    }

    const token = jwt.sign({username}, 'secret_jwt_key', {expiresIn:'1h'})

    res.json({token})
})

module.exports = router;