import express from 'express';

import { login, signup } from '../controllers/auth.js'
import { getAllUsers, updateProfile, makeFriends } from '../controllers/users.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/getallusers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)
router.patch('/add/:id', auth, makeFriends)

export default router