import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {askQuestion} from '../../actions/question'
import './AskQuestion.css'

const AskQuestion = () => {

    const [questionTitle, setquestionTitle] = useState("")
    const [questionBody, setquestionBody] = useState("")
    const [questionTags, setquestionTags] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name}, navigate))
    }

    const handleEnter = (e) => {
        if(e.key === "Enter"){
            setquestionBody(questionBody + "\n")
        }
    }

    return (
    <div className='askQuestion'>
        <div className='ask-question-container'>
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                    <label htmlFor='ask-q-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person</p>
                        <input type='text' onChange={(e) => {setquestionTitle(e.target.value)}} placeholder='e.g Is there an R function for finding the index of an element in a vector?' id='ask-q-title'/>
                    </label>
                    <label htmlFor='ask-q-body'>
                        <h4>Body</h4>
                        <p>Include all the information someone would need to answer your question</p>
                        <textarea name="" id="ask-q-body" onChange={(e) => {setquestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter}/>
                    </label>
                    <label htmlFor='ask-q-tags'>
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe what your question is about</p>
                        <input type='text' onChange={(e) => {setquestionTags(e.target.value.split(" "))}} placeholder='e.g. (xml typescript wordpress)' id='ask-q-tags'/>
                    </label>
                </div>
                <input type='submit' value='Review your question' className='review-btn'/>
            </form>
        </div>
    </div>
  )
}

export default AskQuestion