import express from 'express';
import auth from '../middleware/auth.js'

import { askQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/questions.js' 

const router = express.Router()

router.post('/ask', auth, askQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id', auth, deleteQuestion )
router.patch('/vote/:id',  auth, voteQuestion)

export default router