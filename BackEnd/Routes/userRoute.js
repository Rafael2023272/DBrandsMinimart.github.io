import express from 'express';
import User from '../model/userModel.js';
const router = express.router();

router.post('/',async(req, res)=>{
    const { name, email, password } = req.body;
    try {
        const newUser = new User({name, email, password, First_name});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/login',async(req, res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        res.json({user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;
